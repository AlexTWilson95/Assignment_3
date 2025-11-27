const express = require("express");
const router = express.Router();
const User = require("../models/user");

// SIGNUP FORM PAGE
router.get("/signup", (req, res) => {
  res.render("signup", { title: "Signup", user: null });
});

// SIGNUP REQUEST
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    await User.create({ username, password });

    res.redirect("/login");
  } catch (err) {
    res.status(400).send("Username already exists");
  }
});

// LOGIN FORM PAGE
router.get("/login", (req, res) => {
  res.render("login", { title: "Login", user: null });
});

// LOGIN REQUEST
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.send("Invalid username or password.");
  }

  req.session.user = user; // store in session

  res.redirect("/");
});

// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
