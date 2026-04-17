const person = {
  name: "Anna",
  age: 28
};

console.log(Object.keys(person)) // [name, age]
console.log(Object.values(person)) // ["Anna", 28]
console.log(Object.entries(person)) // [["name","Anna"], ["age",28]]


for (const key in person) {
    console.log(key)
}
console.log('*******************')

const anna = Object.create(person)
anna.username = 'ann'

for (const key in anna) {
    console.log(key)
}
console.log('*******************')
for (const key of Object.keys(anna)) {
    console.log(key)
}
console.log(Object.keys(anna))