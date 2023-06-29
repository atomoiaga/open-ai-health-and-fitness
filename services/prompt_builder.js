/**
 *
 * Author: @atomoiaga
 * State: Prototype
 * */

// FITNESS PLAN DETAILS
// Here are my goals: ${[goal1, goal2]}
// Here is my workout duration: ${workoutDuration}.
// Here is my workout complexity: ${workoutComplexity}.
// Here is my workout frequency: ${workoutFrequency}.

// GENERAL DETAILS DETAILS
// My sex is ${sex}, I weight ${weight} and I am ${height} tall, I am ${age} years old,
// I usually sleep around ${sleep} hours per night

// DIET PLAN DETAILS
// Here are my goals: ${[goal1, goal2]}.
// I am following a ${diet} diet.
// I want the meal preparation time to be around ${mealPreparationTime}.
// I want to have an intake of about ${totalCalories} calories per day.
// I serve ${numberOfMeals} meals per day.
// IDEAS: include alergies, intolerances, food preferences, food dislikes, food likes

// HEALT CHARACTERISTICS DETAILS
// I have the following injuries: ${[injury1, injury2]}. // e.g. tendon, muscle, ligament, etc.
// NOT IN DESIGN, GOOD IDEA: I have ${[respiratoryCondition1, respiratoryCondition2]}.  // e.g. asthma, COPD, etc.
// I have ${[pain1, pain2]}.    // e.g. back pain, knee pain, etc.
// I have ${[illness1, illness2]}. // e.g. diabetes, high blood pressure, etc.
// I have ${[recovery1, recovery2]}. // e.g. recovering from an injury, surgery, etc.
// I have ${[burnout1, burnout2]}. // e.g. burnout, fatigue, etc.

const FITNESS_PLAN = "fitness";
const DIET_PLAN = "diet";

// userData: user profile collected on health questionnaire and YPL Buddy questionnaire
// plan: fitness, diet

const promptFactory = (userData, plan) => {
  switch (plan) {
    case FITNESS_PLAN:
      return buildFitnessPrompt(userData);
    case DIET_PLAN:
      return buildDietPrompt(userData);
    default:
      throw new Error("Invalid plan");
  }
};

const buildFitnessPrompt = (userData) => {
  const {
    goals,
    workoutDuration,
    workoutComplexity,
    workoutFrequency,
    fitnessExercises,
  } = userData;
  const fitnessDetailsString = `Here are my goals: ${goals.join(", ")}.
  Here is my workout duration: ${workoutDuration}. 
  Here is my workout complexity: ${workoutComplexity}. 
  Here is my workout frequency: ${workoutFrequency}.
  I want my fitness plan to include the following exercises: ${fitnessExercises.join(
    ", "
  )}.`;

  const { sex, weight, height, dateOfBirth, sleep } = userData;

  const age = calculateAge(dateOfBirth);

  const generalDetailsString = `My sex is ${sex}, I weight ${weight} and I am ${height} tall, I am ${age} years old, 
  I usually sleep around ${sleep} hours per night`;

  const { injuries, pain, illness, burnout, respiratoryConditions, chronicIllness } = userData;

  // ℹ️ Note: pain, illness, burnout are just flags,
  //          not a list of values, we need to discuss
  //          if we want to include values for these fields

  const injuriesPrompt = injuries
    ? `Please consider that I have the following injuries: ${injuries.join(
        ", "
      )}.")`
    : "";
  const illnessPrompt = illness
    ? `Please consider that I have the following ilness/es: ${illness}`
    : "";
  const chronicIllnessPrompt =
    chronicIllness && chronicIllness.length > 0
      ? `Please consider that I have the following chronic ilness/es: ${chronicIllness.join(
          ", "
        )}`
      : "";
  const respiratoryConditionPrompt =
    respiratoryConditions && respiratoryConditions.length > 0
      ? `Please consider that I have the following respiratory condition: ${respiratoryConditions.join(
          ", "
        )}`
      : "";
  const painPrompt =
    pain && pain.length > 0
      ? `Please consider that I have the following pain/s: ${respiratoryConditions.join(
          ", "
        )}`
      : "";

  const healthCharacteristicsDetails = `${injuriesPrompt} ${illnessPrompt} ${chronicIllnessPrompt} ${respiratoryConditionPrompt} ${painPrompt}`;

  const fitnessPrompt = `${generalDetailsString} ${fitnessDetailsString} ${healthCharacteristicsDetails}`;

  return fitnessPrompt.replace(/\s+/g, " ");
};

const buildDietPrompt = (userData) => {
  const { goals, diet, mealPreparationTime, totalCalories, numberOfMeals } =
    userData;

  const dietDetailsString = `Here are my goals: ${goals.join(", ")}.
   I am following a ${diet} diet.
   I want the meal preparation time to be around ${mealPreparationTime}.
   I want to have an intake of about ${totalCalories} calories per day.
   I serve ${numberOfMeals} meals per day.`;

  const { sex, weight, height, dateOfBirth, sleep } = userData;
  const age = calculateAge(dateOfBirth);

  const generalDetailsString = `My sex is ${sex}, I weight ${weight} and I am ${height} tall, I am ${age} years old, 
  I usually sleep around ${sleep} hours per night.`;

  // ℹ️ Note: in the same way we added injuries for fitness plan, we can add some useful fields for diet plan
  //          e.g. -allergies-, intolerances, food preferences, food dislikes, food likes
  //          we need to discuss if we want to include these fields

  const { allergies } = userData;

  const allergiesPrompt =
    allergies && allergies.length > 0
      ? `Please consider that I have the following allergy/s: ${allergies.join(
          ", "
        )}`
      : "";

  const dietPrompt = `${generalDetailsString} ${dietDetailsString} ${allergiesPrompt}`;

  return dietPrompt.replace(/\s+/g, " ");
};

const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

module.exports = {
  promptFactory,
  FITNESS_PLAN: FITNESS_PLAN,
  DIET_PLAN: DIET_PLAN,
};
