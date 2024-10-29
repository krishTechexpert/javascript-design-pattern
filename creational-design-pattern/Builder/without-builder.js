//try to create houses with different configurations directly
class House {
  // Constructor with parameters for each feature

  constructor(hasGarden = false, hasPool = false, hasGarage = false) {
    this.hasGarden = hasGarden;
    this.hasPool = hasPool;
    this.hasGarage = hasGarage;
  }
}

// Client code
const luxuryHouse = new House(true, true, true);    // Full-featured house
console.log(luxuryHouse)
const simpleHouse = new House(false, false, false); // Minimal house
console.log(simpleHouse)

//Problems here:

//Poor Readability: Without labeled parameters, it’s hard to tell what each argument (true, true, true) represents.
//Limited Flexibility: Adding a new feature (e.g., a roofType) means modifying the constructor, which can break existing code.
//Complexity in Object Construction: As the number of features grows, so does the complexity of managing and passing parameters, especially for conditional or optional features.

/************************************************************************************************* */

//try to create different configurations of a Computer directly through a constructor,

class Computer{
  constructor(cpu,ram,storage,gpu){
    this.cpu=cpu || 'Inteli5',
    this.ram= ram || '8GB',
    this.storage=storage || '256GB SSD',
    this.gpu = gpu || 'Integrated'
  }
}

// client code
const gamingComputer=new Computer('Inteli9',"32GB","TB SSD","NVIDIA RTX 3080");
const officeComputer = new Computer('inteli6','16GB','512GB SSD');
const basicComputer = new Computer();


//Problems:

//Lack of Clarity: Without descriptive method calls, it’s not immediately clear what each argument represents.
//Difficult to Manage Defaults: It’s hard to set sensible defaults while still allowing customization.
//Adding New Options: Adding a new feature (e.g., wifiCard) would require changing the constructor, which can lead to bugs.