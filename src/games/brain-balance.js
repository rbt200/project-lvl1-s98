import readlineSync from 'readline-sync';
import getRandomInt from '../random-int';

let userName = '';
let counter = 1;

// return a unsorted balanced number
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
  console.log(`Question: ${disbalancedNum}`);
  const answer = readlineSync.question('Your answer: ');

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
