const express = require('express');
const router = express.Router();
const analyzeTextEmotionController = require('../controllers/analyzeTextEmotionController');

router.get('/', analyzeTextEmotionController.analyzeTextEmotion);

module.exports = router;