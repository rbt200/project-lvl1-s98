import readlineSync from 'readline-sync';
import getRandomInt from '../random-int';

let counter = 0;
let userName = '';

const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const logic = () => {
  const randomNumber = getRandomInt(0, 10000000);
  const answer = readlineSync.question(`Qustion: ${randomNumber}  `);
  const trueResult = isEven(randomNumber);

  if (answer === trueResult) {
    counter += 1;
    if (counter > 3) { console.log(`Congratulations, ${userName}`); return; }
    logic(counter += 1);
  } else {
    console.log(`"${answer}" was wrong answer. Correct answer was "${trueResult}".\nLet us try again, ${userName}`);
  }
};

const introEven = function introEven() {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  logic(counter);
};

export default introEven;
