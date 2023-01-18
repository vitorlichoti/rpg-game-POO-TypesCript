import Race from './Race';

class Dwarf extends Race {
  private _points:number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._points = 80;
    Dwarf.count += 1;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }
}

export default Dwarf;