// DOM-Elemente referenzieren
const numberInput = document.getElementById("number-input"); // Eingabefeld für die Dezimalzahl
const convertBtn = document.getElementById("convert-btn"); // Button zum Konvertieren
const result = document.getElementById("result"); // Element, in dem das Ergebnis angezeigt wird
const animationContainer = document.getElementById("animation-container"); // Container für die Call-Stack-Animation

// Vordefinierte Schritte für die Animation bei Eingabe der Zahl 5
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000, // Verzögerung bis zum Hinzufügen
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000, // Verzögerung bis zur Anzeige der Nachricht
    removeElDelay: 20000, // Verzögerung bis zum Entfernen
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

// Rekursive Funktion zur Umwandlung von Dezimal- in Binärzahlen
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input); // Basisfall: 0 oder 1 wird als String zurückgegeben
  } else {
    // Rekursiver Aufruf: Ganzzahldivision durch 2 und Modulo 2 angehängt
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Funktion zur Darstellung der Call-Stack-Animation (nur bei Eingabe 5)
const showAnimation = () => {
  result.innerText = "Call Stack Animation"; // Überschrift setzen

  animationData.forEach((obj) => {
    // Schritt 1: Funktion aufrufen und anzeigen
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj
