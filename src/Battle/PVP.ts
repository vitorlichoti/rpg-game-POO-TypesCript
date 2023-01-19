import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected p1:Fighter;
  protected p2:Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p2);
    this.p1 = p1;
    this.p2 = p2;
  }

  fight(): number {
    this.p1.attack(this.p2);
    this.p2.attack(this.p1);

    if (this.p2.lifePoints <= 0) return 1;
    if (this.p1.lifePoints <= 0) return -1;

    return super.fight();
  }
}

export default PVP;