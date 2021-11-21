/* eslint-disable no-underscore-dangle */
import Character from './Сharacter';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);

    this.stoned = false;
    this.distance = 1;
  }

  set stoned(val) {
    this._stoned = val;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(val) {
    this._attack = val;
  }

  get attack() {
    this._attack -= (this.distance - 1) * 10;

    if (this.stoned) {
      this._attack -= Math.log2(this.distance) * 5;
    }

    return this._attack > 0 ? Math.round(this._attack) : 0;
  }
}
