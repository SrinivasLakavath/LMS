"use strict";

var express = require("express");

var router = express.Router();

<<<<<<< HEAD
var courseRoutes = require("./courseRoutes"); // Include course routes
=======
var courseRoutes = require("./courseRoutes");

var reviewRoutes = require("./reviewRoutes"); // Assuming you'll add this later
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
// Serve the About page


router.get("/about", function (req, res) {
  res.render("about"); // Render your about page
<<<<<<< HEAD
}); // Use the defined routes for courses

router.use("/courses", courseRoutes); // All course routes will now start with /courses
// Define a root route for the homepage
=======
}); // Use the defined routes for courses and reviews

router.use("/courses", courseRoutes); // All course routes will now start with /courses

router.use("/courses/:courseId/reviews", reviewRoutes); // Review routes related to courses
// You may also define a root route if needed
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

router.get("/", function (req, res) {
  res.render("index"); // Render your home page
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
