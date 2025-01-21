//How to use Heritage in TypeScript
import { Animal } from "./abstraction.ts"

interface FourLegged {
  run(): void
}

interface OxygenBreathing {
  breath(): void
}

class Cat extends Animal implements FourLegged, OxygenBreathing {
  makeSound() {
    console.log('Meow')
  }

  run() {
    console.log('Run')
  }

  breath() {
    console.log('Breath')
  }
}

const myCat = new Cat()

myCat.makeSound() // Output: Meow
myCat.run() // Output: Run
myCat.breath() // Output: Breath

