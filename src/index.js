import readlineSync from 'readline-sync';
import introCalc from '../src/games/brain-calc';
import introEven from '../src/games/brain-even';

export const greeting = () => {
  console.log('WELCOME to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  /* console.log(`Hello, ${name}`); */
  return name;
};

export const calc = () => {
  return introCalc();
}

export const even = () => {
  return introEven();
}
