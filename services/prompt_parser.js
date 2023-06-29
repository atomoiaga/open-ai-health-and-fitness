const { FITNESS_PLAN, DIET_PLAN } = require("../services/prompt_builder");

const START_DELIMITER = "<start>\n\n";
const STOP_DELIMITER = "\n\n<stop>";

const promptParser = (prompt, plan) => {
  switch (plan) {
    case FITNESS_PLAN:
      const fitnessPlan = getTextBetween(
        prompt,
        START_DELIMITER,
        STOP_DELIMITER
      );
      const planDays = splitByNewLine(fitnessPlan);

      const planStructured = planDays.map((session) => ({
        sessionNumber: getSessionNumber(session),
        timestamp: Date.now(),
        generatedText: session.split("\n").splice(1).join("\n"),
      }));

      return planStructured;
    case DIET_PLAN:
      const dietPlan = getTextBetween(prompt, START_DELIMITER, STOP_DELIMITER);
      const dietPlanDays = splitByNewLine(dietPlan);

      const dietPlanStructured = dietPlanDays.map((meal) => ({
        mealNumber: getMealNumber(meal),
        timestamp: Date.now(),
        generatedText: meal.split("\n").splice(1).join("\n"),
      }));
      return dietPlanStructured;
  }
};

// const getTextBetweenRegEx = (text, start, end) => {
//   const result = text.match(new RegExp(`${start}(.*)${end}`), "g");
//   return result ? result[1] : null;
// };

const getTextBetween = (text, start, end) => {
  if (text === null) return null;
  var mySubString = text.substring(
    text.indexOf(start) + start.length,
    text.lastIndexOf(end)
  );

  return mySubString;
};

const splitByNewLine = (text) => {
  if (text === null) return null;
  return text.split("\n\n");
};

const getSessionNumber = (text) => {
  if (text === null) return null;
  const result = text.match(/Session #(\d)/);
  return result ? result[1] : null;
};

const getMealNumber = (text) => {
  if (text === null) return null;
  const result = text.match(/Meal #(\d)/);
  return result ? result[1] : null;
};

module.exports = { promptParser };

// JSON structure for fitness plan:
// session number ✓
// timestamp ✓
// generatedText ✓

// JSON structure for diet plan:
// meal number ✓
// timestamp ✓
// generatedText ✓
