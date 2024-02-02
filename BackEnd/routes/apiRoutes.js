const express= require('express');

const router = express.Router();

const {createOpenAIIdeaGeneration} = require("../contollers/openAIController");

router.route('/createIdeaGeneration').post(createOpenAIIdeaGeneration);

module.exports = router;