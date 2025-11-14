//readonly
class User{
    constructor(public readonly name: string){
        this.name = name
    }

    changeName(){
        //this.name = "AC" //This line gives us error because name is set to readonly
    }
}
let user1 = new User("VC")

//without getter and setter
class User1{
    constructor(public name: string, public age: number){
        this.name = name
        this.age = age
    }

    getName(){
        return this.name
    }

    setName(val: string){
        this.name = val
    }
}

let u1 = new User1("VC", 15)
console.log(u1.getName()); //VC
u1.setName("VAC")
console.log(u1); //User1 { name: 'VAC', age: 15 } because we setName as "VAC"

//Using getter and setter
class DummyUser{
    constructor(public name: string, public age: number){
        this.name = name
        this.age = age
    }

    get Name(){
        return this.name
    }

    get Age(){
        return this.age
    }

    set Name(val: string){
        this.name = val
    }
}

let d1 = new DummyUser("Sparrow", 10)
console.log(d1.name);
console.log(d1.age);
console.log(d1.Name);
let hold = d1.Name = "jack" //In setter we don't use paranthesis even in passing args, In getter we don't need args
console.log(hold);


//Abstract classes
abstract class Animal{
    constructor(protected name: string, public age: number) {}

    abstract makeSound(): void //every subClass should use this method because of abstract keyword
    
    canMove(): void{
        console.log(`${this.name} can move because it's age is ${this.age}`);
    } //not mandatory for every subClass to used it because it's not abstract function
}

class Tiger extends Animal{
    makeSound(): void {
        console.log(`Usually ${this.name} makes a sound like Roar`);
    }
}

class Deer extends Animal{
    makeSound(): void {
        console.log(`Usually ${this.name} makes sound like oxes`); 
    }
}

let tgr1 = new Tiger("Tiger", 7)
let dr1 = new Tiger("Deer", 5)

console.log(tgr1.makeSound())
console.log(tgr1.canMove())
console.log(dr1.makeSound())

//Fuctions
function demo(str: string, cb:(arg: string) => void): void{
    cb("vc")
}
demo("vc", function(arg: string){
    console.log(`Hello, ${arg}`);
})

//Method overriding
class Animals{
    makeSound(): void{
        console.log("Generic sound");
    }
}

class Cat extends Animals{
    makeSound(): void{
        console.log("Cat sound");
    }
}

class Dog extends Animals{
    makeSound(): void{
        console.log("Dog sound");
    }
}
let a1 = new Animals()
let c2 = new Cat()
let d3 = new Dog()
a1.makeSound() 
c2.makeSound() //The parent function got override
d3.makeSound() //The parent function got override


//Method overloading
class Calculator{
    add(a: number, b: number): number
    add(a: string, b: string): string

    add(a: any, b: any): any{
        return a+b
    } 
}
let calc = new Calculator()
console.log(calc.add(5,4))
console.log(calc.add("v","c"))
