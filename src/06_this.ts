class Music{
    constructor(public song: string, public artist: string, public free: boolean){
        this.song = song
        this.artist = artist
        this.free = free
    }
}

let a = new Music("Unstoppable", "Sia", true)
//What happens behind the scene
//As we do public song: string so, here two works are getting done
//1.Initialising a variable in class like :
// class Music{
//     public song: string;
// }
//2.Parameter to a constructor
//So, this.name is referring to variable in a class and second part after value is argument for the constructor



//OR (another method of writing the same code)
class Film{
    public film;
    public director;
    public free;
    constructor(film: string, director: string, free: boolean){
        this.film = film
        this.director = director
        this.free = free
    }
}

let film1 = new Film("GOT", "unknown", false)