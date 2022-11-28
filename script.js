"use strict";

const showButtons = document.querySelectorAll(".btn");
const modalItems = document.querySelectorAll(".hidden");

document.querySelector(".btn-close").addEventListener("click", close);
document.querySelector(".overlay").addEventListener("click", close);

for (let i = 0; i < showButtons.length; i++) {
  showButtons[i].addEventListener("click", open);
}

function open() {
  for (let j = 0; j < modalItems.length; j++) {
    modalItems[j].style.display = "block";
  }
}

function close() {
  for (let i = 0; i < modalItems.length; i++)
    modalItems[i].style.display = "none";
}
