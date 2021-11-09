const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const auth = require("../middleware/auth");
const { application } = require("express");

router.post("/users", async (req, res) => {
  try {
    const user = await new User(req.body);

    user
      .save()
      .then(() => {
        const token = user.AuthToken();
        res.status(201).send({ user, token });
      })
      .catch((error) => {
        res.status(400).send("Email already taken, try another one!");
      });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.AuthToken();
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 25892000),
      httpOnly: true,
    });
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    res.clearCookie("jwtoken", { path: "/" });
    await req.user.save();

    res.status(200).send("Logged out");
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/users/me", auth, (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send("Failed");
  }
});

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isvalidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isvalidOperation) {
    return res
      .status(400)
      .send(
        'Provided term/terms cannot get updated!! \n You can update only "name,age,email,password"'
      );
  }
  try {
    const user = req.user;
    updates.forEach((update) => {
      user[update] = req.body[update]; //dynamically changing values for user object
    });
    await user.save(); //calling middleware 'pre' before saving for hashing the password
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.delete("/users/me", auth, async (req, res) => {
  const user = req.user;
  try {
    await user.remove;
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
