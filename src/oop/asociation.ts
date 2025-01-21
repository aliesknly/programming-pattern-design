//Associations
class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getKnowledge() {
    return this.name;
  }
}

class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  remember(knowledge: string) {
    console.log(`${this.name} remember ${knowledge}`);
  }
}

// Proffesor class has a strong association with Curse class,
// If we change the Curse class getKnowledge method, we need to change the Professor class teach method too
class Professor {
  student: Student;
  constructor(student: Student) {
    this.student = student;
  }

  teach(course: Course) {
    this.student.remember(course.getKnowledge());
  }
}

const course = new Course('Advanced Programming');
const student = new Student('John Doe');
const professor = new Professor(student);

professor.teach(course);
