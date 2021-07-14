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
    console.log(req.user?.id);

    if (process.env.NODE_ENV === "PROD") return res.redirect("/register");
    res.redirect("http://localhost:8080/register"); //TODO give a proper route
  }
);

export default router;
