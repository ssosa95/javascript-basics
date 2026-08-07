let items = [];

const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");
const addItem = document.querySelector("#itemInput");
const listItem = document.querySelector("#itemList");
const removeItem = document.querySelector("#removeInput");

function renderList() {
    listItem.innerHTML = "";
    items.forEach((item, index) => {
        listItem.innerHTML += `<li>${index + 1}. ${item}</li>`;
    });
}

addButton.addEventListener("click", () => {
    const newItem = addItem.value;
    if (newItem.trim() !== "") {
        items.push(newItem);
        renderList();
        addItem.value = "";
    }
    
});

removeButton.addEventListener("click", () => {
    const removeValue = removeItem.value;
    const numericValue = Number(removeValue);
    if (removeValue.trim() !== "" && Number.isInteger(numericValue) && numericValue >= 1 && numericValue <= items.length) {
        const indexToRemove = numericValue - 1;
        items.splice(indexToRemove, 1);
        renderList();
        removeItem.value = "";
    }
});
   

addItem.addEventListener("input", () => {
    console.log(addItem.value);
});

removeItem.addEventListener("input", () => {
    console.log(removeItem.value);
});

addItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addButton.click();
    }
});

removeItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        removeButton.click();
    }
});