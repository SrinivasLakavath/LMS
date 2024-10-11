"use strict";

<<<<<<< HEAD
var express = require('express');

var router = express.Router();

var reviewController = require('../controllers/reviewController'); // POST route to handle adding a review


router.post('/courses/:id/reviews', reviewController.addReview);
=======
var express = require("express");

var router = express.Router();

var ctrlReviews = require("../controllers/reviewController"); // Define routes for reviews


router.get("/reviews", ctrlReviews.reviewList); // List all reviews
// Add other review-related routes as needed

>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
module.exports = router;
//# sourceMappingURL=reviewRoutes.dev.js.map
