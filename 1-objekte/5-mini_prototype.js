// TEIL 1: Was gibt dieser Code aus?
// Beantworte OHNE ausprobieren – erkläre deine Antwort.

const base = {
  type: "base",
  describe() {
    return `Ich bin: ${this.type}`;
  }
};

const child = Object.create(base);
child.type = "child";

const grandchild = Object.create(child);

console.log(grandchild.type);         // child
console.log(grandchild.describe());   // Ich bin: child

console.log('*************************')
console.log('child object: ', child)
console.log('Prototyp-object', Object.getPrototypeOf(child))
delete child.type;
console.log('*************************')
console.log('child object: ', child)
console.log('Prototyp-object', Object.getPrototypeOf(child))
console.log('*************************')

console.log(grandchild.type);         // base
console.log(grandchild.describe());   // Ich bin: base