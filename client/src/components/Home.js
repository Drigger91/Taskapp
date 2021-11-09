import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Tasks from "./Tasks";

function Home() {
  const history = useHistory();

  const [User, setUser] = useState({});
  const [display, setdisplay] = useState("home-container");
  const [display2, setdisplay2] = useState("d-none");
  const callPage = async () => {
    try {
      const res = await fetch("/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setdisplay("d-none");
      setUser(data);

      if (res.status === 200) {
        setdisplay2("main-container");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    callPage();
  }, []);

  const LogOut = async (e) => {
    try {
      const res = await fetch("/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
    history.push("/login", { replace: true });
  };

  return (
    <>
      <div className={display}>
        <div className="home-animation">
          {" "}
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_puciaact.json"
            background="transparent"
            speed=".5"
            loop
            autoplay
          ></lottie-player>{" "}
          <br />
        </div>
        <div>
          <form className="text-align-center" method="POST">
            <h2>
              Welcome to <b id="nav-logo">Task-App!</b>
            </h2>

            <div className="mb-3">
              <h3>
                If you are new SignUp here -{" "}
                <NavLink className="nav-link active" to="/SignUp">
                  <button className="btn btn-primary">Signup</button>
                </NavLink>
              </h3>
            </div>
            <div className="mb-3">
              <h3>
                If already a User Login here -{" "}
                <NavLink className="nav-link active" to="/login">
                  <button className="btn btn-primary">Login</button>
                </NavLink>
              </h3>
            </div>
          </form>
        </div>
      </div>
      <div className={display2}>
        <h1>
          Welcome <span className="user-heading"> {User.name}</span>
        </h1>
        <button className="btn btn-primary" onClick={LogOut}>
          {" "}
          LogOut
        </button>
        <div className="task-ui">
          <Tasks owner={User._id}></Tasks>
        </div>
      </div>
    </>
  );
}

export default Home;
