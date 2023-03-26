const express = require('express');
const router = express.Router();
const analyzeUrlEmotionController = require('../controllers/analyzeUrlEmotionController');

router.get('/', analyzeUrlEmotionController.analyzeURLEmotion);

module.exports = router;