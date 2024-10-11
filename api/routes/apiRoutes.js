<<<<<<< HEAD
// /api/routes/apiRoutes.js
const express = require("express");
const router = express.Router();
const apiCoursesController = require("../controllers/apiCoursesController");

// Routes for handling course-related API requests
router.get("/courses", apiCoursesController.getCourses); // Get all courses
router.get("/courses/:id", apiCoursesController.getCourseById); // Get a specific course by ID

// Route for handling review submissions (adding a review to a specific course)
router.post("/courses/:id/reviews", apiCoursesController.addReview); // Add a review to a specific course
=======
const express = require("express");
const router = express.Router();
const ctrlCourses = require("../controllers/courseController");
const reviewController = require("../controllers/reviewController");

// Define API routes for courses
router.get("/courses", ctrlCourses.getCourseList); // List all courses
router.get("/courses/:id", ctrlCourses.getCourseDetails); // Get a specific course by ID

// Define API routes for reviews
router.post("/courses/:id/reviews", reviewController.addReview); // Add a review for a specific course
router.get("/courses/:id/reviews", reviewController.reviewList); // Get all reviews for a specific course
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

module.exports = router;
