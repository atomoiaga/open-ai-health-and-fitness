const { userProfileSample } = require("../data/user_profile");
const {
  promptFactory,
  FITNESS_PLAN,
  DIET_PLAN,
} = require("../services/prompt_builder");

const print = () => {
  console.log(`💪 Fitness Plan Prompt 💪\n`);
  console.log(promptFactory(userProfileSample, FITNESS_PLAN));
  console.log(`\n🍽  Diet Plan Prompt 🍽\n`);
  console.log(promptFactory(userProfileSample, DIET_PLAN));
};

print();
