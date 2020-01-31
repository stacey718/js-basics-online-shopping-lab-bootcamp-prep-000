var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100 + 1);
var itemName = {[item]:price}
cart.push(itemName)
console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
else {
  var items = [];
  for (let i = 0; i < cart.length; i++) {
}

function total() {
for (let i = 0; i < cart.length; i++)
{
  var totalCart = cart[i].price
}
return totalCart
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
  
  }
}

function placeOrder(cardNumber) {
  else {
 console.log(`Sorry, we don\'t have a credit card on file for you.`)
 }
}
