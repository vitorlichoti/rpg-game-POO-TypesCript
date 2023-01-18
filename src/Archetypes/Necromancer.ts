import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static count = 0;
  private _energy: EnergyType;

  constructor(named: string) {
    super(named);
    this._energy = 'mana';
    Necromancer.count += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }
}

export default Necromancer;