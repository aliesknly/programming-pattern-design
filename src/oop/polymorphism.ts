import { Animal } from "./abstraction.ts"

class Dog extends Animal {
  makeSound() {
    console.log('Woof')
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow')
  }
}

const animals: Animal[] = [new Dog(), new Cat()]

animals.forEach((animal: Animal) => {
  animal.makeSound()
});
