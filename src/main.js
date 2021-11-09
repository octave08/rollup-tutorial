import { version } from '../package.json';
import foo from './foo.js';
import answer from 'the-answer';

export default function () {
  console.log(foo);
  console.log('version ' + version);
  console.log(`the answer is ${answer}`);

  const city = address?.city;
}