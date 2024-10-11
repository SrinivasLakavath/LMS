"use strict";

// api/controllers/apiReviewsController.js
var Course = require("../models/course"); // Function to add a review (API)


var addReview = function addReview(req, res) {
  var courseId, _req$body, author, rating, reviewText, course, newReview;

  return regeneratorRuntime.async(function addReview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("req.params:", req.params); // Check this log

          courseId = req.params.id;
          _req$body = req.body, author = _req$body.author, rating = _req$body.rating, reviewText = _req$body.reviewText;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 6:
          course = _context.sent;

          if (course) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));

        case 9:
          newReview = {
            author: author,
            rating: rating,
            reviewText: reviewText,
            timestamp: new Date()
          };
          course.reviews.push(newReview);
          _context.next = 13;
          return regeneratorRuntime.awrap(course.save());

        case 13:
          res.status(201).json({
            message: "Review added successfully",
            review: newReview
          });
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          res.status(500).json({
            message: "Error adding review",
            error: _context.t0
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 16]]);
};

module.exports = {
  addReview: addReview
};
//# sourceMappingURL=apiReviewsController.dev.js.map
