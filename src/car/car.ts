interface CarModel {
  numberOfTires: number;
  numberOfDoors: number;
  seatBelt: boolean;
  airbag: boolean;

  toString(): string;
  equals(other: CarModel): boolean;
}

export class Car implements CarModel {
  constructor(
    public numberOfTires: number,
    public numberOfDoors: number,
    public seatBelt: boolean,
    public airbag: boolean,
  ) {}

  toString() {
    return `This car has ${this.numberOfTires} tires and ${this.numberOfDoors} doors, it has ${this.seatBelt ? "a" : "no"} seatbelt and ${this.airbag ? "an" : "no"} airbag.`;
  }

  equals(other: CarModel) {
    return (
      this.numberOfTires === other.numberOfTires &&
      this.numberOfDoors === other.numberOfDoors &&
      this.seatBelt === other.seatBelt &&
      this.airbag === other.airbag
    );
  }
}

export class CarInspectionService {
  static hasFourTires(car: Car) {
    return car.numberOfTires === 4;
  }

  static hasSeatBelts(car: Car) {
    return car.seatBelt;
  }

  static hasAirbag(car: Car) {
    return car.airbag;
  }

  static hasThreeOrFiveDoors(car: Car) {
    return car.numberOfDoors === 3 || car.numberOfDoors === 5;
  }

  static checkCar(car: Car) {
    return (
      this.hasFourTires(car) &&
      this.hasSeatBelts(car) &&
      this.hasAirbag(car) &&
      this.hasThreeOrFiveDoors(car)
    );
  }
}
