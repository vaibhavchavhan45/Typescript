interface User{
    name : string,
    email : string,
    password : string,
    age : number,
    gender ?: string
}

function userInfo(obj : User){
    let nameOfUser = obj.name
    console.log(nameOfUser);

    let genderOfUser = obj.gender
    console.log(genderOfUser);
}

userInfo({
    name : "vaibhav",
    email : "vc@gmail.com",
    password : "vc@1",
    age : 18,
    gender : "male"
})
