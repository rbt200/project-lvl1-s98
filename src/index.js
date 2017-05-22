import readlineSync from 'readline-sync';

let counter = 1;
let userName = '';

const wellcome = (task) => {
  console.log('Welcome to Brain Games!');
  console.log(`${task}`);
  userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${userName}!\n`);
};

const flowOfGame = (logic) => {
	const data = logic();
	const question = data.question;
	const trueResult = data.trueResult;

	console.log(`Question: ${question}`);
	const answer = readlineSync.question('Your answer: ');

	if (answer === trueResult) {
		console.log('Correct!');
		counter += 1;
    if (counter > 3) { console.log(`Congratulations, ${userName}`); return; }
    flowOfGame(logic);
} else {
	console.log(`'${answer}' was wrong answer. Correct answer was '${trueResult}'.\nLet us try again, ${userName}`);
}
};

const matrix = (task, logic) => {
	wellcome(task);
	return flowOfGame(logic);
};

export default matrix;