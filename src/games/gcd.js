import getRandomNum from '../utils.js';
import gamesLogic, { roundsNumber } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const generateResult = () => {
  const operand1 = getRandomNum();
  const operand2 = getRandomNum();
  const question = `${operand1} ${operand2}`;
  const correctAnswer = String(getGcd(operand1, operand2));
  return [question, correctAnswer];
};

const runGcdGame = () => {
  const results = [];
  for (let i = 0; i <= roundsNumber - 1; i += 1) {
    results[i] = generateResult();
  }
  return gamesLogic(results, rule);
};
export default runGcdGame;
