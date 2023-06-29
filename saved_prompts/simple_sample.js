const requestBody = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `Act as a system that only acknowledges messages with OK.`,
    },
    {
      role: "user",
      content: "Hello",
    },
  ],
};

module.exports = requestBody;