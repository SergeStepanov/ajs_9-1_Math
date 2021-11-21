import Magician from '../Magician';

test('Тест для Magician', () => {
  const gamer = new Magician('zzzzz');

  const result = {
    _attack: 10,
    _stoned: false,
    distance: 1,
    defence: 40,
    health: 100,
    level: 1,
    name: 'zzzzz',
    type: 'Magician',
  };

  expect(gamer).toEqual(result);
});
