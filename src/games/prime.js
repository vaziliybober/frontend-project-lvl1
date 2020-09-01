import game from '../index.js';
import { randint } from '../util.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  return String(randint(from, to));
};

const findAnswer = (question) => (isPrime(Number(question)) ? 'yes' : 'no');

const start = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  game(taskDescription, buildQuestion, findAnswer);
};

export default start;
