//ABSTRACTION
// Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of the object.
class AirplaneSimulator {
  model: string;
  speed: number;
  altitude: number;

  constructor(model: string) {
    this.model = model;
    this.speed = 0;
    this.altitude = 0;
  }

  takeOff() {
    console.log(`${this.model} take off`);
    this.speed = 200;
    this.altitude = 1000;
  }

  fly() {
    console.log(`${this.model} flying at ${this.speed} km/h and ${this.altitude} m`);
  }
}

// The AirplaneSimulator class has a lot of details that are not needed by the AirplaneReserve class.
class AirplaneReserve {
  model: string;
  totalSeat: number;
  busySeat: number;

  constructor(model: string, totalSeat: number) {
    this.model = model;
    this.totalSeat = totalSeat;
    this.busySeat = 0;
  }

  bookSeat() {
    if (this.busySeat < this.totalSeat) {
      this.busySeat++;
      console.log(`Booking seat for ${this.model}. Available seat: ${this.totalSeat - this.busySeat}`);
    } else {
      console.log(`Sorry, ${this.model} is full`);
    }
  }
}

const reserve = new AirplaneReserve('Fumigavion', 2)

reserve.bookSeat() // Booking seat for Fumigavion. Available seat: 1
reserve.bookSeat() // Booking seat for Fumigavion. Available seat: 0
reserve.bookSeat() // Sorry, Fumigavion is full
