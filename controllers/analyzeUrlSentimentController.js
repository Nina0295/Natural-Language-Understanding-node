const getNLUInstance = require("../config/nluInstance");

const naturalLanguageUnderstanding = getNLUInstance();

const analyzeURLSentiment = async (req, res) => {
  const { url } = req.query;

  try {
    const analysisResults = await naturalLanguageUnderstanding.analyze({
      "url": url,
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

module.exports = { analyzeURLSentiment };
