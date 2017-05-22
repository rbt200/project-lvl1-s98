import matrix from '..';
import getRandomInt from '../random-int.js';
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
  return arr.join('');
};

const convertStrArrToIntArr = (n) => {
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

const logic = () => {
  const disbalancedNum = getRandomInt(0, 101);
  const arr = convertStrArrToIntArr(disbalancedNum);
  const trueResult = getBalancedNum(arr);

  const logicData = {
    question : disbalancedNum,
    trueResult : trueResult
  };
  return logicData;
};

const task = 'Balance the given number.'

const balance = () => matrix(task, logic);

export default balance;
