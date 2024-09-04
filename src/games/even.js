import readlineSync from 'readline-sync';

export default () => {
  const getRandomNum = () => Math.floor(Math.random() * 101);
  const isEven = (num) => num % 2 === 0;

  let correctAnswer = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const checkEvenOdd = () => {
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
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
      checkEvenOdd();
    }
  };

  checkEvenOdd();
};
