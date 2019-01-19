module objects {
  export abstract class Person {
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
}
