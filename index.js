require("dotenv").config();

const { generatePlan } = require("./services/plan_generator");
const {
  generateRandomUserProfile,
} = require("./services/random_user_profile_generator");
const { FITNESS_PLAN, DIET_PLAN } = require("./services/prompt_builder");
const { promptParser } = require("./services/prompt_parser");

const main = async () => {
  const randomUser = generateRandomUserProfile();
  console.log(randomUser);
  const hasFitnessPlan = randomUser.plans.includes(FITNESS_PLAN);
  const hasdietPlan = randomUser.plans.includes(DIET_PLAN);

  const fitnessPlan = hasFitnessPlan
    ? await generatePlan(randomUser, FITNESS_PLAN)
    : null;
  const dietPlan = hasdietPlan
    ? await generatePlan(randomUser, DIET_PLAN)
    : null;

  if (hasFitnessPlan) {
    console.log(promptParser(fitnessPlan, FITNESS_PLAN));
  }
  if (hasdietPlan) {
    console.log(promptParser(dietPlan, DIET_PLAN));
  }
};

main();
