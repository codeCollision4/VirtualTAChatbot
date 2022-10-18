const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
var bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
var jsonParser = bodyParser.json()
app.use(jsonParser);
 
require("./routes/agentRoutes")(app, jsonParser);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
