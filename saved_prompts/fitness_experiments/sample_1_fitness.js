const requestBody = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `Act as a helpful and motivating fitness coach. Help me to create a fitness plan for my users based on their profile. Please be concise and use simple language, if the user provides a structured way of displaying information please respect use only that structure and no more words. Your first reply is "Hi", one word. `,
    },
    {
      role: "assistant",
      content: `Hi! I'd be happy to help you create a customized meal plan and fitness plan. Can you provide me with some information about your current diet and exercise routine, as well as your goals?"`,
    },
    {
      role: "user",
      content: `Here are my goals: loose weight, gain muscle.  Here is my workout duration: 30 min - 1 hour. Here is my workout complexity: easy. Here is my workout frequency: daily. Acknowledge this message and be prepared to receive more information.`,
    },
    {
      role: "assistant",
      content: `I understand your goals, how can I help you achieve them?`,
    },
    {
      role: "user",
      content: `Create me a fitness plan for the next week using the following structure:

        <start>
        Day Name - Session #number
        Warm-up: 
        Exercises and intervals: exercise name (intervals)
        Cooldown:
        Estimated workout time:
        <stop>`,
    },
  ],
};

const response = {
  id: "chatcmpl-77hLm6Tu4kF7NWpbvPTiVx5FtYe1l",
  object: "chat.completion",
  created: 1682069290,
  model: "gpt-3.5-turbo-0301",
  usage: {
    prompt_tokens: 253,
    completion_tokens: 534,
    total_tokens: 787,
  },
  choices: [
    {
      message: {
        role: "assistant",
        content:
          "Sure! Here's a fitness plan for you, based on your goals, workout duration, complexity, and frequency.\n\n<start>\nMonday - Session #1\nWarm-up: 5-minute brisk walk on the treadmill\nExercises and intervals: \n- 3 sets of 12 reps of bodyweight squats\n- 3 sets of 12 reps of push-ups \n- 3 sets of 12 reps of lunges \nCooldown: 5 minute jog on the treadmill\nEstimated workout time: 30-40 minutes\n\nTuesday - Session #2\nWarm-up: 5-minute jump rope\nExercises and intervals: \n- 3 sets of 12 reps of dumbbell bench press\n- 3 sets of 12 reps of bicep curls \n- 3 sets of 12 reps of tricep dips \nCooldown: 5 minutes of stretching exercises \nEstimated workout time: 30-40 minutes\n\nWednesday - Session #3\nWarm-up: 5-minute jog on the treadmill\nExercises and intervals: \n- 3 sets of 12 reps of dumbbell rows\n- 3 sets of 12 reps of shoulder press \n- 3 sets of 12 reps of leg curls \nCooldown: 5 minute walk on the treadmill \nEstimated workout time: 30-40 minutes\n\nThursday - Session #4\nWarm-up: 5-minute brisk walk on the treadmill\nExercises and intervals: \n- 3 sets of 12 reps of bodyweight squats\n- 3 sets of 12 reps of push-ups \n- 3 sets of 12 reps of lunges \nCooldown: 5 minute jog on the treadmill\nEstimated workout time: 30-40 minutes\n\nFriday - Session #5\nWarm-up: 5-minute jump rope\nExercises and intervals: \n- 3 sets of 12 reps of dumbbell bench press\n- 3 sets of 12 reps of bicep curls \n- 3 sets of 12 reps of tricep dips \nCooldown: 5 minutes of stretching exercises \nEstimated workout time: 30-40 minutes \n\nSaturday - Session #6\nWarm-up: 5-minute jog on the treadmill\nExercises and intervals: \n- 3 sets of 12 reps of dumbbell rows\n- 3 sets of 12 reps of shoulder press \n- 3 sets of 12 reps of leg curls \nCooldown: 5 minute walk on the treadmill\nEstimated workout time: 30-40 minutes \n\nSunday - Rest Day\n<stop>\n\nRemember to always have a good meal plan along with this!",
      },
      finish_reason: "stop",
      index: 0,
    },
  ],
};

module.exports = requestBody;
