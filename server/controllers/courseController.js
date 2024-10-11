<<<<<<< HEAD
// /server/controllers/courseController.js
const Course = require("../../api/models/course"); // Adjust the path as necessary

// Controller to render the course list view
exports.getCourseListView = async (req, res) => {
  try {
    const courses = await Course.find().exec(); // Fetch all courses
    res.render("courseList", { courses }); // Render the course list view
=======
const Course = require("../../api/models/course"); // Adjust the path as necessary

// Function to get a list of courses (API)
exports.getCourseList = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.json(courses); // Return JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};

// Function to render course list view
exports.getCourseListView = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.render("courseList", { courses }); // Render course list view
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
  } catch (error) {
    res.status(500).send("Error retrieving courses: " + error);
  }
};

<<<<<<< HEAD
// Controller to render the course details view
exports.getCourseDetailsView = async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findById(courseId).exec(); // Fetch course by ID
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.render("courseDetails", { course }); // Render the course details view
=======
// Function to get a specific course (API)
exports.getCourseDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course); // Return JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};

// Function to render specific course details view
exports.getCourseDetailsView = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send("Course not found");
    res.render("courseDetails", { course }); // Render course details view
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
  } catch (error) {
    res.status(500).send("Error retrieving course: " + error);
  }
};
<<<<<<< HEAD

// Controller to handle adding a review to a course (view-side)
exports.addReviewView = async (req, res) => {
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

    course.reviews.push(newReview); // Add the new review to the course's reviews array
    await course.save(); // Save the updated course

    res.redirect(`/courses/${courseId}`); // Redirect to the course details page
  } catch (error) {
    res.status(500).send("Error adding review: " + error);
  }
};
=======
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
