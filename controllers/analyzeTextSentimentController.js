const getNLUInstance = require("../config/nluInstance");

const naturalLanguageUnderstanding = getNLUInstance();

const analyzeTextSentiment = async (req, res) => {
  const { text } = req.query;

  try {
    const analysisResults = await naturalLanguageUnderstanding.analyze({
      "text": text,
      "features": {
        "keywords": {
          "sentiment": true,
          "limit": 1,
        },
      },
    });
    return res.send(analysisResults.result.keywords[0].sentiment,null,2);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { analyzeTextSentiment };
