class User {
    id: Integer
    username: String
    address: String
    age: Integer
    signUp()
    logIn()
    rentScooter()
    returnScooter()
    payForService()
    
} 

class Scooter {
    id: INTEGER
    location: STRING
    batterylevel: boolean
    batteryLife()
    conditionOfScooter()
    startRide()
    endRide()
    amountRode()
}

class Technician {
    id: INTEGER
    name: STRING
    location: String
    checksLog()
    completesRepair()
    returnsToChargingStation()
}