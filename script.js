"use strict";

const modal = document.querySelector(".modal ");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");
console.log(showModalBtn);

for (let i = 0; i < showModalBtn.length; i++) {
  console.log(showModalBtn[i].textContent);
}
