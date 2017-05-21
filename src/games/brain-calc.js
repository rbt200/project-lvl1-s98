import readlineSync from 'readline-sync';
import getRandomInt from '../random-int';

let userName = '';
let counter = 0;

const getAction = () => { 
  const actions = ['+','-','*'];
  const actionSingle = getRandomInt(0, 3);
  return res;
};

const logic = () => {
  const firstNum = getRandomInt(1, 11);
  const secondNum = getRandomInt(1, 11);
  const action = getAction();
  let result ;
  
  console.log(`Qustion: ${firstNum} ${action} ${secondNum}`);
  const answer = readlineSync.question(`Your answer: `);
  
  switch(actions[actionSingle]) {
  case '+':  result = firstNum + secondNum;
      break;
  case '-':  result = firstNum - secondNum;
      break;      
  case '*': result = firstNum * secondNum;      
      break;
 }
  
  if (answer === result) {
    counter += 1;
    if (counter > 3) { console.log(`Congratulations, ${userName}`); return; }
    logic(counter += 1);
  } else {
    console.log(`"${answer}" was wrong answer. Correct answer was "${result}".\nLet us try again, ${userName}`);
  }
  
};



const logicOld = () => {
  const randomNumber = getRandomInt(0, 10000000);
  const answer = readlineSync.question(`Qustion: ${randomNumber}  `);
  const trueResult = isEven(randomNumber);

  if (answer.localeCompare(trueResult) === 0) {
    counter += 1;
    if (counter > 3) { console.log(`Congratulations, ${userName}`); return; }
    logic(counter += 1);
  } else {
    console.log(`"${answer}" was wrong answer. Correct answer was "${trueResult}".\nLet us try again, ${userName}`);
  }
};

const introCalc = function introCalc() {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?\n');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  console.log(`Question: `);
  
  logic();
};

export default introCalc;
