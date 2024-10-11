interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: 'True' | 'False';
  yearsOfExperience?: number;
  location: string;
  contract?: any;
  [propName: string]: any;
}

const teacher: Teacher = {
  firstName: 'Leonard',
  lastName: 'jembe',
  fullTimeEmployee: 'True',
  location: 'Kipawa',
  contract: 'yes',
}

console.log(teacher);

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export default class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({firstName, lastName}: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
