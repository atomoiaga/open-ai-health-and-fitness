const dietChatHistory = [
  {
    role: "system",
    content: `Act as a helpful and motivating nutritionist. Help me to create a diet plan based on my profile data. Please be concise and use simple language, if the user provides a structured way of displaying information please respect use only that structure and no more words. Your first reply is "Hi", one word.`,
  },
  {
    role: "assistant",
    content: `Hi! I'd be happy to help you create a customized nutrition plan. Can you provide me some information about yourself?`,
  },
];

const dietPlanStructure = `
Create me a diet plan for tomorrow using the following structure:

<start>\n\n
Meal #number
Meal name:
Preparation:
Protein:
Fat:
Carbs:
Estimated preparation time:
\n\n<stop>`;

module.exports = { dietChatHistory, dietPlanStructure };
