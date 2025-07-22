// Solution for base assignment

// object of store items and prices
// const because the object shouldn't change in memory even if the values do
const storeItems = {
    bread: 3.40,
    oreos: 4.00,
    water: 2.00
};

// array for cart
// const because the array shouldn't change in memory even if the values do
const cart = ['bread', 'oreos', 'water'];

// arrow function to calculate total
// expects two arguments - the store items object and the shopping cart array
const checkout = (storeInventory, cartItems) => {
    console.log('Checking out cart 1');
    // variable to store total price
    // let variable bc the value needs to be updated
    let cartTotal = 0;

    // for loop iterating over shopping cart items
    // using for...of to store the value of each item directly in the loop variable item
    // the loop variable item is declared as const because it gets redeclared on every iteration, and the value should not be modified within the loop body
    for (const item of cartItems) {
        console.log(`...adding $${storeInventory[item].toFixed(2)} ${item}`);
        // update cart total with the price of the item in the store object
        cartTotal += storeInventory[item];
    };
    // return the cart total with 2 decimal places
    return cartTotal.toFixed(2);
};

console.log(`Cart 1 total: $${checkout(storeItems, cart)}`);


// Solution for bonus items

// object of store items with nested objects of the items' prices and quantities
const storeItems2 = {
    bread: {
        price: 3.40,
        quantity: 5
    },
    oreos: {
        price: 4.00,
        quantity: 2
    },
    water: {
        price: 2.00,
        quantity: 1
    }
};

// array of nested arrays containing the store items and quantities
const cart2 = [['bread', 1], ['oreos', 2], ['water', 3], ['gouda', 2]];

// arrow function to calculate total
// expects two arguments - the store items object and the shopping cart array
const checkout2 = (storeInventory2, cartItems2) => {
    console.log('Checking out cart 2');
    // variable to store total price
    // let variable bc the value needs to be updated
    let cartTotal2 = 0;

    // for loop iterating over shopping cart items
    // using for...of to store the value of each item directly in the loop variable entry
    // the loop variable item is declared as const because it gets redeclared on every iteration, and the value should not be modified within the loop body
    for (const entry of cartItems2) {
        // storing each value of entry in its own variable [item, quantity]
        const item = entry[0];
        const num = entry[1];

        // for loop that runs based on the quantity of the selected item in the cart (value of num)
        // the loop variable i is declared as let because it needs to be incremented
        for (let i = 0; i < num; i++) {
            // checking to see if the item is in the store items object
            if (item in storeInventory2) {
                console.log(`...adding $${storeInventory2[item]['price'].toFixed(2)} ${item}`);
                //updating the cart total
                cartTotal2 += storeInventory2[item]['price'];
                // subtracting one from the quantity of the item from the store items object
                storeInventory2[item]['quantity']--;
                // checking to see if the store is out of the item
                if (storeInventory2[item]['quantity'] === 0) {
                    console.log(`You purchased the last ${item}!`);
                    // removing the key-value pair from the store items object
                    delete storeInventory2[item];
                    // breaking out of the loop for this item since it's no longer available
                    break;
                };

            } else {
                console.log(`Sorry, the store does not have ${item}.`);
                // breaking out of the loop since the item isn't in the store
                break;
            };
        };

    };
    // return cart total with 2 decimal places
    return cartTotal2.toFixed(2);
};

console.log(`Cart 2 total: $${checkout2(storeItems2, cart2)}`)