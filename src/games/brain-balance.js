import readlineSync from 'readline-sync';
import getRandomInt from '../random-int';

let userName = '';
let counter = 1;

const getGcd = (num1, num2) => {
  const limit = num1 <= num2 ? num1 : num2;
  let gcd = 1;
  for (let i = 1; i <= limit; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) { gcd = i; }
  }
  return gcd;
};

const logic = () => {
  const firstNum = getRandomInt(0, 101);
  const secondNum = getRandomInt(0, 101);
  const trueResult = getGcd(firstNum, secondNum);

  console.log(`Question: ${firstNum}  ${secondNum}`);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) === Number(trueResult)) {
    console.log('Correct!');
    counter += 1;
    if (counter > 3) { console.log(`Congratulations, ${userName}`); return; }
    logic();
  } else {
    console.log(`'${answer}' was wrong answer. Correct answer was '${trueResult}'.\nLet us try again, ${userName}`);
  }
};

const introCalc = function introCalc() {
  console.log('Welcome to Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  logic();
};

export default introCalc;
