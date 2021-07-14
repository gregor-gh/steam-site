import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/",
  passport.authenticate("steam", {
    successRedirect: "/register",
    failureRedirect: "/",
  })
);

router.get(
  "/callback",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (req, res) => {
    if (process.env.NODE_ENV === "PROD") return res.redirect("/register");
    res.redirect("http://localhost:8080"); //TODO give a proper route
  }
);

export default router;
