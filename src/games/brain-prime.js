import beginGame from '..';
import getRandomInt from '../random-int';


const createArithmeticProgression = () => {
  const beginning = getRandomInt(1, 101);
  const step = getRandomInt(1, 11);
  const arr = [];
  arr[0] = beginning;

  const iter = (acc, count) => {
    let counter = count;
    if (counter === 10) { return acc; }
    arr[counter] = arr[counter - 1] + step;
    counter += 1;
    return iter(arr, counter);
  };
  return iter(arr, 1);
};

const hideNumber = (arr) => {
  const length = arr.length;
  const rand = getRandomInt(0, length - 1);
  return arr[rand];
};

const displayArithmeticProgression = (a, num) => {
  const arr = a;
  const pos = arr.indexOf(num);
  arr[pos] = '..';
  return arr.join(' ');
};

const getGameData = () => {
  const progression = createArithmeticProgression();
  const trueResult = hideNumber(progression);
  const displayProgression = displayArithmeticProgression(progression, trueResult);
  const logicData = {
    question: displayProgression.toString(),
    trueResult: trueResult.toString(),
  };
  return logicData;
};


const task = 'What number is missing in this progression?';

const even = () => beginGame(task, getGameData);

export default even;
