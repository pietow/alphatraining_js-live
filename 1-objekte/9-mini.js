const user = {
  username: "anna_w",
  email: "anna@example.com",
  role: "admin",
  password: "secret123"
};

const settings = {
  theme: "dark",
  language: "de"
};

// 1. Gib alle Keys von user aus
console.log(Object.keys(user));
// ["username", "email", "role", "password"]
// 2. Gib alle Values von user aus
console.log(Object.values(user));
// ["anna_w", "anna@example.com", "admin", "secret123"]
// 3. Erstelle ein neues Objekt "profile" das
//    user und settings zusammenführt –
//    OHNE password (das soll nicht im Profil landen)

const { password, ...safeUser } = user //{password, role, username, email}
// const { password,  email, role, username} = user
// console.log({email, role, username})

console.log('**************')
console.log(password)
console.log(typeof safeUser)
console.log('**************')

const profile2 = Object.assign({}, user, settings)
delete profile2.password
console.log(profile2)
// 4. Serialisiere profile als JSON-String
json = JSON.stringify(profile2);
console.log(json);
// 5. Parse den JSON-String zurück zu einem Objekt
//    und überprüfe ob theme noch vorhanden ist
parsed = JSON.parse(json);
console.log(parsed);
// Bonusfrage:
// Was passiert wenn du user direkt serialisierst?
// Ist password im JSON-String?
// Was sagt uns das über JSON-Serialisierung und Sicherheit?

const leaked = JSON.stringify(user);
console.log(leaked);