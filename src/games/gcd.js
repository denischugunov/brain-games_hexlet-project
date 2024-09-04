import runGameSession from '../index.js';
import { getRandomNum } from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findCommonDivisor = (firstNum, secNum) => {
  const minNum = Math.min(firstNum, secNum);
  for (let i = minNum; i > 0; i -= 1) {
    if (firstNum % i === 0 && secNum % i === 0) {
      return i;
    }
  }
  return 'ups...something is wrong!';
};

const checkGcd = () => {
  const randomFirstNum = getRandomNum();
  const randomSecNum = getRandomNum();
  console.log(`Question: ${randomFirstNum} ${randomSecNum}`);
  const correctAnswer = findCommonDivisor(randomFirstNum, randomSecNum);
  return correctAnswer;
};

export default () => runGameSession(gameRules, checkGcd);
