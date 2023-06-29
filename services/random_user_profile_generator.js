// weight will be random

const WEIGHT_MAX = 150;
const WEIGHT_MIN = 50;

// height will be random

const HEIGHT_MAX = 200;
const HEIGHT_MIN = 150;

// dateOfBirth will be random
const sexOptions = ["male", "female"];
const goalsOptions = [
  "loose weight",
  "Improve baseline of health",
  "Live longer and healthier",
  "Boost immune system",
  "Increase energy levels",
  "Eat more healthily",
  "Stop smoking",
  "Better sleep quality",
  "Exercise more",
  "Hydrate more",
];

const plansOptions = ["diet", "fitness"];

const mealPreparationTimeOptions = ["30 m - 1h", "1h - 2h", "more than 2h"];

const totalCaloriesOptions = [
  "1000-1500 kcal",
  "1500-2000 kcal",
  "2000-3000 kcal",
  "More than 3000 kcal",
  "Not sure",
];

const mealComplexityOptions = ["easy", "medium", "hard", "Not sure"];

const numberOfMealsOptions = ["1", "2", "3"];

const workoutDurationOptions = [
  "10m - 30m",
  "30m - 1h",
  "1h - 2h",
  "2h - 3h",
  "More than 3h",
];

const workoutComplexityOptions = ["easy", "medium", "hard"];

const workoutFrequencyOptions = ["daily", "weekly", "monthly"];

const sleepOptions = ["Less than 6h", "6-8h", "More than 8h"];

const exerciseFrequencyOptions = [
  "1 - 2 times per week",
  "3 - 4 times per week",
  "5 or more per week",
];

const dietOptions = [
  "No restrictions or intolerances",
  "vegetarian",
  "vegan",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Halal",
  "Kosher",
];

// notes: dietOptions "other option" is not a option in questionnaire

const allergiesOptions = [
  "No food allergies",
  "Peanut allergy",
  "Tree nut allergy",
  "Soy allergy",
  "Wheat allergy",
  "Milk allergy",
  "Egg allergy",
  "Shellfish allergy",
  "Fish allergy",
];

// notes: allergiesOptions: "other" not useful for AI

const fitnessExercisesOptions = [
  "None",
  "Strength",
  "Power",
  "Endurance",
  "Stamina",
  "Flexibility",
  "Obstacle Course Racing",
  "Crossfit",
  "Gymnastics",
  "Running",
  "Cycling",
  "Swimming",
  "Hill Walking",
  "Skiing",
  "Mountaineering",
  "Millitary Training",
  "Body Weight Training",
  "Altitute Training",
];

// notes: fitnessExercisesOptions: "other" not useful for AI

const illnessOptions = [true, false];

const illnessDetailsOptions = ["HIV", "Cancer", "Diabetes"];

const chronicIllnessOptions = [
  "Diabetes (Type 1 or Type 2)",
  "Hypertension (high blood pressure)",
  "Heart disease",
  "Cancer",
  "Kidney disease",
  "Liver disease",
  "Autoimmune disorder (e.g., lupus, rheumatoid arthritis)",
  "Neurological disorder (e.g., multiple sclerosis, Parkinson's)",
  "Mental health condition (e.g., depression, anxiety, bipolar disorder)",
];

// notes: chronicIllnessOptions: "other" not useful for AI

const injuriesOptions = [
  "ligament",
  "tendon",
  "joint",
  "muscule",
  "groin",
  "hernia",
  "spine/discs",
];

// notes: injuriesOptions: "other" not useful for AI

const respiratoryConditionsOptions = [
  "Asthma",
  "Chronic obstructive pulmonary disease (COPD)",
  "Chronic bronchitis",
  "Emphysema",
  "Sleep apnea",
];

// notes : respiratoryConditionsOptions: "other" not useful for AI

const painOptions = [
  "Occasional mild pain or discomfort",
  "Chronic or frequent mild pain or discomfort",
  "Occasional severe pain or discomfort",
  "Chronic or frequent severe pain or discomfort",
];

// notes: painOptions: "other" not useful for AI

const generateRandomUserProfile = () => {
  const illnessFlag = extractRandomFeatures(illnessOptions, 1)[0];

  return {
    weight:
      Math.floor(Math.random() * (WEIGHT_MAX - WEIGHT_MIN) + 1) + WEIGHT_MIN,
    height:
      Math.floor(Math.random() * (HEIGHT_MAX - HEIGHT_MIN) + 1) + HEIGHT_MIN,
    dateOfBirth: getRandomDate()
      .toLocaleDateString("en-US")
      .replaceAll("/", "-"),
    sex: sexOptions[Math.floor(Math.random() * sexOptions.length)],
    goals: extractRandomFeatures(goalsOptions, 2), // generate 1-2 unique
    plans: extractRandomFeatures(plansOptions, 2), // generate 1-2 unique
    mealPreparationTime: extractRandomFeatures(mealComplexityOptions, 1),
    totalCalories: extractRandomFeatures(totalCaloriesOptions, 1),
    mealComplexity: extractRandomFeatures(mealComplexityOptions, 1),
    numberOfMeals: extractRandomFeatures(numberOfMealsOptions, 1),
    workoutDuration: extractRandomFeatures(workoutDurationOptions, 1),
    workoutComplexity: extractRandomFeatures(workoutComplexityOptions, 1),
    workoutFrequency: extractRandomFeatures(workoutFrequencyOptions, 1),
    sleep: extractRandomFeatures(sleepOptions, 1),
    exerciseFrequency: extractRandomFeatures(exerciseFrequencyOptions, 1),
    diet: extractRandomFeatures(dietOptions, Math.floor(Math.random() * 2)),
    allergies: extractRandomFeatures(allergiesOptions, 2),
    fitnessExercises: extractRandomFeatures(fitnessExercisesOptions, 2),
    illness: illnessFlag,
    illnessDetails: illnessFlag
      ? extractRandomFeatures(illnessDetailsOptions, 1)
      : [],
    chronicIllness: extractRandomFeatures(
      chronicIllnessOptions,
      Math.floor(Math.random() * 2)
    ),
    injuries: extractRandomFeatures(
      injuriesOptions,
      Math.floor(Math.random() * 2)
    ),
    respiratoryConditions: extractRandomFeatures(
      respiratoryConditionsOptions,
      Math.floor(Math.random() * 2)
    ),
    pain: extractRandomFeatures(painOptions, Math.floor(Math.random() * 2)),
  };
};

function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
}

const extractRandomFeatures = (options, numberOfUniqueFeatures) => {
  const randomFeatures = [];
  for (let i = 0; i < numberOfUniqueFeatures; i++) {
    const randomFeature = options[Math.floor(Math.random() * options.length)];
    if (!randomFeatures.includes(randomFeature)) {
      randomFeatures.push(randomFeature);
    }
  }
  return randomFeatures;
};

module.exports = { generateRandomUserProfile };
