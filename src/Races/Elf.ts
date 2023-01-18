import Race from './Race';

export default class Elf extends Race {
  private _points:number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._points = 99;
    Elf.count += 1;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }
}