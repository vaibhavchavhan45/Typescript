//Topic Generics : E.g. 1
function liveDemo<T>(a: T, b: string){
    console.log(a);
    console.log(b);
}
liveDemo<string>("v", "c")

//E.g. 2
function log<T>(val: T){
    console.log(val);
}
log<number>(12)

//E.g. 3
interface Student<T>{
    name: string,
    age: number,
    rollNo: T
}
function implementStudents(obj: Student<number>){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.rollNo);
}
implementStudents({
    name: "VC",
    age: 20,
    rollNo: 14
})

//E.g. 4
class Millenial<T>{
    constructor(public spanStart: T, public speciality: string) {}
}

let m1 = new Millenial<number>(1985, "Retro")
let m2 = new Millenial<number>(1985, "Code")
console.log(m1, m2);

//E.g. 5
function AlphaX<T>(a: T, b: T): T{
    return a //OR return b is acceptable because a and b both are treated as string
    //return "Code SbS" not acceptible because TS consider plain string as string literals
}
console.log(AlphaX<string>("Str", "CAC"))

//Correct version of E.g.5
function validAlphaX<T>(a: T, b: T): T{
    return "RazorPay" as T
}
console.log(validAlphaX<string>("Cal.com", "dub.sh"));

//Second method of correct version of E.g.5
function validAlphaX2<T>(a: T, b: T): T{
    return<T> "RazorPe"
}
console.log(validAlphaX2<string>("Calcom", "dubsh"));


