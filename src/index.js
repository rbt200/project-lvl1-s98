import readlineSync from 'readline-sync';

let userName = '';

const welcome = (task) => {
  console.log('Welcome to Brain Games!');
  console.log(`${task}`);
  userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${userName}!\n`);
};


const startGameProcess = (dataForGame) => {
  const iter = (a) => {
    let acc = a;
    if (acc === 3) { console.log(`Congratulations, ${userName}`); return; }

    const data = dataForGame();
    const question = data.question;
    const trueResult = data.trueResult;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === trueResult) {
      console.log('Correct!');
      acc += 1;
      iter(acc);
    } else {
      console.log(`'${answer}' was wrong answer. Correct answer was '${trueResult}'.\n`);
      console.log(`Let us try again, ${userName}`);
    }
  };
  iter(0);
};

const beginGame = (task, dataForGame) => {
  welcome(task);
  return startGameProcess(dataForGame);
};

export default beginGame;
