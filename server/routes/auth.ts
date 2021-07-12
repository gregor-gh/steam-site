import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/",
  passport.authenticate("steam", {
    successRedirect: "/register",
    failureRedirect: "/",
  }),
  (req, res, next) => {
    // Redirect to steam to authenticate
  }
);

router.get(
  "/callback",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
    if (process.env.NODE_ENV === "PROD") return res.redirect("/register");
    res.redirect("http://localhost:8080/register");
  }
);

export default router;
