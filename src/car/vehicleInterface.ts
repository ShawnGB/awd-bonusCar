interface Accelerateable {
  accelerate: (kmh: number) => number;
}

abstract class Vehicle implements Accelerateable {
  private static nextId: number = 1;
  constructor(
    protected name: string,
    protected velocity = 0,
    protected readonly id: number = Vehicle.nextId++,
  ) {}
  abstract accelerate(kmg: number): number;

  brake() {
    this.velocity = 0;
    console.log("Your Mama breakes");
  }
}

export class Car extends Vehicle {
  constructor(name: string) {
    super(name);
  }
  accelerate(kmh: number): number {
    const newVelocity = (this.velocity += kmh);
    console.log(
      `You now go very very fast, you go ${newVelocity}km/h, wooow! Soo fast`,
    );
    return newVelocity;
  }
}

export class Bicylce extends Vehicle {
  constructor(name: string) {
    super(name);
  }
  accelerate(kmh: number): number {
    if (this.velocity + kmh > 35) {
      throw new Error("You are too weak to actually go that fast!!");
    }
    const newVelocity = (this.velocity += kmh);

    console.log(
      `You now go very very fast, you go ${newVelocity}km/h, wooow! Soo fast`,
    );
    return newVelocity;
  }
}
