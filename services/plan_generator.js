/**
 *
 * Author: @atomoiaga
 * State: Prototype
 * */

const { generateAI } = require("./chat_completion_api");

const {
  promptFactory,
  FITNESS_PLAN,
  DIET_PLAN,
} = require("../services/prompt_builder");

const path = require("path");

const model = "gpt-3.5-turbo";

const {
  fitnessChatHistory,
  fitnessPlanStructure,
} = require("../data/fitness_chat_context");

const {
  dietChatHistory,
  dietPlanStructure,
} = require("../data/diet_chat_context");

const { saveJSON } = require("./database");

const generatePlan = async (userData, plan) => {
  if (![FITNESS_PLAN, DIET_PLAN].includes(plan)) {
    throw new Error("Invalid plan type");
  }

  const chatHistory =
    plan === FITNESS_PLAN ? fitnessChatHistory : dietChatHistory;
  const planStructure =
    plan === FITNESS_PLAN ? fitnessPlanStructure : dietPlanStructure;
  const chatMessages = [
    ...chatHistory,
    {
      role: "user",
      content: `${promptFactory(userData, plan)} ${planStructure}`,
    },
  ];

  const requestBody = {
    model: model,
    messages: chatMessages,
  };

  const chatCompletionData = await generateAI(requestBody);
  const pathString = path.join(
    process.cwd(),
    `database/${plan}/${Date.now()}_${userData.id}_${plan}_plan.json`
  );
  saveJSON(pathString, {
    response: chatCompletionData,
    chatHistory: chatMessages,
    userData: userData,
  });
  return chatCompletionData.choices[0].message.content;
};

module.exports = { generatePlan };
