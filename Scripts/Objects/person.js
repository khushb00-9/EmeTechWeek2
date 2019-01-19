var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this.age = age;
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "age", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.saysHello = function () {
            console.log(this.name + " says Hello!");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map