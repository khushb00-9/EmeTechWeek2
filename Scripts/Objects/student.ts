module objects {
  export class Student extends objects.Person {
    // PRIVATE INSTANCE VARIABLES
    private _studentID: string;

    // PUBLIC PROPERTIES
    get studentID(): string {
      return this._studentID;
    }

    set studentID(newStudentID: string) {
      this._studentID = newStudentID;
    }

    constructor(age: number, name: string, studentID: string) {
      super(age, name);

      this.studentID = studentID;
    }

    // PRIVATE METHODS

    // PUBLIC METHODS
    public studies(): void {
      console.log(
        `${this.name} with studentID: ${this.studentID} is studying.`
      );
    }
  }
}
