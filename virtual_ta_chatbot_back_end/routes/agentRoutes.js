require("dotenv").config();

const dialogflow = require("@google-cloud/dialogflow")
const uuid = require("uuid")

const getAgentResponse = (async (userMessage) => {
  const sessionId = uuid.v4();
  const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(
    CREDENTIALS.project_id,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userMessage,
        languageCode: 'en-US',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  console.log(`Response: ${result.fulfillmentText}`);
  return result;
})
  

module.exports = (app, jsonParser) => {
  app.post("/text-input", jsonParser, async (req, res) => {
    getAgentResponse(req.body.text)
      .then(data => res.status(200).send(data))
      .catch(err => console.log("ERROR ", err));
})
};
