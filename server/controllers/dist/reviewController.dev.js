"use strict";

var Course = require("../../api/models/course"); // Adjust the path if necessary
// Function to add a review to a specific course


exports.addReview = function _callee(req, res) {
  var courseId, _req$body, author, rating, reviewText, course, newReview;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          courseId = req.params.id; // Getting the course ID from route parameters

          _req$body = req.body, author = _req$body.author, rating = _req$body.rating, reviewText = _req$body.reviewText; // Destructuring form data from request body

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 5:
          course = _context.sent;

          if (course) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(404).send("Course not found"));

        case 8:
          // Create a new review object
          newReview = {
            author: author,
            rating: rating,
            reviewText: reviewText,
            timestamp: new Date()
          }; // Push the new review into the course's reviews array

          course.reviews.push(newReview); // Save the updated course document

          _context.next = 12;
          return regeneratorRuntime.awrap(course.save());

        case 12:
          // Redirect back to the course details page (or handle success response)
          res.redirect("/courses/".concat(courseId));
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          // Handle any errors
          res.status(500).send("Error adding review: " + _context.t0.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 15]]);
};
//# sourceMappingURL=reviewController.dev.js.map
