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

> Welche Rolle spielt der "Benutzer" in den Hinweisen ganz unten in der Prüfungsleistung?

Die Bezeichnung "Benutzer" ist einfach nur eine Hilfe für Sie - es soll aber kein Benutzersystem oder ähnliches abgebildet werden (Außer man wählt soetwas als Aufgabe 3 z.B.). 

Ein Benutzer ist einfach jemand der sich lokal durch die Anwendung einmal durchklicken kann. 

Natürlich bedeutet dies auch, wenn Sie kein Benutzer System implementieren können Sie nur schwer ihre API absichern (D.h. Löschen z.B. könnte jeder) - Dies ist aber in diesem Fall gewollt :). 

> Zeitlich begrenzte Angebote in der Anforderung

Denken Sie hier einfach mal ganz einfach - Sie können Ihr System z.B. designen, dass Automatisch neue Angebote direkt nach 15 Minuten ablaufen. Sie können aber auch das Anlegen um einen User Input erweitern, wo der User z.B. eine Zeitspanne einstellen darf. 

Generell gilt aber: Bauen Sie es ganz einfach auf. Neues Angebot -> Fixe Zeit von 15 Minuten -> Angebot geschlossen. Mehr Logik reinbauen können Sie im Nachgang immernoch :) 

> Anforderungsdokument Funktionale / Nicht funtkionale Anforderungen

Sind nicht explizit als Abgabe gefragt aber generell gilt: Alles was Sie an Dokumentation haben und machen hilft Ihnen und auch uns später bei der Korrektur d.h. geben Sie sowas gerne alles einfach ab.

Es ist aber nicht explit Teil der Prüfungsleistung. 

> Prüfungsleistung: Satz: "weil andere Unternehmen in der Zukunft ihren Kunden dasselbe Portal anbieten möchten"

Ist der versteckte Satz, dass Sie irgendwie eine REST Schnittstelle anbieten sollten d.h. Endpunkte damit später andere Portale auch ihre Daten abfragen kann. Natürlich werden keine weiteren Portale direkt gebaut. Dieser Satz soll Ihnen einfach nur einmal beschreiben wie Kunden in Echt gerne mal denken und welches Technische Konzept sich dahinter verbirgt (Hier eben REST API z.B.)

> Was für ein Unternehmen ist das Fiktive Unternehmen aus der Prüfungsleistung? 

* Frei auswhählbar
* Haftungs Sachen weil sie mit "Geld" arbeiten können sie theoretisch argumentieren, dass sie einen technischen Prototypen liefern um eine Machbarkeit zu zeigen. Haftungs Frage selbst liegt dann auch beim Kunden. Sind aber nicht Teil der Prüfungsleistung (Wir beschäftigen uns ja mit der Webprogrammierung im Generellen und weniger mit der Rechtsgrundlage) 
  * Als Softwareunternehmen aber z.B. in der Realität würden Sie dann einfach (In ihr Anforderungsdokument z.B.) definieren, dass Sie sich an gewisse ISO Vorgaben halten im Bezug auf Sicherheit etc.

> Was für Tools & andere freie Software können Sie verwenden für die Prüfungsleistung?

Software Pakete können beliebig kombiniert werden d.h. sie können auch weiter Open Source Tools / etc. nutzen die Ihnen das entwickeln leichter machen
	* z.B. ein fertiges User System was sie nur noch einsetzen müssen
	* Auch bei Datenbanken gibt es keine Einschränkungen
	* Wenn die externe Software vlt sehr leicht zu bedienen ist aber Ihren Use-Case oder Problemstellung löst dann verwenden Sie diese gerne
		* Einfache Pakete etc. sind sogar eher willkommen - Sie wollen ein Softwareproblem lösen und finden etwas passendes dazu, dann verwenden Sie das auch einfach
		* Ihre Lösung wird nicht an der Komplexität gemessen
			* Keep Software simple ;) 

> Inspiration / Referenzen auch wie sie z.B. ein user System umsetzen können

* Ein einfaches selber schreiben (z.B. username + passwort) (Bitte Passwörter hashen und salten versteht sich) 
* Etwas fertiges nehmen (Einfach mal node user management googeln oder ähnliches)
