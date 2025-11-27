const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");   // <-- REQUIRED FIX

// Homepage
router.get("/", (req, res) => {
  res.render("index", { 
    user: req.session.user || null, 
    title: "Home" 
  });
});

// Sample access
router.get("/sample", async (req, res) => {
  const workoutId = '6927bf9a815665e266dd187c' ;

  try {
    const workout = await Workout.findById(workoutId);

    if (!workout) return res.send("Sample workout not found.");

    res.render("viewworkout", {
      title: "View Workout",
      user: req.session.user || null,
      workout
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading sample workout");
  }
});

// Profile page
router.get("/profile", async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const workoutCount = await Workout.countDocuments({
    username: req.session.user.username
  });

  res.render("profile", { 
    title: "Profile",
    user: req.session.user,
    workoutCount        // <-- PASS IT TO EJS
  });
});

module.exports = router;


