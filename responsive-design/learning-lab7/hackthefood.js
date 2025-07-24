const storeItemsElement = document.getElementById("store-items")
const cartTotalElement = document.getElementById("cart-total");
const cartListElement = document.getElementById("cart");
let cartTotal = 0;

const inventory = {
    bread: 1.00, 
    oreos: 2.00, 
    coffee: 3.00,
    tea: 3.00,
    water: 2.00,
    strawberries: 4.00
}

const createTextElement = (elementType, text) => {
    const newElement = document.createElement(elementType);
    const newTextNode = document.createTextNode(text);
    newElement.appendChild(newTextNode);
    return newElement;
}

const updateCartTotal = (item) => {
    cartTotal += inventory[item];
    cartTotalElement.innerHTML = cartTotal;
}

const updateCart = (event) => {
    console.log(event)
    const buttonText = event.target.textContent;
    const newCartItem = createTextElement("li", buttonText);
    cartListElement.appendChild(newCartItem);
    updateCartTotal(buttonText)
}

for (item in inventory) {
    const storeItem = createTextElement("button", item)
    storeItem.type = "button";
    storeItemsElement.appendChild(storeItem);
    storeItem.addEventListener("click", (event) => updateCart(event))
}
