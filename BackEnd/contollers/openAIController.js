const {OpenAI} = require("openai");

const openAIInstance = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const createOpenAIIdeaGeneration = (req, res) => {
    try {

        res.status(200).json({
            status: "success", data,
        })
    } catch(err) {
        console.log(err)
    }
}

exports.createOpenAIIdeaGeneration = createOpenAIIdeaGeneration;