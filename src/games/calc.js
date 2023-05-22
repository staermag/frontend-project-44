import getRandomNum from '../utils.js';
import gamesLogic, { roundsNumber } from '../index.js';

const rule = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const indexOperator = getRandomNum(0, operators.length - 1);
  return operators[indexOperator];
};

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return 'Incorrect operator';
  }
};

const generateResult = () => {
  const operand1 = getRandomNum();
  const operand2 = getRandomNum();
  const operator = getRandomOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculate(operand1, operand2, operator));
  return [question, correctAnswer];
};

const runCalcGame = () => {
  const results = [];
  for (let i = 0; i <= roundsNumber - 1; i += 1) {
    results[i] = generateResult();
  }
  return gamesLogic(results, rule);
};
export default runCalcGame;
