const personProto = {
    greet() {
        console.log(`Hi, ich bin ${this.name}`);
    },
    birthday() {
        this.age++
        console.log(`${this.name} ist jetzt ${this.age}`)
    }
}

const anna = Object.create(personProto)
anna.name = "Anna"
anna.age = 28

const ben = Object.create(personProto)
ben.name = "Ben"
ben.age = 32

anna.greet()
anna.birthday()

ben.greet()

console.log(anna)

console.log(anna.hasOwnProperty("name"))
console.log(anna.hasOwnProperty("greet"))
console.log(Object.getPrototypeOf(anna))
console.log(anna.__proto__)

anna.greet = function() {
    console.log(`Ich bin Anna und überschreibe den Prototypen!`)
}

anna.greet()
console.log(anna)