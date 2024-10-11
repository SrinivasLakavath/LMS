"use strict";

// /api/models/course.js 
var mongoose = require("mongoose");

<<<<<<< HEAD
var reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5 // Assuming ratings are on a scale from 0 to 5

  },
  reviewText: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    "default": Date.now // Set default timestamp to the current date

  }
});
=======
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
var courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  // Duration of the course
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  // Course rating
=======
  // New field
  rating: {
    type: Number,
    required: true
  },
  // New field
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
  provider: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  // Course provider
=======
  // New field
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
  link: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  // Link to the course
=======
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
  linkimg: {
    type: String,
    required: false
  },
<<<<<<< HEAD
  // Link to course image
  prerequisites: {
    type: String,
    required: false
  },
  // Prerequisites for the course
  paymentStatus: {
    type: String,
    "enum": ['Free', 'Paid'],
    required: true
  },
  // Payment status
  syllabus: {
    type: [String],
    required: false
  },
  // Array of syllabus topics
  level: {
    type: String,
    "enum": ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  // Course level
  reviews: [reviewSchema] // Array of reviews

=======
  // New field for course link
  reviews: [{
    author: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    reviewText: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      "default": Date.now
    }
  }]
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
});
var Course = mongoose.model("Course", courseSchema);
module.exports = Course;
//# sourceMappingURL=course.dev.js.map
