import readlineSync from 'readline-sync';
import getRandomInt from '../random-int';

let userName = '';
let counter = 1;

// return a unsorted balanced number
const getBalancedNum = (arr) => {
  arr.sort();
  const firstNum = arr[0];
  const secondNum = arr[arr.length -1];
  if (firstNum === secondNum || firstNum + 1 === secondNum) {
  return arr.join('');
  }
  arr[0] += 1;
  arr[arr.length - 1] -= 1;
  getBalancedNum(arr);
};

const convertStrArrToIntArr = (n) => {
  // convert the number into a string
  const str = n + '';
  // convert the string into an array of chars
  const arr = str.split('');
  const newArr = [arr.length];
  for (let i = 0; i < arr.length; i += 1) {
        newArr[i] = parseInt(arr[i]);
  }
  return newArr;
};

const logic = () => {
  let disbalancedNum = getRandomInt(0, 1001);
  const arr = convertStrArrToIntArr(disbalancedNum);
  console.log(`Question: ${disbalancedNum}`);
  const answer = readlineSync.question('Your answer: ');
  const trueResult = typeof String(getBalancedNum(arr));

  if (answer === getBalancedNum(arr)) {
    console.log('Correct!');
    counter += 1;
    if (counter > 3) { console.log(`Congratulations, ${userName}`); return; }
    logic();
  } else {
    console.log(`'${answer}' was wrong answer. Correct answer was '${getBalancedNum(arr)}'.\nLet us try again, ${userName}`);
  }
};

const introBalance = function introBalance() {
  console.log('Welcome to Brain Games!');
  console.log('Balance the given number.\n');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  logic();
};

export default introBalance;
