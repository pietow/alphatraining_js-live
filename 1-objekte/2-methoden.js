
// Lange Schreibweise, veraltet
const person = {
    name: "Anna", // String
    greet: function() {   // functionsobjekt
        console.log("Hi, ich bin " + this.name)
    }
}


// Kurzschreibweise (modern; seit ES6)

const person2 = {
    name: "Anna", // String
    greet() {   // functionsobjekt
        console.log(`Hi, ich bin ${this.name}`)
    }
}


person2.greet()