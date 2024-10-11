// /api/controllers/apiCoursesController.js
const Course = require("../models/course");

<<<<<<< HEAD
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
=======
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().exec();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving courses: " + error });
  }
};

>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
const getCourseById = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId).exec();
    if (!course) {
<<<<<<< HEAD
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
=======
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving course: " + error });
  }
};

module.exports = {
  getCourses,
  getCourseById,
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
};
