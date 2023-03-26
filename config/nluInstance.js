const getNLUInstance = () => {
    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2021-08-01',
        authenticator: new IamAuthenticator ({
            apikey: process.env.API_KEY
        }),
        serviceUrl: process.env.API_URL
    });
    return naturalLanguageUnderstanding;
}

module.exports = getNLUInstance;