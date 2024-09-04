import runGameSession from '../index.js';
import { getRandomNum, getRandomIndexOfArr } from '../utils.js';

const gameRules = 'What is the result of the expression?';

const checkCalc = () => {
  const randomLeftOperand = getRandomNum();
  const randomRightOperand = getRandomNum();
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomIndexOfArr(operators);
  const randomOperator = operators[randomIndex];
  let correctAnswer;

  console.log(
    `Question: ${randomLeftOperand} ${randomOperator} ${randomRightOperand}`,
  );

  switch (randomOperator) {
    case '+':
      correctAnswer = randomLeftOperand + randomRightOperand;
      break;
    case '-':
      correctAnswer = randomLeftOperand - randomRightOperand;
      break;
    case '*':
      correctAnswer = randomLeftOperand * randomRightOperand;
      break;
    default:
      console.log('ups...something is wrong!');
  }

  return correctAnswer;
};

export default () => runGameSession(gameRules, checkCalc);
