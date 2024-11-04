# Websockets - Chat System

Eine Beispiel Implementierung wie man einen Chat implementieren kann. Verwendete Technologien sind Fastify, Websockets und Angular für die Client Applikation.

## Installation

Beide Ordner öffnen `chat-client` und `chat-server` und einmal:

```bash
npm install
```

in den jeweiligen Verzeichnissen ausführen.

## Starten

Der Server läuft unter Port 8080 und hört auf `/chat` auf eine Websocket Verbindung. Das Nachrichten Format ist JSON und hat folgendes Format:

```ts
interface ServerMessage {
  type: string;
  data: string | number;
}
```

Server starten:

```bash
npm run start
```

Client starten:

```bash
npm run start
```

Anschließend kann man unter `http://localhost:4200` den Chat öffnen und Nachrichten senden.