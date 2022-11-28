"use strict";

function open() {
  for (let i = 0; i < popUp.length; i++) popUp[i].classList.remove("hidden");
}

function close() {
  for (let i = 0; i < popUp.length; i++) popUp[i].classList.add("hidden");
}

const showButtons = document.querySelectorAll(".btn");
const popUp = document.querySelectorAll(".hidden");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".btn-close");

for (let i = 0; i < showButtons.length; i++)
  showButtons[i].addEventListener("click", open);

closeButton.addEventListener("click", close);
overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (!overlay.classList.contains("hidden") && e.code === "Escape") close();
});
