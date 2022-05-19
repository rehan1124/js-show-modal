"use strict";

const modal = document.querySelector(".modal ");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModalBtn = document.querySelectorAll(".show-modal");
console.log(showModalBtn);

const openModal = function () {
  // Remove class "hidden"
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  // Add class "hidden"
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModalBtn.length; i++) {
  console.log(showModalBtn[i].textContent);
  showModalBtn[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener(
  "keydown",
  // Passing event object as an argument
  function (event) {
    console.log(event.key);
    // Close the modal only when escape key is pressed and class "hidden" is not present (web-element is displayed)
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      // Close the modal only when excape key is pressed
      closeModal();
    }
  }
);
