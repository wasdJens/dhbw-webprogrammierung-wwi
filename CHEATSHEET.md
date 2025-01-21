# Cheatsheet

## Minimales Fastify Projekt:

Referenzen:

- Folien: 368
- Erklärung: [Erläuterung](https://github.com/wasdJens/dont-panic-web-edition/blob/main/how-to-guides/fastify/01-first-steps.md),
- Meilensteine: 03-Milestone, 04-Milestone, 05-Milestone

**Installation**

```
npm install fastify
npm install @fastify/cors
```

Anschließend die `package.json` öffnen und `type` auf `module` ändern

**Server Code**

Erstellen von einer `server.js` Datei und kopieren von folgendem Inhalt:

```js
// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

// CORS integration for Frontend Development
fastify.register(cors, {
  origin: (origin, callback) => {
    const allowedOrigins = ["http://localhost:3000", "http://localhost:4200"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

// Run the server!
try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
```

**Starten**

Konsole öffnen und `node --watch server.js` eingeben. Server startet und aktualisiert sich selbständig bei Änderungen

## Endpunkte in Fastify definieren

Referenzen:

- Folien: 373
- Meilensteine: 03-Milestone, 04-Milestone, 05-Milestone

Aufbau: `fastify.METHOD(PATH, HANDLER)`

- `METHOD` ist die HTTP Methode
- `PATH` ist der Pfad der Route (Adresse wo Sie die Ressource finden)
- `HANDLER` ist die Funktion die ausgeführt wird wenn die Route aufgerufen wird

**Daten abfragen:**

```js
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});
```

**Daten übermitteln:**

- POST wenn Sie eine neue Ressource anlegen möchten ODER eine Operation ausführen möchten
- PUT wenn Sie eine gesamte Ressource aktualisieren möchten
- PATCH wenn Sie nur Teile einer Ressource aktualisieren möchten

```js
fastify.post("/", (request, reply) => {
  const payload = request.body;
  reply.send({ data: payload });
});
```

```js
fastify.put("/", (request, reply) => {
  const payload = request.body;
  reply.send({ data: payload });
});
```

```js
fastify.patch("/", (request, reply) => {
  const payload = request.body;
  reply.send({ data: payload });
});
```

**Daten löschen:**

```js
fastify.delete("/", (request, reply) => {
  reply.send({ data: "deleted" });
});
```

**Routen Parameter:**

- Parameter können mit `:<name>` in der Route definiert werden
- Parameter werden immer als String übergeben

```js
fastify.get("/:id", (request, reply) => {
  const { id } = request.params;
  reply.send({ id });
});
```

## Datenbank Anbindung

Referenzen:

- Folien: 466
- Meilensteine: 05-Milestone

**Installation**

```
npm install better-sqlite3
npm install fastify-plugin
```

**Code Setup**

- Erstellen Sie sich einen Ordner `database`
- Erstellen Sie sich eine Datei `<name>.db`
- Erstellen Sie eine `database.js` Datei und kopieren Sie folgenden Inhalt und ersetzen Sie: `<name>`, `TABLE_NAME`
- Definiren Sie sich ein SQL Statement um eine Tabelle zu erstellen

```js
import fp from "fastify-plugin";
import Database from "better-sqlite3";

// Defines where sqlite will store the database on the given path on the filesystem
const filePath = "./database/<name>.db";

// Defines the SQL statement to create the beer table
const createTableStatement = `
  CREATE TABLE IF NOT EXISTS <TABLE_NAME> ();
`;

/**
 * Adds a plugin to the fastify instance and creates the database instance.
 * You only need to call this once in the main register flow (server.js)
 * @param {object} fastify - The fastify instance
 * @param {object} options - The fastify plugin options
 * @param {function} next - The fastify next callback
 */
function dbConnector(fastify, options, next) {
  // Creates a new database instance
  const db = new Database(filePath);

  // Creates the beer table if it does not exist
  db.exec(createTableStatement);

  // Adds the database instance to the fastify instance
  fastify.decorate("db", db);

  // Closes the database connection when the server is closed
  fastify.addHook("onClose", (fastify, done) => {
    db.close();
    done();
  });

  next();
}

/**
 * Exposes the plugin to fastify using the `fp` plugin helper
 */
export default fp(dbConnector);
```

- Öffnen Sie ihre `server.js` und fügen Sie folgenden Code hinzu:

```js
import dbConnector from "./database/database.js";

fastify.register(dbConnector);
```

**Verwendung**

- Am `fastify` Objekt befindet sich jetzt eine `db` property mit der Sie Datenbank Befehle ausführen können
- Erstellen Sie sich immer ein Prepared SQL Statement

```js
const statement = fastify.db.prepare(
  `SELECT * FROM beers ORDER BY amount DESC LIMIT 1`
);

try {
  const beer = statement.get();
  return beer;
} catch (error) {
  fastify.log.error(error);
  return null;
}
```

## Kommunikation Frontend <-> Backend

Referenzen:

- Folien: 634, 726
- Meilensteine: 05-Milestone, 01-nextjs, 02-angular
-

- Die gesamte Kommunikation zwischen ihrem Server und ihrer Anwendung findet über HTTP statt
- Der Client ist der aktive Part und "fragt" beim Server nach Informationen (Daten)
- Über die Route können Sie einen Endpunkt vom Server ansprechen und über die HTTP Methode definieren Sie die Art der Anfrage
- In JavaScript können Sie mit der `fetch` API HTTP Anfragen definieren und senden

Für das nachfolgende Beispiel nutzen wir den `02-http-explorer` aus `30-Miscellaneous` den Code finden Sie [hier](./30-miscellaneous/02-http-explorer/server.js) vergessen Sie nicht `npm install` einmal auszuführen

**Client Code (React)**

- Definieren Sie sich eine Funktion die eine Anfrage an den Server sendet
- Am besten in einer Datei `api.ts` und exportieren Sie alle Funktionen

```js
const BASE_URL = "http://localhost:8080";

const ping = async () => {
  const request = await fetch(`${BASE_URL}/ping`, {
    method: "POST",
  });
  const response = await request.json();

  console.log("Server Response: ", response);
};

ping();
```

- Rufen Sie ihre API Funktion als Teil von einer React Component auf
- Dafür definieren Sie sich in ihrer React Component eine Funktion die eine Anfrage an die API sendet und bspw. die Antwort über eine `setState` zurück schreibt:

```tsx
const handleDrink = async () => {
  try {
    const apiResponse = await drinkBeer(beer);
    setBeer(() => ({ ...apiResponse.beer }));
  } catch (error) {
    console.error("Error drinking beer:", error);
  }
};

return <BeerMug rating={beer.rating} onClick={handleDrink}></BeerMug>;
```

**Client Code (Angular)**

- Erstellen Sie sich einen API service `ng g service shared/api`
- Definieren Sie sich die einzelnen Anfragen als Funktionen und verwenden Sie den `HttpClient` um Anfragen zu senden

```ts
@Injectable({
  providedIn: "root",
})
export class BeerApiService {
  private readonly BASE_BEER_URL = "http://localhost:8080/beer";

  constructor(private http: HttpClient) {}

  public drinkBeer(beer: any): Observable<any> {
    return this.http.post(`${this.BASE_BEER_URL}/${beer.id}/drink`, beer);
  }
}
```

- Rufen Sie ihre API Funktion als Teil von einer Angular Component auf
- Wichtig: Sie müssen für HTTP Anfragen immer `.subscribe` am Ende ergänzen (Observables)

```ts
@Component({
  selector: "app-beer-card",
  standalone: true,
  imports: [CardComponent, BeerMugComponent, BeerRatingSliderComponent],
  templateUrl: "./beer-card.component.html",
  styleUrl: "./beer-card.component.css",
})
export class BeerCardComponent {
  @Input({ required: true }) beer!: any;

  constructor(private beerApiService: BeerApiService) {}

  public handleDrink() {
    this.beerApiService.drinkBeer(this.beer).subscribe((response) => {
      this.beer = response.beer;
    });
  }
}
```

## Abbildung von Daten

- Definieren Sie sich immer eine Repräsentation von ihren Daten indem Sie in JavaScript ein Objekt erstellen
- Definieren Sie sich Funktionen, welche Daten manipulieren kann (Übergeben Sie das alte Objekt und die neuen Werte)
- Achten Sie darauf, dass Objekte in JavaScript `pass by reference` sind und Sie somit das Objekt direkt manipulieren können
- Wenn Sie eine Kopie erstellen möchten können Sie `...` (Spread Operator) verwenden

**Kombination mit Backend**

- Definieren Sie sich eine Route welche es Clients erlaubt Daten abzufragen und ggf. zu manipulieren
- Innerhalb der Route nutzen Sie die zuvor definierten Funktionen um die Daten zu manipulieren
- Sie können jederzeit die Repräsentation als Objekt einfach zurückgeben in Fastify (wird automatisch als JSON umgewandelt)
