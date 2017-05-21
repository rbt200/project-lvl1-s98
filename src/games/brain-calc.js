import readlineSync from 'readline-sync';

let userName = '';

const introCalc = function introCalc() {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?\n');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  
};

export default introCalc;
