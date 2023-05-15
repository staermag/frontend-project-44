import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomNum = (min = 1, max = 100) => {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const cbGetParityCheck = () => {
  const num = getRandomNum();
  const userAnswer = readlineSync.question(`Question: ${num}
Your answer: `);
  if (userAnswer === 'yes' && num % 2 !== 0) {
    return `'yes' is wrong answer ;(. Correct answer was 'no'.
    Let's try again, ${userName}!`;
  } 
  if (userAnswer === 'no' && num % 2 === 0) {
    return `'no' is wrong answer ;(. Correct answer was 'yes'.
    Let's try again, ${userName}!`;
  } 
  if (userAnswer === 'no' || userAnswer === 'yes') {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer ;(. Correct answer must be 'yes' or 'no'.
Let's try again, ${userName}!`;
};

const getParityCheck = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const result = cbGetParityCheck();
    if (result !== 'Correct!') {
        console.log(result);
        return;
    }
    console.log(result);
  };
  console.log(`Congratulations, ${userName}!`);
};
export default getParityCheck;