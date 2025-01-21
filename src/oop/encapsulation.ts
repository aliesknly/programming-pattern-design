export interface FlyingTransport {
  fly: (origin: string, destination: string, passenger: number) => void;
}

export class Airport {
  accept(flyingTransport: FlyingTransport) {
    flyingTransport.fly('Bali', 'Jakarta', 100);
  }
}

export class Helicopter implements FlyingTransport {
  fly(origin: string, destination: string, passenger: number) {
    console.log(`Helicopter is flying from ${origin} to ${destination} with ${passenger} passengers`);
  }
}

export class Airplane implements FlyingTransport {
  fly(origin: string, destination: string, passenger: number) {
    console.log(`Airplane is flying from ${origin} to ${destination} with ${passenger} passengers`);
  }
}

export class Drone implements FlyingTransport {
  fly(origin: string, destination: string, passenger: number) {
    console.log(`Drone is flying from ${origin} to ${destination} with ${passenger} passengers`);
  }
}


const airport = new Airport();

airport.accept(new Helicopter());
airport.accept(new Airplane());
airport.accept(new Drone());
