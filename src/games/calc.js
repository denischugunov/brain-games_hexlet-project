import readlineSync from 'readline-sync';

const test = () => {
  const getRandomNum = () => Math.floor(Math.random() * 101);

  let correctAnswer = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('What is the result of the expression?');

  const checkCalc = () => {
    const randomLeftOperand = getRandomNum();
    const randomRightOperand = getRandomNum();
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];

    console.log(
      `Question: ${randomLeftOperand} ${randomOperator} ${randomRightOperand}`,
    );
    let expectedAnswer;
    switch (randomOperator) {
      case '+':
        expectedAnswer = randomLeftOperand + randomRightOperand;
        break;
      case '-':
        expectedAnswer = randomLeftOperand - randomRightOperand;
        break;
      case '*':
        expectedAnswer = randomLeftOperand * randomRightOperand;
        break;
      default:
        console.log('ups...something wrong!');
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (+userAnswer === expectedAnswer) {
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(
        `'${userAnswer}' is the wrong answer ;(. Correct answer was '${expectedAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (correctAnswer === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      checkCalc();
    }
  };

  checkCalc();
};

test();
