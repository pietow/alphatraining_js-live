function range(from, to) {
    let r = Object.create(range.methods)
    r.from = from
    r.to = to
    return r
}

range.methods = {
    includes(x) { return this.from <= x && x <= this.to},
    toString() { return `(${this.from}...${this.to})`}
}

let r = range(1, 3)
let r2 = range(1, 10)
console.log(r.includes(2))
console.log(r.toString())


console.log(r.hasOwnProperty("from")) //true 
console.log(r.hasOwnProperty("includes")) // false?

console.log(Object.getPrototypeOf(r)) // range.methods object