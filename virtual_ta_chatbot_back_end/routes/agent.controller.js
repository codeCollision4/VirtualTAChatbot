const express = require('express');
const router = express.Router();
const agentModel = require('../agents/agent.model');

// Routes
router.post('/text-input', response);

module.exports = router;

function response(req, res, next) {
    agentModel.getAgentResponse(req.body.text)
          .then(data => res.status(200).send(data))
          .catch(err => console.error("ERROR ", err));
}
