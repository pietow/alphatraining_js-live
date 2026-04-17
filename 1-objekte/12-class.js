class Range {
    constructor(from, to) {
        this.from = from
        this.to = to
    }

    includes(x) { return this.from <= x && x <= this.to}
    toString() { return `(${this.from}...${this.to})`}
}

let r = new Range(1, 3)
console.log(r.includes(2))
console.log(r.toString())

console.log(typeof Range);
console.log(Object.getPrototypeOf(r) === Range.prototype)

console.log(r.from, r.to)

```
