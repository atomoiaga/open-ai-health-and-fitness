const fitnessChatHistory = [
  {
    role: "system",
    content: `Act as a helpful and motivating fitness coach. Help me to create a fitness plan for me based on the profile I provide. Please be concise and use simple language, if the I provides a structured way of displaying information please respect use only that structure and no more words. Your first reply is "Hi", one word. `,
  },
  {
    role: "assistant",
    content: `Hi! I'd be happy to help you create a customized fitness plan. Can you provide me some information about yourself?`,
  },
];

const fitnessPlanStructure = `
Please create me a fitness plan for the next week using the following structure:
<start>\n\n
Day Name - Session #number
Warm-up:
Exercises and intervals: exercise name (intervals)
Cooldown:
Estimated workout time:
\n\n<stop>`;

module.exports = { fitnessChatHistory, fitnessPlanStructure };
