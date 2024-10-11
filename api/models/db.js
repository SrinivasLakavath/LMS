const mongoose = require('mongoose');
<<<<<<< HEAD

const dbURI = 'mongodb+srv://22eg106b31:123@cluster0.sn08o.mongodb.net/LML?retryWrites=true&w=majority'; // Update with your MongoDB URI
// const dbURI = 'mongodb://localhost:27017/LML';
=======
require('dotenv').config();  // Load environment variables from .env file

// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/LML'; 

const dbURI = process.env.MONGODB_URI || 'mongodb+srv://22eg106b31:123@cluster0.sn08o.mongodb.net/LML?retryWrites=true&w=majority'; // Update with your MongoDB URI
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection established successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

module.exports = mongoose;
<<<<<<< HEAD
=======



// echo "# LMS" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SrinivasLakavath/LMS.git
// git push -u origin main
>>>>>>> baea0f805be43cb9f0d18de0157714dbb01214b3
