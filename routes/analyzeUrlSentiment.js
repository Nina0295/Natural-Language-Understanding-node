const express = require('express');
const router = express.Router();
const analyzeUrlSentimentController = require('../controllers/analyzeUrlSentimentController');

router.get('/', analyzeUrlSentimentController.analyzeURLSentiment);

module.exports = router;