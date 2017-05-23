import beginGame from '..';
import getRandomInt from '../random-int';


const createArithmeticProgression = () => {
  
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


const task = 'What number is missing in this progression?';

const even = () => beginGame(task, getGameData);

export default even;
