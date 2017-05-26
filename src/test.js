#!/usr/bin/env node

// import isEven from '../src/games/brain-even';
// import { isEven, getGameData } from '../src/games/brain-even';
import { isEven } from '../src/games/brain-even';
import { isNumberPrime } from '../src/games/brain-prime';

const assert = require('assert');

const testEven = () =>
// console.log('TEST begin brain-even');
assert.equal('yes', isEven(412));
assert.equal('no', isEven(41));
assert.equal('yes', isEven(412));
/* assert.equal(JSON.stringify({ question: '42', trueResult: 'yes' }),
JSON.stringify(getGameData())); */
console.log('brain-even TEST passed');

const testPrime = () =>
// console.log('TEST begin brain-prime');
assert.equal(true, isNumberPrime(23));
console.log('brain-prime TEST passed');

testEven();
testPrime();
