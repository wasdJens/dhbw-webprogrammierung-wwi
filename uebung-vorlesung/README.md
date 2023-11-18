Im folgenden Ordner finden Sie die Lösungen zur Übung der Vorlesung (Folie 360).

Sie finden einmal die Lösung vom A Kurs und einmal die vom B Kurs. Die Lösungen sind gemeinsam entstanden.

## Übungsaufgabe

Problemstellung: Erstellen Sie einen Webserver mit NodeJS und Express welcher folgende Endpunkte samt Logik implementiert:
- Endpunkt 1: Erstellen von einer Maschine. Eine Maschine besitzt:
  - Seriennummer, Name, Standort, An/Aus Zustand und beliebige Sensorik Daten
- Endpunkt 2: Alle Maschinen ausgeben
- Endpunkt 3: Bearbeiten von einer Maschine. Es soll nur die Seriennummer editierbar sein
- Endpunkt 4: Löschen von einer einzelnen Maschine

Verwenden Sie die vorgestellten Konzepte. Ihre Schnittstelle kann komplett JSON basiert sein. 
- Tipp: server.use(express.json())

Bonus: Endpunkt 5: Eine bestimmte Maschine können Sie an oder ausschalten

