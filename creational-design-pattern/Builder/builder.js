//Product
class House {
  constructor() {
    this.hasGarden = false;
    this.hasPool = false;
    this.hasGarage = false;
  }
}

// Builder Interface
class HouseBuilder{
  constructor(){
    this.house = new House();
  }
  addGarden(garden){
    this.house.hasGarden=garden;
    return this;
  }

  addPool(pool){
    this.house.hasPool=pool;
    return this;
  }

  addGarage(garage){
    this.house.hasGarage=garage;
    return this;
  }
 build(){
  return this.house;
 }  
}

//client code
const luxuryHouse= new HouseBuilder().addGarden(true).addPool(true).addGarage(true).build();
console.log(luxuryHouse)

const simpleHouse = new HouseBuilder();// House with no additional features
console.log(simpleHouse)

//Summary of Problem Solved
//The Builder Pattern simplifies creating complex objects by:

//Managing construction complexity through encapsulation in the builder.
//Improving code readability by allowing method chaining.
//Enhancing flexibility to add/remove features without changing the core class.
//Supporting immutability and reuse: Different House configurations can be easily created without repetitive code, making it adaptable and less error-prone for future changes.

/******************* Example 2 *****************/

// Product class: Computer
class Computer{
  constructor() {
    this.cpu = "Intel i5";          // Default values
    this.ram = "8GB";
    this.storage = "256GB SSD";
    this.gpu = "Integrated";
    this.wifiCard = "None";         // Default value for wifiCard
  }
}

// Builder class: ComputerBuilder
class ComputerBuilder{
  constructor(){
    this.computer=new Computer()
  }

  setCPU(cpu){
    this.computer.cpu=cpu;
    return this; // chaining
  }
  setRAM(ram) {
    this.computer.ram = ram;
    return this;
  }
  
  setStorage(storage) {
    this.computer.storage = storage;
    return this;
  }
  
  setGPU(gpu) {
    this.computer.gpu = gpu;
    return this;
  }
  setWifiCard(card){
    this.computer.wifiCard=card;
    return this;
  }
  build(){
    return this.computer;
  }

}

// Client code
const gamingComputer = new ComputerBuilder()
  .setCPU("Intel i9")
  .setGPU("NVIDIA RTX 3080")
  .setWifiCard('GSX')
  .setRAM("32GB")
  .setStorage("1TB SSD")
  
  .build();

const officeComputer = new ComputerBuilder()
  .setCPU("Intel i5")
  .setRAM("8GB")
  .setStorage("512GB SSD")
  .build();

const basicComputer = new ComputerBuilder().build(); // Using default values

console.log(gamingComputer); // Computer { cpu: 'Intel i9', ram: '32GB', storage: '1TB SSD', gpu: 'NVIDIA RTX 3080' }
console.log(officeComputer); // Computer { cpu: 'Intel i5', ram: '8GB', storage: '512GB SSD', gpu: 'Integrated' }
console.log(basicComputer); // Computer { cpu: 'Intel i5', ram: '8GB', storage: '256GB SSD', gpu: 'Integrated' }


//How the Builder Pattern Solves the Problem

//Clarity: Methods like setCPU and setRAM make it obvious what each part is, unlike positional arguments in a constructor.

//Flexible Defaults: The Computer class has sensible defaults, so we only need to set the parts we want to customize.

//Easily Extendable: If we add a wifiCard feature, we can simply add a new method setWifiCard in ComputerBuilder, without altering the Computer class itself.

//This pattern makes it easy to create a variety of configurations for the same product (Computer) in a clean and flexible way. 