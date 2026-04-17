const person = {
  name: "Anna",
  age: 28
};

console.log(person.name) // Dot Notation
console.log(person["name"]) // Bracket Notation

const key = "age"
console.log(person[key])

person.name = "Elly"
console.log(person["name"]) // Bracket Notation

person.city = "Wien"

console.log(person)

console.log(person.job) //?
// console.log(person.job.title) // ist wie console.log(undefined.title)

person.job = {title: 'Dev'}

if (person.job) {
    console.log(person.job.title) // "Dev"
}

const job_title = person && person.job && person.job.title 

// Modern (ES2020) mit ioptional Chaining

const job_title2 = person?.job?.title 

console.log('job: ', job_title2)


delete person.name

console.log(person)

