require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");

const app = express();

// Import Routes
const authRoutes = require("./routes/auth");
const indexRoutes = require("./routes/index");
const workoutRoutes = require("./routes/workouts");


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use(
  session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/", authRoutes);
app.use("/", indexRoutes);
app.use("/workouts", workoutRoutes);

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));

