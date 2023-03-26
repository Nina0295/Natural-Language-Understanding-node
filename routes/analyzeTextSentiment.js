const express = require('express');
const router = express.Router();
const analyzeTextSentimentController = require('../controllers/analyzeTextSentimentController');

router.get('/', analyzeTextSentimentController.analyzeTextSentiment);

module.exports = router;