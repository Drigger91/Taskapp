import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

function Logout() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

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
      if (res) {
        dispatch({ type: "USER", payload: false });
      }
    } catch (error) {
      console.log(error);
    }
    history.push("/login", { replace: true });
  };
  useEffect(() => {
    LogOut();
  }, []);

  return <div></div>;
}

export default Logout;
