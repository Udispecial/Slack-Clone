import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.kindpng.com/picc/m/146-1461685_slack-logo-png-white-transparent-png.png"
          alt=""
        />
        <h1>Sign in to My Work Space</h1>
        <p>designeChi.slack.com</p>
        <Button onClick={signin}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
