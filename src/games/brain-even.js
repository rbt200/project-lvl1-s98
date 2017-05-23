import matrix from '..';
import getRandomInt from '../random-int';


const isEven = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


const logic = () => {
  const randomNumber = getRandomInt(0, 10000000);
  const trueResult = isEven(randomNumber);

  const logicData = {
    question: randomNumber.toString(),
    trueResult: trueResult.toString(),
  };
  return logicData;
};


const task = 'Answer "yes" if number even otherwise answer "no".';

const even = () => matrix(task, logic);

export default even;
