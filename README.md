# DecimalToBinary

# 🧮 Decimal to Binary Visualizer

Dieses kleine JavaScript-Projekt veranschaulicht, wie eine **Dezimalzahl in eine Binärzahl** umgewandelt wird – inklusive **animierter Call-Stack-Darstellung** bei der Zahl 5.

Das Projekt zeigt Schritt für Schritt, wie eine rekursive Funktion arbeitet, und macht die Ausführung visuell greifbar.

---

## 🚀 Funktionen

- Konvertierung von Dezimal- zu Binärzahlen mit rekursiver Methode.
- Spezialanimation bei Eingabe der Zahl `5`:
  - Visuelle Darstellung des Call Stacks.
  - Zeitgesteuerte Nachrichten zu jedem Rekursionsschritt.
- Benutzerfreundliche Oberfläche mit Eingabefeld und Button.
- Tastatureingabe über Enter-Taste möglich.

---

## 🧠 Beispiel: `decimalToBinary(5)`

Rekursionsablauf:

```text
decimalToBinary(5)
→ decimalToBinary(2) + "1"
→ decimalToBinary(1) + "0"

Projektstruktur
plaintext
Kopieren
Bearbeiten
index.html          # Grundgerüst mit Eingabefeld, Button, Ergebnisanzeige und Animationsbereich
styles.css          # Einfache Gestaltung
script.js           # Hauptlogik inkl. Konvertierung, Animation und Event-Handling
README.md           # Diese Dokumentation

⚙️ Wie benutzen?
Öffne die index.html-Datei im Browser.

Gib eine Zahl ein (z. B. 5) und klicke auf den Button oder drücke Enter.

Das Binärergebnis wird berechnet und angezeigt.

Bei der Zahl 5 wird zusätzlich eine rekursive Stack-Animation abgespielt.

🛠 Ideen für Weiterentwicklung
🔄 Allgemeine Call-Stack-Animation für jede Zahl
Aktuell wird nur bei 5 eine Animation gezeigt. Mit einer dynamischen Erzeugung des animationData-Arrays könnte man jede beliebige Zahl visuell aufbereiten.

🎨 Visual Enhancements
Stack-Darstellung mit echten Kästchen übereinander.

Farben zur Unterscheidung von Funktionsaufruf, Rückgabe, Stack Pop.

Fortschrittsbalken oder Countdown während der Animation.

💡 Erklärmodus / Lernmodus
Option für einen Lernmodus, in dem Nutzer jeden Schritt manuell vorwärts oder rückwärts navigieren können.

Tooltips mit einfachen Erklärungen zur Rekursion.

📱 Mobile Optimierung
Responsives Layout für kleinere Bildschirme.

Touch-Bedienung für Schritt-für-Schritt-Modus.

🌍 Mehrsprachigkeit
Interface und Animationstexte in mehreren Sprachen (z. B. Deutsch, Englisch, Ungarisch).

🧪 Testfunktion
Integration eines kleinen Unit-Test-Bereichs, in dem man eigene Testfälle eingeben und automatisch vergleichen kann.
→ "1"
→ "1" + "0" = "10"
→ "10" + "1" = "101"
