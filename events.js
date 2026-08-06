const button = document.querySelector(".button");

button.addEventListener("click", () => {
    console.log("Button was clicked!");
});

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

nameInput.addEventListener("input", () => {
    console.log(nameInput.value);
});

emailInput.addEventListener("input", () => {
    console.log(emailInput.value);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted, but the page didn't reload!");
});