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

router.post(
  "/demo",
  passport.authenticate("demo", {
    successRedirect: "/",
    failureRedirect: "/register",
  })
);

router.get(
  "/callback",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (_req, res) => {
    if (process.env.NODE_ENV === "PROD") return res.redirect("/register");
    res.redirect("http://localhost:8080"); //TODO give a proper route
  }
);

router.get("/is-logged-in", (req, res, _next) => {
  if (req.isAuthenticated()) return res.send(req.user);
  else return res.status(401).send("NO");
});

router.get("/log-out", (req, res, _next) => {
  req.logOut();
  res.send("OK");
});

export default router;
