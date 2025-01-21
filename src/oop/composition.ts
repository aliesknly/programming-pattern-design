//Composition
class Room {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log(`Room: ${this.name}`);
  }
}

class House {
  address: string;
  roomList: Room[];

  constructor(address: string) {
    this.address = address;
    this.roomList = [];
  }

  addRoom(roomName: string) {
    // the room is created inside the house and is destroyed when the house is destroyed
    const room = new Room(roomName);
    this.roomList.push(room);
  }

  showHouse() {
    console.log(`House at ${this.address} has room:`);
    this.roomList.forEach((room: Room) => {
      room.describe();
    });
  }
}

//create House
const house = new House('Jl. Kaliurang KM 5');

//add room to house
house.addRoom('Living Room');
house.addRoom('Bed Room');
house.addRoom('Kitchen');

//show all room in house
house.showHouse();
