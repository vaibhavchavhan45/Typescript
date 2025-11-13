class Car{
    name = "ambassador"
    speciality = "vintage look"
    price = 2563999
}
let car1 = new Car()
let car2 = new Car()

//classes and constructor
class humanMaker{
    age = 0;
    constructor(name:string){

    }
}
new humanMaker("vc")

//e.g. 2
class bottleMaker{
    constructor(lot: string, quantity:number, brandName:string = "Milton"){

    }
}
new bottleMaker("firstLot", 200)

//e.g. 3
class motorCycles{
    constructor(name: string, price: number, engine: string, brandName:string ="Bajaj"){

    }
}

new motorCycles("Enfield", 200000, "180cc", "Bajaj Motors")
//In constructor bydefault company name is bajaj now, as we provided value using object then "bajaj" name will be overridden by "Bajaj Motors"

//e.g. 4
class Music{
    constructor(public song: string, public artist: string, public length: number, public free: boolean){

    }
}
new Music("Roar", "K. Perry", 35000, true)
new Music("Millionaire", "H. Singh", 25000, false)

//OR
// class MusicCopy{
//     //You can write like this but make sure that this.name = name like properties exist in constructor's body
//     public song;
//     public artist;
//     public length;
//     public free;
//     constructor(song: string, artist: string, length: number, free: boolean){

//     }
// }
// new MusicCopy("Alone", "A. Walker", 120000, true)
