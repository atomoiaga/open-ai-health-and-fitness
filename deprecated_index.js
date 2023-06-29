/**
 * Author: @atomoiaga
 * State: Deprecated
 * Purpose: This file is deprecated. It was used to generate the sample prompts
 */

require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

// const requestBody = require("./saved_prompts/sample_1");
// const requestBody = require("./saved_prompts/simple_sample");
// const requestBody = require("./saved_prompts/sample_3_diet");
const requestBody = require("./saved_prompts/sample_4_diet");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const main = async () => {
  const openai = new OpenAIApi(configuration);

  try {
    const chatCompletion = await openai.createChatCompletion(requestBody, {
      headers: {
        gzip: true,
      },
    });
    console.log(chatCompletion.data.choices);
    console.log(chatCompletion.data);
  } catch (e) {
    // console.log(e.response.status);
    // console.log(e.response.data);
    console.log(e.message);
  }
};

main();
