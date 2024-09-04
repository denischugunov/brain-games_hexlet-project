import runGameSession from '../index.js';
import { getRandomNum } from '../utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const checkEvenOdd = () => {
  const randomNum = getRandomNum();
  console.log(`Question: ${randomNum}`);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => runGameSession(gameRules, checkEvenOdd);
