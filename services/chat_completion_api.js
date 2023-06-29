/**
 *
 * Author: @atomoiaga
 * State: Prototype
 * */

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateAI = async (body) => {
  const openai = new OpenAIApi(configuration);

  try {
    const chatCompletion = await openai.createChatCompletion(body, {
      headers: {
        gzip: true,
      },
    });
    return chatCompletion.data;
  } catch (e) {
    // console.log(e.response.status);
    // console.log(e.response.data);
    console.log(e.message);
  }
};

module.exports = { generateAI };
