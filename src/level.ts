// Level ansvarar för att rita ut alla entiteterna och förflytta dem, deussotm kollar den kollision.
class Level {
  //attributes
  public id: number;
  private entities: Entity[];
  private motion: number; //hastigheten som förflyttar alla entiteter förutom player

  constructor(entities: Entity[]) {
    this.id = 1;
    this.entities = entities;
    this.motion = 2;
  }

  public update(): void {}
  private moveWorld(): void {} //Olika hastigheter på bakgrund = parallax; flygande objekt = ny hastighet?
  private checkCollision(): void {}

  // gå igenom alla entiteter i arrayen och rita ut dem
  //functions
  public draw(): void {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
}
