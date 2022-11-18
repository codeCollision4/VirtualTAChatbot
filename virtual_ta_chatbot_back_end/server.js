// Requirements
require('rootpath')();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();

// Setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// API route
app.use("/api/routes", require("./routes/agent.controller"));
app.use("/api/agent", require("./agents/agent.model"));

// Start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listenting on port ' + port);
});
