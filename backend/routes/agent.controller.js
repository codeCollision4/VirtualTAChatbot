const express = require('express');
const router = express.Router();
const cors = require("cors");
const agentModel = require('../agents/agent.model');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(cors());

// Routes
router.post('/text-input', response);



function response(req, res, next) {
    agentModel.getAgentResponse(req.body.text)
          .then(data => res.status(200).send(data))
          .catch(err => console.error("ERROR ", err));
}

module.exports = router;
