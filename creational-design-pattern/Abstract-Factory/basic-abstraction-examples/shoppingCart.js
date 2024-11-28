console.log('***************')

/*Example 2: Online Shopping Cart
Analogy: When you shop online, you add items to a cart, remove items, and see the total price. You don’t need to know how the cart calculates the total or stores the data.*/

class ShoppingCart {
  #items = []; // Private array to store cart items

  addItem(item, price) {
    this.#items.push({ item, price });
    console.log(`${item} added to the cart.`);
  }

  removeItem(item) {
    this.#items = this.#items.filter(i => i.item !== item);
    console.log(`${item} removed from the cart.`);
  }

  calculateTotal() {
    return this.#items.reduce((total, i) => total + i.price, 0);
  }

  displayCart() {
    console.log("Your cart contains:");
    this.#items.forEach(i => console.log(`- ${i.item}: $${i.price}`));
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem("Laptop", 1000); // Laptop added to the cart.
cart.addItem("Phone", 500);   // Phone added to the cart.
cart.displayCart();           // Displays cart items
console.log("Total:", cart.calculateTotal()); // Total: 1500
cart.removeItem("Phone");     // Phone removed
cart.displayCart();           // Updates cart

/*Key Takeaway: The user interacts with the addItem, removeItem, and calculateTotal methods. The cart’s internal structure (#items) is hidden.*/


