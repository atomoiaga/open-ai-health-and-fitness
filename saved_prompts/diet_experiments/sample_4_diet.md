### Request

<details>
  <summary>Request Collapsed</summary>

```js
{
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
      content: `Create me a diet plan for tomorrow using the following structure:

      <start>
      Day Name
      Meal name:
      Preparation:
      Protein:
      Fat:
      Carbs:
      Estimated preparation time:
      <stop>`,
    },
  ],
}
```

</details>

### Response

<details>
  <summary>Response Collapsed</summary>

```js
{
  id: "chatcmpl-77lDwO673rXTkNZ2hKxwAMn3TuctN",
  object: "chat.completion",
  created: 1682084180,
  model: "gpt-3.5-turbo-0301",
  usage: {
    prompt_tokens: 259,
    completion_tokens: 294,
    total_tokens: 553,
  },
  choices: [
    {
      message: {
        role: "assistant",
        content:
          "Sure, here's a sample diet plan for tomorrow based on your profile information:\n\n<start>\nMonday - Meal #1\nMeal name: Protein oats bowl\nPreparation: Combine rolled oats, protein powder, almond butter, chia seeds, and almond milk in a bowl. Microwave for 1.5-2 minutes.\nProtein: 25g\nFat: 14g\nCarbs: 25g\nEstimated preparation time: 5-7 minutes\n\nMonday - Meal #2\nMeal name: Greek chicken salad\nPreparation: Grill chicken, chop up romaine lettuce, cucumbers, and cherry tomatoes, and toss with feta cheese and kalamata olives. Drizzle with olive oil and balsamic vinegar.\nProtein: 30g\nFat: 15g\nCarbs: 10g\nEstimated preparation time: 15-20 minutes\n\nMonday - Meal #3\nMeal name: Beef stir-fry\nPreparation: Cook lean beef strips in a pan with mixed vegetables (broccoli, peppers, onions, carrots) and a teriyaki sauce. Serve over cauliflower rice.\nProtein: 35g\nFat: 10g\nCarbs: 15g\nEstimated preparation time: 20-25 minutes\n<stop>\n\nRemember to adjust portion sizes according to your daily calorie needs and eat plenty of fruits and vegetables throughout the day. Good luck with your nutrition plan",
      },
      finish_reason: "stop",
      index: 0,
    },
  ],
}
```

</details>

---

### Parsed Response

Sure, here's a sample diet plan for tomorrow based on your profile information:

&lt;start&gt;

Monday - Meal #1

Meal name: Protein oats bowl

Preparation: Combine rolled oats, protein powder, almond butter, chia seeds, and almond milk in a bowl. Microwave for 1.5-2 minutes.

Protein: 25g

Fat: 14g

Carbs: 25g

Estimated preparation time: 5-7 minutes

Monday - Meal #2

Meal name: Greek chicken salad

Preparation: Grill chicken, chop up romaine lettuce, cucumbers, and cherry tomatoes, and toss with feta cheese and kalamata olives. Drizzle with olive oil and balsamic vinegar.

Protein: 30g

Fat: 15g

Carbs: 10g

Estimated preparation time: 15-20 minutes

Monday - Meal #3

Meal name: Beef stir-fry

Preparation: Cook lean beef strips in a pan with mixed vegetables (broccoli, peppers, onions, carrots) and a teriyaki sauce. Serve over cauliflower rice.

Protein: 35g

Fat: 10g

Carbs: 15g

Estimated preparation time: 20-25 minutes

&lt;stop&gt;

Remember to adjust portion sizes according to your daily calorie needs and eat plenty of fruits and vegetables throughout the day. Good luck with your nutrition plan"

---

### Costs

| Model         | Model cost / 1k tokens | Tokens     | Cost    | Cost per 100 users |
| ------------- | ---------------------- | ---------- | ------- | ------------------ |
| gpt-3.5-turbo | $0.002                 | 600 tokens | $0.0012 | $0.12              |

### Request Duration

| Duration |
| -------- |
| 22.04 s  |


## Notes

- as saw in `sample_3_diet.js` generating a very long response will result in `Error: socket hang up`, we should run this context for each day modifying the last message using a for loop changing the day in the message 

```
Create me a diet plan for {MONDAY, TUESDAY, WEDNESDAY... etc} using the following structure:

      <start>
      Day Name
      Meal name:
      Preparation:
      Protein:
      Fat:
      Carbs:
      Estimated preparation time:
      <stop>`

```