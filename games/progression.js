import game from '../src/index.js';
import { randint, arythmProgression } from '../src/util.js';

const buildQuestion = () => {
  const firstElem = randint(1, 10);
  const step = randint(1, 10);
  const length = 10;
  const replacementIndex = randint(0, length);

  const progression = arythmProgression(firstElem, step, length);
  progression[replacementIndex] = '..';

  return progression.join(' ');
};

const findAnswer = (question) => {
  const progression = question.split(' ').map((x) => (x === '..' ? x : Number(x)));
  const replacementIndex = progression.indexOf('..');
  const number = replacementIndex >= 2 ? progression[0] : progression[2];
  const nextNumber = replacementIndex >= 2 ? progression[1] : progression[3];
  const step = nextNumber - number;

  const result = replacementIndex === 0 ? progression[1] - step
    : progression[replacementIndex - 1] + step;

  return String(result);
};

const start = () => {
  const rules = 'What number is missing in the progression?';

  game(rules, buildQuestion, findAnswer);
};

export default start;
