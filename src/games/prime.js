import runGameSession from '../index.js';
import { getRandomNum } from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const checkPrime = () => {
  const randomNum = getRandomNum();
  console.log(`Question: ${randomNum}`);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => runGameSession(gameRules, checkPrime);
