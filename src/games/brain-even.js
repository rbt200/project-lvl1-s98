import beginGame from '..';
import getRandomInt from '../random-int';


const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


const getGameData = () => {
  const randomNumber = getRandomInt(0, 100);
  const trueResult = isEven(randomNumber);

  const logicData = {
    question: randomNumber.toString(),
    trueResult: trueResult.toString(),
  };
  return logicData;
};


const task = 'Answer "yes" if number even otherwise answer "no".';

const even = () => beginGame(task, getGameData);

export default even;
