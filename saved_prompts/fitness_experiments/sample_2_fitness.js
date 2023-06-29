const requestBody = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: `Act as a helpful and motivating fitness coach. Help me to create a fitness plan for my users based on their profile. Please be concise and use simple language, if the user provides a structured way of displaying information please respect use only that structure and no more words. Your first reply is "Hi", one word. `,
    },
    {
      role: "user",
      content: `Here are my goals: loose weight, gain muscle.  Here is my workout duration: 30 min - 1 hour. Here is my workout complexity: easy. Here is my workout frequency: daily. Acknowledge this message and be prepared to receive more information. Create me a fitness plan for the next week using the following structure:

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
  id: "chatcmpl-77iDQA1Z3z1UXoKd3RGfjDMHCWZFR",
  object: "chat.completion",
  created: 1682072616,
  model: "gpt-3.5-turbo-0301",
  usage: {
    prompt_tokens: 186,
    completion_tokens: 596,
    total_tokens: 782,
  },
  choices: [
    {
      message: {
        role: "assistant",
        content:
          "Hi! Thank you for providing me with your goals and workout preferences. Here is a 7-day fitness plan tailored just for you:\n\n<start>\nMonday - Session #1\nWarm-up: Jumping jacks (2 sets x 30 seconds)\nExercises and intervals: \n- Bodyweight squats (3 sets x 10 reps)\n- Push-ups (3 sets x 10 reps)\n- Lying leg curls (3 sets x 10 reps)\nCooldown: Stretching exercises (2 sets x 20 seconds each)\nEstimated workout time: 30 minutes\n\nTuesday - Session #2\nWarm-up: Jumping jacks (2 sets x 30 seconds)\nExercises and intervals: \n- Bicep curls with dumbbells (3 sets x 10 reps)\n- Tricep dips (3 sets x 10 reps)\n- Shoulder press with dumbbells (3 sets x 10 reps)\nCooldown: Stretching exercises (2 sets x 20 seconds each)\nEstimated workout time: 30 minutes\n\nWednesday - Session #3\nWarm-up: Jumping jacks (2 sets x 30 seconds)\nExercises and intervals: \n- Lunges (3 sets x 10 reps)\n- Step-ups with a bench (3 sets x 10 reps)\n- Calf raises (3 sets x 10 reps)\nCooldown: Stretching exercises (2 sets x 20 seconds each)\nEstimated workout time: 30 minutes\n\nThursday - Session #4\nWarm-up: Jumping jacks (2 sets x 30 seconds)\nExercises and intervals: \n- Burpees (3 sets x 10 reps)\n- Mountain climbers (3 sets x 20 seconds)\n- Plank (3 sets x 30 seconds)\nCooldown: Stretching exercises (2 sets x 20 seconds each)\nEstimated workout time: 30 minutes\n\nFriday - Session #5\nWarm-up: Jumping jacks (2 sets x 30 seconds)\nExercises and intervals: \n- Dumbbell bench press (3 sets x 10 reps)\n- Dumbbell fly (3 sets x 10 reps)\n- Incline dumbbell press (3 sets x 10 reps)\nCooldown: Stretching exercises (2 sets x 20 seconds each)\nEstimated workout time: 30 minutes\n\nSaturday - Session #6\nWarm-up: Jumping jacks (2 sets x 30 seconds)\nExercises and intervals: \n- Pull-ups (3 sets x 10 reps)\n- Push-ups (3 sets x 10 reps)\n- Dumbbell rows (3 sets x 10 reps)\nCooldown: Stretching exercises (2 sets x 20 seconds each)\nEstimated workout time: 30 minutes\n\nSunday - Rest Day\n<stop>\n\nI hope this plan helps you to achieve your fitness goals. Remember to eat a healthy diet, stay hydrated, and rest well to support your workouts. Good luck and stay motivated!",
      },
      finish_reason: "stop",
      index: 0,
    },
  ],
};

module.exports = requestBody;
