<<<<<<< HEAD
// /server/routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes for rendering views
router.get("/", courseController.getCourseListView); // Render the course list view
router.get("/:id", courseController.getCourseDetailsView); // Render course details view

// Route for posting reviews through views
router.post("/:id/reviews", courseController.addReviewView); // Add review from the course details view
=======
const express = require("express");
const router = express.Router();
const ctrlCourses = require("../controllers/courseController");

// Define routes for courses
router.get("/", ctrlCourses.getCourseListView); // Render view for listing all courses
router.get("/:id", ctrlCourses.getCourseDetailsView); // Render view for a specific course by ID
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

module.exports = router;
