import Daemon from '../Daemon';
import Magician from '../Magician';

test('работа get attack ', () => {
  const daemon = new Daemon('daem');
  daemon.attack = 100;
  daemon.stoned = true;
  daemon.distance = 1;

  expect(daemon.attack).toBe(100);
});

test('работа get attack ', () => {
  const magic = new Magician('magic');
  magic.attack = 200;
  magic.stoned = true;
  magic.distance = 2;

  expect(magic.attack).toBe(175);
});

test('работа get attack ', () => {
  const gamer = new Daemon('gamer');
  gamer.attack = 4;
  gamer.stoned = true;
  gamer.distance = 5;

  expect(gamer.attack).toBe(0);
});

test('работа get attack ', () => {
  const daemon = new Daemon('daem');
  daemon.attack = 100;
  daemon.stoned = false;
  daemon.distance = 1;

  expect(daemon.attack).toBe(100);
});
