//types : somewhat similar like interface with some extra stuffs
type User = {
    firstName : string
    lastname : string
    age : number
    isLogin : boolean
}

//Actual code starts
//1.Union
type numberOrString = number | string
function doSomething(id : numberOrString){
    console.log(id); //5
    console.log(id); //vaibhav
}
doSomething(5)
doSomething("vaibhav")

//2.Intersection
type Student = {
    firstName : string
    lastName : string
}

type Teacher = {
    id : number
    department : string
}

type Principal = Student & Teacher

const principal : Principal = {
    firstName : "A",
    lastName : "B",
    id : 1,
    department : "Head"
}

console.log(principal);
console.log(principal.id);


//Interface and Type
interface A{
    name : string
    id : number
}

type B = {
    isLogin : boolean
}
 
type intersectionOfTypeAndInterface = A & B
let combine : intersectionOfTypeAndInterface = {
    name : "demo",
    id : 1,
    isLogin : false
}
console.log(combine);

//Difference between Interface and Type
//In types we cant use extend keyword(02_extendsInterface) but in Interface we can use it
//In types we do intersection and Unions but can't do it in Interface



