const requestBody = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `Act as a helpful and motivating nutritionist. Help me to create a diet plan for my users based on their profile data. Please be concise and use simple language, if the user provides a structured way of displaying information please respect use only that structure and no more words. Your first reply is "Hi", one word.`,
    },
    {
      role: "assistant",
      content: `Hi! Sure, I'd be happy to help create a diet plan for your users based on their profile data`,
    },
    {
      role: "user",
      content: `Here are my goals: loose weight, gain muscle. Here are my plans: diet, fitness. Here is my meal preparation time: 30 min - 1 hour. Here is my total calories: 1500 - 2000 kcal. Here is my meal complexity: easy. Here is my number of meals: 3.`,
    },
    {
      role: "assistant",
      content: `Okay, I've got your goals, plans, meal preparation time, total calories, meal complexity, and number of meals.`,
    },
    {
      role: "user",
      content: `Create me a diet plan for the next week using the following structure:

      <start>
      Day Name - Meal #number
      Meal name: 
      Preparation:
      Protein:
      Fat:
      Carbs:
      Estimated preparation time:
      <stop>`,
    },
  ],
};

const response = "Error: socket hang up";

module.exports = requestBody;
