//AGREGATION
class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log(`Department ${this.name}`);
  }
}

class University {
  name: string
  deparmentList: Department[]

  constructor(name: string) {
    this.name = name
    this.deparmentList = []
  }

  addDepartment(department: Department) {
    this.deparmentList.push(department)
  }

  showAllDepartment() {
    console.log(`University ${this.name} has department:`)
    this.deparmentList.forEach((department: Department) => {
      department.describe()
    })
  }
}

//create department
//the department is created outside the university and keeps alive even if the university is destroyed
const science = new Department('Science')
const math = new Department('Math')

//create University
const university = new University('Universitas Indonesia')

//add department to university
university.addDepartment(science)
university.addDepartment(math)

//show all department
university.showAllDepartment()
