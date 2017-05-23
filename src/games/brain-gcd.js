import matrix from '..';
import getRandomInt from '../random-int';


const getGcd = (num1, num2) => {
  const limit = num1 <= num2 ? num1 : num2;
  let gcd = 1;
  for (let i = 1; i <= limit; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) { gcd = i; }
  }
  return gcd;
};


const logic = () => {
  const firstNum = getRandomInt(0, 101);
  const secondNum = getRandomInt(0, 101);
  const trueResult = getGcd(firstNum, secondNum);

  const logicData = {
    question: `${firstNum}  ${secondNum}`,
    trueResult: trueResult.toString(),
  };
  return logicData;
};


const task = 'Find the greatest common divisor of given numbers.';

const gcd = () => matrix(task, logic);

export default gcd;
