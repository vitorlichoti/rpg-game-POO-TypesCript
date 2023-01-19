import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static count = 0;
  public energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.count += 1;
  }

  public get name():string {
    return this.name;
  }

  public get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }
}

export default Mage;