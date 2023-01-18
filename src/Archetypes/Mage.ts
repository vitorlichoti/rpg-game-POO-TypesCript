import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static count = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage.count += 1;
  }

  public get name():string {
    return this.name;
  }

  public get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }
}

export default Mage;