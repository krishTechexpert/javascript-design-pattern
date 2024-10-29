// Better/Best approach to remove tight coupling

//Solution: Use Dependency Injection (DI)

//One solution to reduce tight coupling is to inject the dependency instead of directly instantiating it. Here, you could pass the House class or an instance of House to the builder through a parameter, making HouseBuilder more flexible.


// House class with common properties
class House {
  constructor() {
    this.doors=0;
    this.windows=0;
    this.hasGarden = false;
    this.hasPool = false;
    this.hasGarage = false;
  }
}

// Apartment class with different properties

class Apartment{
  constructor(){
    this.doors=0;
    this.windows=0;
    this.balcony=false;
    this.parkingSpace=false;
    this.security=false;
  }
}

//With dependency injection, we can create either a House or an Apartment without modifying HouseBuilder. We’ll use the builder’s methods to add appropriate properties based on the class we pass.

// Builder class: HouseBuilder with Dependency Injection
class HouseBuilder{

  constructor(BuildingClass){
    //Constructor Injection: We pass BuildingClass to the HouseBuilder constructor. This way, HouseBuilder doesn’t need to know about House specifically; it only uses BuildingClass to create an instance.
    this.house = new BuildingClass();
  }

  setDoors(doors) {
    this.house.doors = doors;
    return this;
  }

  setWindows(windows) {
    this.house.windows = windows;
    return this;
  }

  addGarden(garden){
    if(this.house instanceof House){
      this.house.hasGarden=garden;
    }
    return this;
  }

  addPool(pool){
    if(this.house instanceof House){
      this.house.hasPool=pool;
    }
    return this;
  }

  addGarage(garage){
    if(this.house instanceof House){
      this.house.hasGarage=garage;
    }
    return this;
  }

  addBalcony(balcony){
    if(this.house instanceof Apartment){
      this.house.balcony=balcony;
    }
    return this;
  }
  addParkingSpace(parking){
    if(this.house instanceof Apartment){
      this.house.parkingSpace=parking;
    }
    return this;
  }
  addSecurity(security){
    if(this.house instanceof Apartment){
      this.house.security=security;
    }
    return this;
  }

 build(){
  return this.house;
 }  
}

//client code
const luxuryHouse= new HouseBuilder(House).setDoors(6).setWindows(12).addGarden(true).addPool(true).addGarage(true).build();
console.log(luxuryHouse)

// Creating an Apartment instance with the builder
const cityApartment = new HouseBuilder(Apartment)
  .setDoors(2)
  .setWindows(5)
  .addBalcony(true)
  .addParkingSpace(true)
  .addSecurity(true)
  .build();

console.log("City Apartment:", cityApartment);


//Explanation of Flexibility in this Example

//Single Builder for Multiple Products: HouseBuilder can now be used to construct both House and Apartment instances. The HouseBuilder doesn’t need to know the specifics of each type; it just applies settings based on what is available in the provided class.

//Selective Methods Based on Type: The builder only applies specific features when the product is of the right type (House or Apartment). This avoids adding irrelevant properties (e.g., garden to an Apartment).

//Ease of Extension: If you want to add new building types, like Villa, you simply define the new class and reuse HouseBuilder with relevant methods.
