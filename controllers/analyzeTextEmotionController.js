const getNLUInstance = require("../config/nluInstance");

const naturalLanguageUnderstanding = getNLUInstance();

const analyzeTextEmotion = async (req, res) => {
  const { text } = req.query;

  try {
    const analysisResults = await naturalLanguageUnderstanding.analyze({
      "text": text,
      "features": {
        "keywords": {
          "emotion": true,
          "limit": 1,
        },
      },
    });
    return res.send(analysisResults.result.keywords[0].emotion,null,2);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { analyzeTextEmotion };
