import game from '../src/index.js';
import { randint, isPrime } from '../src/util.js';

const buildQuestion = () => {
  const from = 1;
  const to = 100;

  return String(randint(from, to));
};

const findAnswer = (question) => (isPrime(Number(question)) ? 'yes' : 'no');

const start = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  game(rules, buildQuestion, findAnswer);
};

export default start;