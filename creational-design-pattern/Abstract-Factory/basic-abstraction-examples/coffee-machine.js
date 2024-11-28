console.log('**************************')
console.log('coffee machine example')

/*Example 1: Coffee Machine
Analogy: Think of a coffee machine. You only press buttons (e.g., "Make Espresso") and get coffee. You don’t need to know how the machine grinds beans or heats water.*/

class CoffeeMachine {
  #heatWater() {
    console.log("Heating water...");
  }

  #brewCoffee() {
    console.log("Brewing coffee...");
  }

  makeEspresso() {
    console.log("Making espresso...");
    this.#heatWater();
    this.#brewCoffee();
    console.log("Espresso is ready!");
  }

  makeLatte() {
    console.log("Making latte...");
    this.#heatWater();
    this.#brewCoffee();
    console.log("Adding milk...");
    console.log("Latte is ready!");
  }
}

// Usage
const myCoffeeMachine = new CoffeeMachine();
myCoffeeMachine.makeEspresso(); // Output: Espresso process
myCoffeeMachine.makeLatte();    // Output: Latte process
// myCoffeeMachine.#heatWater(); // Error: Private method cannot be accessed


/*Key Takeaway: The user presses buttons (makeEspresso or makeLatte) but doesn’t know about private methods (internal working how coffee is made) (#heatWater or #brewCoffee).*/
