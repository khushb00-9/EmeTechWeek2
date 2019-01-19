module objects {
    export interface Greeter {
        saysHello(): void;
    }

    export abstract class Person implements Greeter {
        // PRIVATE INSTANCE VARIABLES
        private _age: number;
        private _name: string;

        // PUBLIC PROPERTIES
        get age(): number {
            return this._age;
        }

        set age(newAge: number) {
            this._age = newAge;
        }

        get name(): string {
            return this._name;
        }

        set name(newName: string) {
            this._name = newName;
        }

        constructor(age: number, name: string) {
            this.age = age;
            this.name = name;
        }

        public saysHello(): void {
            console.log(`${this.name} says Hello!`);
        }
    }

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
            console.log(`${this.name} with studentID: ${this.studentID} is studying.`)
        }
    }

}
// let person = new objects.Person(22, "Khushboo");

// let person: objects.Person;

// person = new objects.Person(22, "Khushboo");

// person.saysHello();


// IIFE 

(function(){

    function start(){
    const student: objects.Student = new objects.Student(20, "Jayu", "100");
    student.saysHello;
    student.studies;
    }

    window.addEventListener("load",start);
})();
