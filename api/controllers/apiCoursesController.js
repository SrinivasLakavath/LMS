// /api/controllers/apiCoursesController.js
const Course = require("../models/course");

// Function to get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().exec();
    res.send(courses); // Using .send() as per your preference
  } catch (error) {
    res.status(500).send("Error retrieving courses: " + error);
  }
};

// Function to get a course by its ID
const getCourseById = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.send(course); // Using .send() as per your preference
  } catch (error) {
    res.status(500).send("Error retrieving course: " + error);
  }
};

// Function to add a review to a specific course
const addReview = async (req, res) => {
  const courseId = req.params.id;
  const { author, rating, reviewText } = req.body;

  try {
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).send("Course not found");
    }

    const newReview = {
      author,
      rating,
      reviewText,
      timestamp: new Date(),
    };

    // Add the new review to the course's reviews array
    course.reviews.push(newReview);
    await course.save(); // Save the updated course

    // Respond with success
    res.status(201).send("Review added successfully");
  } catch (error) {
    res.status(500).send("Error adding review: " + error);
  }
};

// Export the functions
module.exports = {
  getCourses,
  getCourseById,
  addReview, // New function added here
};
