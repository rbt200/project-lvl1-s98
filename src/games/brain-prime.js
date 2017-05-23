import beginGame from '..';
import getRandomInt from '../random-int';

const isNumberPrime = (n) => {
  const origin = n;
  for (let i = 2; i < origin; i += 1) {
    if (origin % i === 0) { return false; }
  }
  return true;
};

const getGameData = () => {
  const randomNumber = getRandomInt(2, 100);
  const trueResult = isNumberPrime(randomNumber) === true ? 'yes' : 'no';
  const logicData = {
    question: randomNumber.toString(),
    trueResult: trueResult.toString(),
  };
  return logicData;
};


const task = 'Is the number prime? Answer "yes" or "no".';

const even = () => beginGame(task, getGameData);

export default even;
