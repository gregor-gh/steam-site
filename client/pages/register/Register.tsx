import React from "react";
import "./Register.css";
import SIGN_IN_WITH_STEAM from "../../public/sign-in-with-steam.png";

export const Register = () => {
  return (
    <div className="register">
      <div className="register-box">
        <p>
          Sign in with Steam to get a personalised news feed and achievement
          tracking. Only your username and SteamID will be stored.
        </p>
        <img
          className="sign-in-with-steam"
          src={SIGN_IN_WITH_STEAM}
          alt="Sign in with Steam button"
        />
      </div>
    </div>
  );
};
