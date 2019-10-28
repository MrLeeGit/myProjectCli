class Person{
    constructor (name){
        this.name = name;
    }
    getName() {
        alert(this.name)
    }
}

let person1 = new Person('Lee');

person1.getName();
