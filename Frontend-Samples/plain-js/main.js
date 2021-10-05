const randomHeaders = ['Javascript Example', 'Hello World', 'My header', 'A new title', 'Chapter 1'];

function updateHeader() {
  const index = Math.floor(Math.random() * randomHeaders.length);
  document.getElementById('header').innerHTML = randomHeaders[index];
}

const shopping = ['🍔', '🥚', '🧀', '🍏', '🥕'];

shopping.map((item) => {
  createListElement(item);
})  

function addShoppingItem(value) {
  shopping.push(value);
  createListElement(value);
}

function createListElement(value) {
  const li = document.createElement('li');
  const text = document.createTextNode(value);
  li.appendChild(text);
  document.getElementById("shoppingList").appendChild(li);
}