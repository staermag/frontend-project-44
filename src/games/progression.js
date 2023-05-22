import { getRandomNum } from '../utils.js';
import gamesLogic, { roundsNumber } from '../index.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = () => {
  const firstItem = getRandomNum();
  const stepProgression = getRandomNum(1, 10)
  const progression = [firstItem];
  for (let i = 1; i <= progressionLength - 1; i += 1) {
    progression[i] = firstItem + (stepProgression * i);
  }
  return progression;
};

const generateResult = () => {
  const progression = getProgression();
  const resultProgression = progression;
  const indexOfHiddenItem = getRandomNum(0, progressionLength - 1);
  const correctAnswer = String(progression[indexOfHiddenItem]);
  resultProgression[indexOfHiddenItem] = '..'
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const results = [];
  for (let i = 0; i <= roundsNumber - 1; i += 1) {
    results[i] = generateResult();
  }
  return gamesLogic(results, rule);
};
export default runProgressionGame;