/* eslint-disable no-console, no-unused-vars */
import Magician from './Magician';
import Daemon from './Daemon';

const magic = new Magician('gnom');
magic.attack = 100;
magic.stoned = true;
magic.distance = 2;

const test = new Magician('test');
test.attack = 100;
test.stoned = true;
test.distance = 1;

const daemon = new Daemon('god');
daemon.attack = 100;
daemon.distance = 2;

console.log(magic, test, daemon);
