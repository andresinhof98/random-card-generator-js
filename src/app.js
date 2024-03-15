/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = onload;

function onload() {
  //write your code here
  const pintas = ["♦", "♥", "♠", "♣"];
  const numbersCards = [2, 3, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const randomPintas = Math.floor(Math.random() * pintas.length);
  const randomNumbers = Math.floor(Math.random() * numbersCards.length);

  const numberTextNode = document.createTextNode(numbersCards[randomNumbers]);
  const topPintasTextNode = document.createTextNode(pintas[randomPintas]);
  const bottomPintasTextNode = document.createTextNode(pintas[randomPintas]);

  const topPintaNode = document.getElementById("top-pinta");
  const numberNode = document.getElementById("number");
  const bottomPintaNode = document.getElementById("bottom-pinta");

  topPintaNode.appendChild(topPintasTextNode);
  bottomPintaNode.appendChild(bottomPintasTextNode);
  numberNode.appendChild(numberTextNode);

  if (randomPintas === 0 || randomPintas === 1) {
    topPintaNode.classList.add("red");
    bottomPintaNode.classList.add("red");
  }
}
