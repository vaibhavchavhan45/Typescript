interface User{
    firstName : string
    lastName : string
}

interface User{
    age : number
    gender ?: string
}
 
//function(Property of both interfaces got merged, not override)
function userAdmin(obj : User){
    console.log(obj.gender); //undefined
    
    console.log(obj.age);

    console.log(obj.lastName);
}

userAdmin({
    firstName : "V",
    lastName : "C",
    age : 20
})