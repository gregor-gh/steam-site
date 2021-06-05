import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/", passport.authenticate("steam", {successRedirect:"/", failureRedirect:"/"}), (req, res, next) => {
  console.log("TEST")
});

// router.get("/callback", (req, res, next) => {
//   console.log("callback")
// })

router.get(
  "/callback",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function (req, res) {
      if (process.env.NODE_ENV === "production") return res.redirect("/");
      res.redirect("http://localhost:8080");
  }
);

export default router;
