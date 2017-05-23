import matrix from '..';
import getRandomInt from '../random-int';

const getAction = () => {
  const actions = ['+', '-', '*'];
  const actionSingle = getRandomInt(0, 3);
  return actions[actionSingle];
};

const logic = () => {
  const firstNum = getRandomInt(1, 11);
  const secondNum = getRandomInt(1, 11);
  const action = getAction();
  let trueResult;

  switch (action) {
    case '+': trueResult = firstNum + secondNum;
      break;
    case '-': trueResult = firstNum - secondNum;
      break;
    case '*': trueResult = firstNum * secondNum;
      break;
    default:
  }

  const logicData = {
    question: `${firstNum} ${action} ${secondNum}`,
    trueResult: trueResult.toString(),
  };
  return logicData;
};

const task = 'What is the result of the expression?';

const calc = () => matrix(task, logic);

export default calc;
