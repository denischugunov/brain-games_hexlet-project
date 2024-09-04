import runGameSession from '../index.js';
import { getRandomNum, getRandomIndexOfArr } from '../utils.js';

const gameRules = 'What number is missing in the progression?';

const createProgression = () => {
  const progressionLength = 10;
  const progression = [];
  progression[0] = getRandomNum();
  const progressionDiff = getRandomNum();

  for (let i = 1; i < progressionLength; i += 1) {
    const nexElement = progression[i - 1] + progressionDiff;
    progression.push(nexElement);
  }

  return progression;
};

const checkProgression = () => {
  const progression = createProgression();
  const randomIndex = getRandomIndexOfArr(progression);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  console.log(`Question: ${progression}`);

  return correctAnswer;
};

export default () => runGameSession(gameRules, checkProgression);
