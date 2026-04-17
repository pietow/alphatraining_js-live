// TEIL 2: Baue selbst

// Erstelle ein Objekt "vehicleProto" mit:
//   - einer Methode ``describe()`` die ausgibt:
//     "[brand] fährt mit [speed] km/h"
//   - einer Methode ``accelerate(n)`` die speed um n erhöht

const vehicleProto = {
    describe() {
        console.log(`[${this.brand}] fährt mit [${this.speed}] km/h`)
    },
    accelerate(n) {
        this.speed += n //this.speed = this.speed + n
    }
}

// Erstelle damit zwei Fahrzeuge:
//   - bike  → brand: "Trek",  speed: 0
const bike = Object.create(vehicleProto)
bike.brand = "Trek"
bike.speed = 0
//   - car   → brand: "BMW",   speed: 0
const car = Object.create(vehicleProto)
car.brand = "Trek"
car.speed = 0

// Teste:
bike.accelerate(25)
car.accelerate(120)
bike.describe()
car.describe()

// Überprüfe:
//   Liegt describe() auf bike oder auf vehicleProto?
//   Beweis mit hasOwnProperty()

console.log(bike.hasOwnProperty("describe"))
console.log(bike.hasOwnProperty("brand"))
console.log(Object.getPrototypeOf(bike))