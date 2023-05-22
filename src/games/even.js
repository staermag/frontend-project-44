import getRandomNum from '../utils.js';
import gamesLogic, { roundsNumber } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateResult = () => {
  const question = getRandomNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  const results = [];
  for (let i = 0; i <= roundsNumber - 1; i += 1) {
    results[i] = generateResult();
  }
  return gamesLogic(results, rule);
};
export default runEvenGame;
