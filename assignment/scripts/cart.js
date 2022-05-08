console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
//const maxItems = 5;

console.log(`Basket is ${basket}`);

//function isFull() {
//    if (basket.length < maxItems) {
//        return false;
//    }
//    else {
//       return true;
//    }
//};

function addItem(item) {
    basket.push(item);
};

addItem('Bread');
addItem('Salad');
addItem('Water');
console.log('Should add item to basket:', basket);

function listItems() {
    let i = 0;
    while (i < basket.length) { // ! Loop for each item in basket
        console.log('Currently in basket:', basket[i]);
        i++;
    }
};

listItems(); // ! Listing each item in the basket

function empty() {
    basket = []; // ! Make this array empty
};

empty(); // ! Should give an empty basket array

console.log(basket); // ! Check to make sure basket is empty