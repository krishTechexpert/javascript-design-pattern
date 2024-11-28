console.log('first learn basic of abstraction')

/*Imagine we’re working with a bank account. Users want to:

Deposit money.
Withdraw money.
Check their balance.

We don’t want users to directly access or modify the bank’s internal data (e.g., total balance). Instead, we provide methods to handle these operations, hiding unnecessary details.*/
/**************************************************************** */


//Without Abstraction (Unsafe)
//Here, users can directly access and modify the balance, which can cause issues.

class BankAcc{
  constructor(){
    this.totalAmount=0;
  }
}
const acc=new BankAcc();
acc.totalAmount = 1000; // Anyone can change it
console.log(acc.totalAmount); // 1000

acc.totalAmount = -500; // Invalid totalAmount
console.log(acc.totalAmount); // -500 (This is bad!)
/********************************************************* */


//With Abstraction (Safe)
//We hide the balance variable using private fields and provide methods to interact with it safely.



class BankAccount{
  #balance; // Private field, can't be accessed directly
  constructor(){
    this.#balance = 0; // Initial balance
  }

  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Invalid deposit amount!");
    }
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdrawal amount!");
    }
  }

  getBalance() {
    return this.#balance; // Return the balance safely
  }

}

// Usage
const account = new BankAccount();
account.deposit(1000); // Deposited: $1000
console.log(account.getBalance()); // 1000

account.withdraw(500); // Withdrew: $500
console.log(account.getBalance()); // 500

// account.#balance = -100; // Error: Cannot access private field


//Key Points:

//#balance is private, so users can’t modify it directly.
//Methods like deposit, withdraw, and getBalance expose only what’s necessary.




/*How to Learn Abstraction in JavaScript?
Start Small:

Use classes and private fields (#field) to hide data.
Use methods to expose only what’s necessary.
Practice Real Examples:

Create objects like Car, Library, Calculator, etc., with public methods but private data.
Understand Encapsulation:
Abstraction often works hand-in-hand with encapsulation, which ensures that object details are hidden, and access is controlled.

Apply in Projects:
Identify areas where you can simplify and hide unnecessary details in your applications.*/


//Refactored Example with Private Methods


//Let’s add some private methods to the BankAccount class to demonstrate their use. We'll also refactor the code slightly to make it cleaner and include these methods.

class BankAccount1 {
  #balanceAmt; // Private field for account balance

  constructor() {
    this.#balanceAmt = 0; // Initialize balance
  }

  // Public Method: Deposit money
  deposit(amount) {
    if (this.#isValidAmount(amount)) {
      this.#updateBalance(amount); // Use private method
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Invalid deposit amount!");
    }
  }

  // Public Method: Withdraw money
  withdraw(amount) {
    if (this.#isValidAmount(amount) && this.#canWithdraw(amount)) {
      this.#updateBalance(-amount); // Use private method
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Invalid withdrawal amount!");
    }
  }

  // Public Method: Get balance
  getBalance() {
    return this.#balanceAmt; // Safely return the balance
  }

  // Private Method: Validate amount
  #isValidAmount(amount) {
    return typeof amount === "number" && amount > 0;
  }

  // Private Method: Check if withdrawal is allowed
  #canWithdraw(amount) {
    return this.#balanceAmt >= amount;
  }

  // Private Method: Update the balance
  #updateBalance(amount) {
    this.#balanceAmt += amount;
  }
}


const account1 = new BankAccount1();

account1.deposit(100);  // Deposited: $100
account1.withdraw(30);  // Withdrew: $30
console.log(`Current Balance: $${account1.getBalance()}`); // Current Balance: $70

account1.withdraw(100); // Invalid withdrawal amount!
account1.deposit(-50);  // Invalid deposit amount!

// Trying to access private fields or methods
//console.log(account1.#balanceAmt);         // Error: Private field '#balance' must be declared in an enclosing class
//console.log(account1.#isValidAmount(50)); // Error: Private method '#isValidAmount' is not accessible



/*
How It Works
Private Fields and Methods:

#balanceAmt: A private field that stores the account balance.
#isValidAmount: A private method to validate the input amount.
#canWithdraw: A private method to check if the withdrawal amount is permissible.
#updateBalance: A private method that modifies the balance.
Encapsulation:

The private methods are only used internally within the class. For example:
#isValidAmount ensures only valid amounts are processed.
#updateBalance handles balance updates in a controlled way.
Error Prevention:

By encapsulating logic in private methods, you reduce the chances of accidentally exposing sensitive implementation details.*/

/****************************************** */



//Example: Private Methods for Internal Use Only

class SecretCode {
  #code; // Private field to store the secret code

  constructor(code) {
    this.#code = this.#encryptCode(code); // Using a private method
  }

  // Public method to display the encrypted code
  getEncryptedCode() {
    return this.#code;
  }

  // Private method to encrypt the code
  #encryptCode(code) {
    // A basic encryption logic (just reversing the string here for demonstration)
    return code.split("").reverse().join("");
  }
}

const secret = new SecretCode("mySecret123");
console.log(secret.getEncryptedCode()); // Output: "321terceSym"

// Attempting to call the private method directly
// console.log(secret.#encryptCode("hello")); // Error: Private method '#encryptCode' is not accessible

