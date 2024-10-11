"use strict";

var express = require('express');

var router = express.Router();

var reviewController = require('../controllers/reviewController'); // POST route to handle adding a review


router.post('/courses/:id/reviews', reviewController.addReview);
module.exports = router;
//# sourceMappingURL=reviewRoutes.dev.js.map
