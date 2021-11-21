import Daemon from '../Daemon';

test('Тест для Daemon', () => {
  const gamer = new Daemon('god');

  const result = {
    _attack: 10,
    _stoned: false,
    distance: 1,
    defence: 40,
    health: 100,
    level: 1,
    name: 'god',
    type: 'Daemon',
  };

  expect(gamer).toEqual(result);
});
