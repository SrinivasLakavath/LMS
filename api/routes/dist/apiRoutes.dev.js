"use strict";

<<<<<<< HEAD
// /api/routes/apiRoutes.js
=======
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
var express = require("express");

var router = express.Router();

<<<<<<< HEAD
var apiCoursesController = require("../controllers/apiCoursesController"); // Routes for handling course-related API requests


router.get("/courses", apiCoursesController.getCourses); // Get all courses

router.get("/courses/:id", apiCoursesController.getCourseById); // Get a specific course by ID
// Route for handling review submissions (adding a review to a specific course)

router.post("/courses/:id/reviews", apiCoursesController.addReview); // Add a review to a specific course
=======
var ctrlCourses = require("../controllers/courseController");

var reviewController = require("../controllers/reviewController"); // Define API routes for courses


router.get("/courses", ctrlCourses.getCourseList); // List all courses

router.get("/courses/:id", ctrlCourses.getCourseDetails); // Get a specific course by ID
// Define API routes for reviews

router.post("/courses/:id/reviews", reviewController.addReview); // Add a review for a specific course

router.get("/courses/:id/reviews", reviewController.reviewList); // Get all reviews for a specific course
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

module.exports = router;
//# sourceMappingURL=apiRoutes.dev.js.map
