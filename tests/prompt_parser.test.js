const { promptParser } = require("../services/prompt_parser");
const { FITNESS_PLAN, DIET_PLAN } = require("../services/prompt_builder");
const generatetFitnessPrompt =
  "Thanks for sharing that information. Here's the fitness plan based on your profile for the next week:<start>Monday - Session #1Warm-up: Jog in place for 5 minsExercises and intervals: - Running (30 minutes)- Military Training (30 minutes)Cooldown: Walk for 5 minutesEstimated workout time: 65 minutes Tuesday - Session #2Warm-up: Jumping jacks for 5 minutesExercises and intervals: - Running (30 minutes)- Military Training (30 minutes)Cooldown: Walk for 5 minutesEstimated workout time: 65 minutes Wednesday - Session #3Warm-up: Stationary bike for 5 minutesExercises and intervals: - Running (15 minutes)- Military Training (45 minutes)Cooldown: Stretching for 5 minutesEstimated workout time: 65 minutes Thursday - Session #4Warm-up: High knees for 5 minutesExercises and intervals: - Running (30 minutes)- Military Training (30 minutes)Cooldown: Walk for 5 minutesEstimated workout time: 65 minutes Friday - Session #5Warm-up: Mountain climbers for 5 minutesExercises and intervals: - Running (30 minutes)- Military Training (30 minutes)Cooldown: Stretching for 5 minutesEstimated workout time: 65 minutes Saturday - Session #6Warm-up: Jump rope for 5 minutesExercises and intervals: - Running (30 minutes)- Military Training (30 minutes)Cooldown: Walk for 5 minutesEstimated workout time: 65 minutes Sunday - Rest day<stop>Please note that it's important to consult with your doctor before starting any new exercise routine, especially if you have a history of health problems or injuries. Let me know if you have any questions or if there's anything else I can help you with. Good luck with your fitness journey!"
  const generatedDietPlan =
  "Based on the information you provided, here is a sample nutrition plan for tomorrow:\n\n<start>\n\nMeal #1\nMeal name: Vegan Oatmeal Bowl\nPreparation: Cook 1/2 cup of oats with 1 cup of unsweetened almond milk. Top with 1 sliced banana, 1 tablespoon of chia seeds, and 1 tablespoon of maple syrup.\nProtein: 7g\nFat: 10g\nCarbs: 65g\nEstimated preparation time: 10 minutes\n\nMeal #2\nMeal name: Tofu Scramble\nPreparation: Sauté 1/2 cup of diced tofu with 1 cup of mixed vegetables (such as peppers, mushrooms, and spinach). Season with turmeric, salt, and pepper. Serve with 2 slices of whole grain toast.\nProtein: 17g\nFat: 10g\nCarbs: 35g\nEstimated preparation time: 15 minutes\n\nMeal #3\nMeal name: Lentil Soup\nPreparation: In a large pot, cook 1 cup of lentils with 4 cups of vegetable broth, 1 diced tomato, 1 diced onion, and 2 cloves of minced garlic. Season with cumin, paprika, salt, and pepper. Serve with a slice of bread.\nProtein: 18g\nFat: 4g\nCarbs: 56g\nEstimated preparation time: 30 minutes\n\n<stop>\n\nThis nutrition plan provides approximately 1,800 calories, which is a good starting point for weight loss. To reach your goal of 3,000 calories, you can add snacks to your day such as a handful of nuts or seeds, a smoothie with protein powder, or a serving of fruit with peanut butter. Always remember to consult with a doctor or registered dietitian before starting any new nutrition plan."

  const print = () => {
  console.log(promptParser(generatetFitnessPrompt, FITNESS_PLAN));
  // console.log(promptParser(generatedDietPlan, DIET_PLAN));
};

print();
