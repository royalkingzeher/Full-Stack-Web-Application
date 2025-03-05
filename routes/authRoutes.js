const express = require("express");
const passport = require("passport");
const router = express.Router();

require("../config/passportSetup");

router.get("/google", passport.authenticate("google", { scope: ["profile", "email", "https://www.googleapis.com/auth/drive.file"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("http://localhost:5173/dashboard");
});

router.get("/logout", (req, res) => {
  req.logout(() => res.redirect("/"));
});

module.exports = router;
