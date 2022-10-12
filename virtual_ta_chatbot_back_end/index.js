const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
var bodyParser = require('body-parser')
const uuid = require("uuid")
const dialogflow = require("@google-cloud/dialogflow")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
var jsonParser = bodyParser.json()


const sessionId = uuid.v4();
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(
    CREDENTIALS.project_id,
    sessionId
);

require("./routes/agentRoutes")(app, jsonParser, sessionClient, sessionPath);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
