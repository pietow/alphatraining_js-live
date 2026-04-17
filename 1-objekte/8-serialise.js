const person = {
  name: "Anna",
  age: 28,
  greet() { console.log("Hi"); }
};

// Objekt → String (z.B. für API, localStorage)

const json = JSON.stringify(person)
console.log(json)
console.log(typeof json)

const parsed = JSON.parse(json)
console.log(parsed)
console.log(typeof parsed)
