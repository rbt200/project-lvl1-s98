import beginGame from '..';
import getRandomInt from '../random-int';


const getBalancedNum = (ar) => {
  const arr = ar;
  arr.sort();
  const firstNum = arr[0];
  const secondNum = arr[arr.length - 1];
  if (firstNum !== secondNum && firstNum + 1 !== secondNum) {
    arr[0] += 1;
    arr[arr.length - 1] -= 1;
    getBalancedNum(arr);
  }
  const result = arr.join('').toString();
  return result;
};


const convertIntToArr = (n) => {
// convert the number into a string
  const str = n.toString();
// convert the string into an array of chars
  const arr = str.split('');
  const newArr = [arr.length];

  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = parseInt(arr[i], 10);
  }
  return newArr;
};

const getGameData = () => {
  const disbalancedNum = getRandomInt(0, 1001);
  const arr = convertIntToArr(disbalancedNum);
  const trueResult = getBalancedNum(arr);

  const logicData = {
    question: disbalancedNum,
    trueResult: trueResult.toString(),
  };
  return logicData;
};

const task = 'Balance the given number.';

const balance = () => beginGame(task, getGameData);

export default balance;
