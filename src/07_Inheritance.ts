//Inheritance
/*
access modifiers : public, private, protected
public : can be access in that class outside class or anywhere(global/bydefault)
private : can be access in that class only not outside of that class
protected : can be access in that class and in the class also which inherited parent class
*/

class CarManufacturer{
    constructor(public name: string){
        this.name = name
    }

    getName(){
        console.log(this.name);
    }
}

class ElectricCarManufacturer extends CarManufacturer{
    constructor(name: string, public color: string){
        super(name)
    }

    getColor(){
        console.log(this.color);
    }

    getName(){
        console.log("The name of Car is "+ this.name);
    }
}

let car1 = new ElectricCarManufacturer("TATA", "White")
car1.getColor()
car1.getName()


//E.g. 2
class Bottle{
    protected name: string = "Milton"
}

class MetalBottle extends Bottle{
    public material: string = "metal"
    //constructor not defined means TS calls super() automatically

    changeName(){
        this.name = "Cello"
    }
}

let b1 = new MetalBottle()
console.log(b1); //MetalBottle { name: 'Milton', material: 'metal' }
b1.changeName()
console.log(b1); //MetalBottle { name: 'Cello', material: 'metal' }

/*
Program : There is a class named as CarManufacturer(parent class) and a another class ElectricCarManufacturer
inherit the parent class means the properties of parent are also present in a child
The function getName() is defined in both parent and child but at the time of printing the func from child 
class runs because it override the func in parent component
If let say getName() func in child doesn't exist then we get the output as per the definition of func in parent
*/