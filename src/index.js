import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('WELCOME to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  /* console.log(`Hello, ${name}`); */
  return name;
};
export default greeting;
