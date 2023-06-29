const userProfileSample = {
  id: "1",
  name: "John Doe",
  weight: "70 kg",
  dateOfBirth: "1990-01-01",
  height: "170 cm",
  sex: "male",
  lowTestosterone: false, // male only // not treated in AI
  prostateProblems: false, // male only // not treated in AI
  bowelAndbladderProblems: false, // male only // not treated in AI
  goals: ["loose weight", "gain muscle"],
  plans: ["diet", "fitness"],
  mealPreparationTime: "30 min - 1 hour",
  totalCalories: "1500 - 2000 kcal",
  mealComplexity: "easy",
  numberOfMeals: "3",
  workoutDuration: "30 min - 1 hour",
  workoutComplexity: "easy",
  workoutFrequency: "daily",
  sleep: "7 - 8 hours",
  exercise: true, // not treated in AI
  exerciseFrequency: "3 - 4 times per week", // duplicate field for YPL Buddy we have workoutFrequency and health questionnaire has exerciseFrequency
  diet: "vegetarian",
  allergies: ["peanut allergy", "shellfish allergy"], 
  pregnancy: false, // not treated in AI
  perimenopause: false, // not treated in AI
  menopause: false, // not treated in AI
  menstrualCycle: null, // female only // not treated in AI
  fitnessExercises: ["strength", "running"],
  trainingForCompetitions: false, // not treated in AI
  burnout: false, // not treated in AI
  recovery: false, // not treated in AI
  illness: true,
  illnessDetails: "HIV", 
  chronicIllness: ["depression"], 
  injuries: ["ligament", "bone"], 
  respiratoryConditions: ["sleep apneea"], 
  pain: ["ocassional mild pain or discomfort"], 
  conceiving: false, // female only // not treated in AI
  conceivingInterval: null, // female only // not treated in AI
  lastMenstruation: null, // female only // not treated in AI
  preeclampsiaOrHighBloodPressure: null, // female only // not treated in AI
  breastFeeding: null, // female only // not treated in AI
  cesarianDelivery: null, // female only // not treated in AI
};

module.exports = { userProfileSample };

