const heading = document.querySelector("h1");
const aboutSection = document.querySelector(".highlight");
const specificItem = document.querySelector("#site-header");
const paragraph = document.querySelector("p");

console.log(heading);
console.log(aboutSection);
console.log(specificItem);
console.log(paragraph);

console.log(heading.innerHTML)
heading.innerHTML = "Bienvenidos!"
paragraph.classList.add("highlight")