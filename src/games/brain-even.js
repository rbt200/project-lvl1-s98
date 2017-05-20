import readlineSync from 'readline-sync';

let counter = 0;
let userName = "";


const introEven = function introEven() {
console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
userName = readlineSync.default.question('May I have your name? ');
console.log('Hello ' + userName + '!\n');

logic(counter);

};


const logic = (c) => {

const randomNumber = getRandomInt(0,10000000);
const answer = readlineSync.default.question(`Qustion: ${randomNumber}  `);
const trueResult = isEven(randomNumber);

if(answer.localeCompare(trueResult) === 0){
counter++;
if(counter > 3){console.log(`Congratulations, ${userName}`);return;}
logic(++counter);
}
else{

console.log(`"${answer}" was wrong answer. Correct answer was "${trueResult}".\nLet us try again, ${userName}`);
return;
}

}; 

const isEven = (n) => n % 2 === 0 ? 'yes' : 'no';

const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min)) + min;


export default introEven;
