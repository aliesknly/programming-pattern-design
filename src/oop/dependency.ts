//STRONG DEPENDENCY
class CurseMaterial1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  useMaterial() {
    console.log(`Using material ${this.name}`);
  }
}

class Professor1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  //use class CurseMaterial1 is a strong dependency
  useMaterial(material: CurseMaterial1) {
    console.log(`${this.name} is using material`);
    material.useMaterial();
  }
}

//use material 1
const material1 = new CurseMaterial1('Advanced Programming');
const professor1 = new Professor1('John Doe');

professor1.useMaterial(material1);


//WEAK DEPENDENCY
interface IMaterial {
  name: string;
  useMaterial: () => void;
}

class CurseMaterial implements IMaterial {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  useMaterial() {
    console.log(`Using material ${this.name}`);
  }
}

class Professor {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  //use interface IMaterial is a weak dependency
  useMaterial(material: IMaterial) {
    console.log(`${this.name} is using material`);
    material.useMaterial();
  }
}

// use material
const material = new CurseMaterial('Advanced Mathematics');
const professor = new Professor('Ian Smith');

professor.useMaterial(material)
