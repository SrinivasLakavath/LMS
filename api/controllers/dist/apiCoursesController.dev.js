"use strict";

// /api/controllers/apiCoursesController.js
<<<<<<< HEAD
var Course = require("../models/course"); // Function to get all courses

=======
var Course = require("../models/course");
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

var getCourses = function getCourses(req, res) {
  var courses;
  return regeneratorRuntime.async(function getCourses$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Course.find().exec());

        case 3:
          courses = _context.sent;
<<<<<<< HEAD
          res.send(courses); // Using .send() as per your preference

=======
          res.json(courses);
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
<<<<<<< HEAD
          res.status(500).send("Error retrieving courses: " + _context.t0);
=======
          res.status(500).json({
            message: "Error retrieving courses: " + _context.t0
          });
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
<<<<<<< HEAD
}; // Function to get a course by its ID

=======
};
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

var getCourseById = function getCourseById(req, res) {
  var courseId, course;
  return regeneratorRuntime.async(function getCourseById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          courseId = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 4:
          course = _context2.sent;

          if (course) {
            _context2.next = 7;
            break;
          }

<<<<<<< HEAD
          return _context2.abrupt("return", res.status(404).send("Course not found"));

        case 7:
          res.send(course); // Using .send() as per your preference

=======
          return _context2.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));

        case 7:
          res.json(course);
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
<<<<<<< HEAD
          res.status(500).send("Error retrieving course: " + _context2.t0);
=======
          res.status(500).json({
            message: "Error retrieving course: " + _context2.t0
          });
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
<<<<<<< HEAD
}; // Function to add a review to a specific course


var addReview = function addReview(req, res) {
  var courseId, _req$body, author, rating, reviewText, course, newReview;

  return regeneratorRuntime.async(function addReview$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          courseId = req.params.id;
          _req$body = req.body, author = _req$body.author, rating = _req$body.rating, reviewText = _req$body.reviewText;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 5:
          course = _context3.sent;

          if (course) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).send("Course not found"));

        case 8:
          newReview = {
            author: author,
            rating: rating,
            reviewText: reviewText,
            timestamp: new Date()
          }; // Add the new review to the course's reviews array

          course.reviews.push(newReview);
          _context3.next = 12;
          return regeneratorRuntime.awrap(course.save());

        case 12:
          // Save the updated course
          // Respond with success
          res.status(201).send("Review added successfully");
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](2);
          res.status(500).send("Error adding review: " + _context3.t0);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 15]]);
}; // Export the functions


module.exports = {
  getCourses: getCourses,
  getCourseById: getCourseById,
  addReview: addReview // New function added here

=======
};

module.exports = {
  getCourses: getCourses,
  getCourseById: getCourseById
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
};
//# sourceMappingURL=apiCoursesController.dev.js.map
