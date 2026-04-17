## Übung: Fahrzeugverwaltung

Baue ein kleines System zur Verwaltung von Fahrzeugen. Die Aufgabe führt dich durch alle Konzepte – von der Rohform bis zur modernen Klasse.

---

### Stufe 1 – Factory-Funktion

Erstelle eine Factory-Funktion `createFahrzeug(marke, ps, typ)` mit:
- Eigene Eigenschaften: `marke`, `ps`, `typ`
- Methode `beschreiben()` → gibt z.B. `"BMW (PKW) – 200 PS"` zurück
- Methode `istSchnell()` → gibt `true` zurück wenn `ps > 150`

```js
// Erwartetes Verhalten:
const f = createFahrzeug("BMW", 200, "PKW");
f.beschreiben() // => "BMW (PKW) – 200 PS"
f.istSchnell()  // => true
```

---

### Stufe 2 – Konstruktorfunktion

Schreibe dasselbe als Konstruktorfunktion `Fahrzeug()`:
- Methoden müssen auf `Fahrzeug.prototype` liegen – nicht im Konstruktor
- Überprüfe mit `instanceof` und `hasOwnProperty()`

```js
// Erwartetes Verhalten:
const f = new Fahrzeug("BMW", 200, "PKW");
f instanceof Fahrzeug              // => true
f.hasOwnProperty("marke")          // => true
f.hasOwnProperty("beschreiben")    // => false – geerbt!
```

---

### Stufe 3 – `class`-Syntax

Schreibe `Fahrzeug` als `class`:
- `constructor` für Initialisierung


- Statische Methode `Fahrzeug.vergleiche(a, b)` → gibt das stärkere Fahrzeug zurück

```js
// Erwartetes Verhalten:
const a = new Fahrzeug("BMW", 200, "PKW");
const b = new Fahrzeug("VW", 120, "PKW");

a.leistung          // => 200


Fahrzeug.vergleiche(a, b) // => a
```

---

### Stufe 4 – Subklasse

Erstelle eine Subklasse `Elektroauto extends Fahrzeug`:
- Zusätzliche Eigenschaft: `reichweite` (in km)
- Überschreibe `beschreiben()` → gibt z.B. `"Tesla (Elektro) – 300 PS – 500km Reichweite"` zurück
- Neue Methode `ladezeit(km)` → gibt zurück wie viele Stunden Laden nötig sind (Formel: `km / reichweite * 2`)
- `super()` muss korrekt aufgerufen werden

```js
// Erwartetes Verhalten:
const e = new Elektroauto("Tesla", 300, 500);
e instanceof Elektroauto  // => true
e instanceof Fahrzeug     // => true – Prototypenkette!
e.beschreiben()           // => "Tesla (Elektro) – 300 PS – 500km Reichweite"
e.ladezeit(250)           // => 1 Stunde
Fahrzeug.anzahl           // => 3 – Elektroauto zählt mit!
```

---

### Stufe 5 – Prototypenkette direkt erkunden

Beantworte diese Fragen mit Code:

```js
// 1. Was ist der Prototyp von e?
// 2. Was ist der Prototyp des Prototyps von e?
// 3. Liegt beschreiben() auf e selbst oder geerbt?
// 4. Liegt ladezeit() auf e selbst oder geerbt?
// 5. Was gibt Object.getPrototypeOf(Elektroauto) zurück?
//    (Hinweis: nicht .prototype – sondern die Funktion selbst)
```

---