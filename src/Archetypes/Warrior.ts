import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static count = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior.count += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;
  }

  public get name():string {
    return this.name;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }
}

export default Warrior;