"use strict";

<<<<<<< HEAD
// /server/routes/courseRoutes.js
=======
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
var express = require("express");

var router = express.Router();

<<<<<<< HEAD
var courseController = require("../controllers/courseController"); // Routes for rendering views


router.get("/", courseController.getCourseListView); // Render the course list view

router.get("/:id", courseController.getCourseDetailsView); // Render course details view
// Route for posting reviews through views

router.post("/:id/reviews", courseController.addReviewView); // Add review from the course details view
=======
var ctrlCourses = require("../controllers/courseController"); // Define routes for courses


router.get("/", ctrlCourses.getCourseListView); // Render view for listing all courses

router.get("/:id", ctrlCourses.getCourseDetailsView); // Render view for a specific course by ID
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

module.exports = router;
//# sourceMappingURL=courseRoutes.dev.js.map
