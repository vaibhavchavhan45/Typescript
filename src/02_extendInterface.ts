interface User{
    name : string
    email : string
    age : number
}

interface Admin extends User{
    admin : string
    password : string
}

//main function
function userAdminFunction(obj : Admin) {
    console.log(obj.name);

    console.log(obj.admin);
}

userAdminFunction({
    name : "VC",
    email : "example@gmail.com",
    admin : "admin",
    password : "454545",
    age : 20
})