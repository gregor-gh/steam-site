import React from "react";
import "./Register.css";
import SIGN_IN_WITH_STEAM from "../../public/sign-in-with-steam.png";
import { Button } from "../../components/Button";

export const Register = () => {
  return (
    <div className="register">
      <div className="register-box">
        <p>
          Sign in with Steam to get a personalised news feed and achievement
          tracking. No personal information is stored, only your username to log
          in and your SteamID to track achievements.
        </p>
        <a href="/api/auth">
          <img
            className="sign-in-with-steam"
            src={SIGN_IN_WITH_STEAM}
            alt="Sign in with Steam button"
          />
        </a>

        <p>Alternatively sign in as a demo account:</p>
        <a href="/api/auth/demo"><Button>Sign in with demo account[not currently working]</Button></a>
      </div>
    </div>
  );
};
