class scooterApp{
    constructor(rider, location){
        this.rider = rider
        this.location = location
        
    }
        rent(person) {
            this.rider = person
        }
}

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    let nate = new User('Nate', "natezeru@gmail.com")
    let scooter = new Scooter('Dallas')
    scooter.rent(nate)
}