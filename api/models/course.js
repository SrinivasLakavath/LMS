// /api/models/course.js 
const mongoose = require("mongoose");

<<<<<<< HEAD
const reviewSchema = new mongoose.Schema({
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
    default: Date.now // Set default timestamp to the current date
  }
});
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true }, // Duration of the course
  rating: { type: Number, required: true, min: 0, max: 5 }, // Course rating
  provider: { type: String, required: true }, // Course provider
  link: { type: String, required: true }, // Link to the course
  linkimg: { type: String, required: false }, // Link to course image
  prerequisites: { type: String, required: false }, // Prerequisites for the course
  paymentStatus: { type: String, enum: ['Free', 'Paid'], required: true }, // Payment status
  syllabus: { type: [String], required: false }, // Array of syllabus topics
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true }, // Course level
  reviews: [reviewSchema] // Array of reviews
=======
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true }, // New field
  rating: { type: Number, required: true }, // New field
  provider: { type: String, required: true }, // New field
  link: { type: String, required: true }, 
  linkimg: { type: String, required: false }, // New field for course link
  reviews: [
    {
      author: { type: String, required: true },
      rating: { type: Number, required: true },
      reviewText: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }
  ]
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;