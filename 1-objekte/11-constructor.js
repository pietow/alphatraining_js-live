function Range(from,to) {
    this.from = from
    this.to = to
}

// Prototypname ist VORGESCHRIEBEN – muss .prototype heißen
Range.prototype = {
    includes(x) { return this.from <= x && x <= this.to},
    toString() { return `(${this.from}...${this.to})`}
}

let r = new Range(1, 3)
console.log(r.includes(2))
console.log(r.toString())