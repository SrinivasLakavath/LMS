"use strict";

<<<<<<< HEAD
=======
// app.js 
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
var express = require("express");

var path = require("path");

var cookieParser = require("cookie-parser");

var logger = require("morgan");

require("./api/models/db"); // Ensure your MongoDB connection is established


var indexRouter = require("./server/routes/index"); // Index/Home routes


var courseRouter = require("./server/routes/courseRoutes"); // Course routes


<<<<<<< HEAD
=======
var reviewRouter = require("./server/routes/reviewRoutes"); // Review routes


>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
var app = express(); // View engine setup

app.set("views", path.join(__dirname, "server", "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, "public"))); // Set up routes

app.use("/", indexRouter); // Home routes or general routes

<<<<<<< HEAD
app.use("/courses", courseRouter); // All course-related routes, including reviews
=======
app.use("/courses", courseRouter); // All course-related routes

app.use("/reviews", reviewRouter); // All review-related routes
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
// Catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
}); // Error handler

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
//# sourceMappingURL=app.dev.js.map
