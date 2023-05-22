import { getRandomNum } from '../utils.js';
import gamesLogic, { roundsNumber } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  };
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }   
  };
  return true;
};

const generateResult = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const results = [];
  for (let i = 0; i <= roundsNumber - 1; i += 1) {
    results[i] = generateResult();
  }
  return gamesLogic(results, rule);
};
export default runPrimeGame;
