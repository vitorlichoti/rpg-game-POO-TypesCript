import Race from './Race';

export default class Halfling extends Race {
  private _points:number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._points = 60;
    Halfling.count += 1;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }
}