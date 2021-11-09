# Ihre Fragen & Antworten

> Wie spielen Frameworks mit HTML, CSS und Javascript zusammen?

Ein Frontend Framework bietet Ihnen die Möglichkeit mit Javascript leicht Webseiten zu entwickeln d.h. Konzepte aus HTML, Javascript und CSS werden hier häufig kombiniert. 

In Angular werden die einzelnen Konzepte streng getrennt d.h. es gibt Dateien für das HTML Template, CSS Klassen und die Javascript (Typescript) implementierung. In React wird HTML zusammen mit Javascript gemischt (JSX Syntax)

Generell gilt (Auch in Frameworks):

* Mit Javascript Dateien können Sie Logik deklarieren
  * Einen Endpunkt ansprechen
  * Über eine Liste iterieren
  * User Eingaben Speichern & Verarbeiten
* Mit HTML Dateien können Sie ihr Template beschreiben
  * Wie sieht ihre Webseite aus
  * Ausgeben von ihren Javascript Variablen
* Mit CSS Dateien können Sie ihr HTML "hübsch" machen
  * Klassen für Layouts
  * Farben anpassen etc.

> Ordner Strukturen (Backend & Frontend) 

Idealerweise trennen Sie backend und frontend Implementierungen d.h. Ihre Ordner Struktur sollte folgendermaßen aussehen

```
web-programmierung
|_ backend
  |_ express.js
  |_ package.json
|_ frontend 
  |_ angular.js
  |_ package.json
|_ docs 
```

> Benötigen Sie eine Datenbank? 

Explizit ist nicht die Rede von einer Datenbank aber Sie sollten ihre Daten "Konsistent" speichern. Es würden also auch lokale json Dateien ausreichen, welche gelesen werden. Ich empfehle Ihnen aber ganz **stark** mit einer Datenbank zu arbeiten. Sie bekommen damit auch die Möglichkeit Ihr Wissen aus den anderen Vorlesungen zu vertiefen. Wenn Sie ein fertiges Datenbank Setup benötigen können Sie sich auch das Beispiel in Docker aus den Github Beispielen anschauen und verwenden. Alternativ nutzen Sie https://www.sqlite.org/index.html z.B. 

> Docker Setup

Docker ist ein unglaublich mächtiges Tool und kann am Anfang überwältigend sein. Sie müssen Docker nicht im Detail verstehen oder installiert bekommen. Ich empfehle Ihnen aber mal die Anleitungen bei Docker sich anzuschauen und ein wenig Docker kennenlernen.m

* https://docs.docker.com/get-started/
* https://docs.docker.com/desktop/windows/install/
* https://docs.docker.com/compose/install/

Für die Installation müssen Sie vermutlich einige weitere Anpassungen an ihrem Computer vornehmen - Hierfür schauen Sie bitte einmal in die Dokumentation von Docker. 

> Wo definiere ich Schnittstellen? 

REST Schnittstellen werden auf Backend seite definiert (z.B. in Express). Das Frontend (Oder andere Clients) konsumieren dann diese Schnittstellen. 

> Müssen Sie Artikel in der Prüfungsleistung selbst anlegen? 

Ja - Mock Daten und Co können Sie komplett selbst definieren. Ihre Anwendung sollte aber später in der Lage sein über eine Schnittstelle (Und Frontend) Artikel anlegen zu können und mit den Daten zu arbeiten.

> Welche Datenbank Implementierungen können Sie verwenden? 

Das ist Ihnen komplett freigestellt - Sie sollten nur darauf achten, dass wir die Datenbank später auch installiert und aufgesetzt bekommen (D.h. schicken Sie bitte Dokumentation mit)

> Umfang der Prüfungsleistung

Die Prüfungsleistung wirkt auf den ersten Blick sehr "mächtig" oder "viel". Ich empfehle Ihnen aber setzen Sie sich mit dem Anwendungsfall einmal auseinander und versuchen Sie diesen einfach mal auf Papier festzuhalten bzw. zu beschreiben. 

Probieren Sie auch die Konzepte aus dem Umsetzungs Kapitel in der Vorlesung aus. D.h. definieren Sie sich erst einmal was sie abbilden müssen bevor Sie sich über Technik Gedanken machen.

Wenn Sie einen Einstiegspunkt brauchen oder eine passende Referenz empfehle ich Ihnen einfach mal die Vorlesungsbeispiele zur Express Beer API sich anzuschauen und die React bzw. Angular Beispiele.

> Best Practices & Standardverhalten

Wie Sie ihre Datenstruktur definieren ist Ihnen selbst überlassen (z.B. UUID oder normale Nummer als eindeutiger Identifier bei Datenbank Tabellen) - Ich empfehle Ihnen nur halten Sie sich an die Best Practices die in der Vorlesung gezeigt wurden und die auch in der Praxis angewandt werden. 

Ein paar Beispiele: 
* Verwenden Sie für asynchrone Operationen die Async / Await Syntax
* Verwenden Sie moderne Javascript Syntax und Funktionen (z.B. Spread Operator, Array Methoden etc.)
* Achten Sie bei Stackoverflow Antworten / Lösungen auf das Alter der Antworten (Javascript wandelt sich umglaublich schnell und eine Lösung von vor 4 Jahren ist vielleicht nicht mehr ganz up 2 date)
* Besuchen Sie die weiterführenden Links und schauen Sie sich auch die Offiziellen Dokumentationen der einzelnen Frameworks an
