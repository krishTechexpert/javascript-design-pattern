//Button Interface:
class Button{
  parentElement=document.querySelector('.info');
  constructor(text){
     this.btn = document.createElement('button');
     this.btn.textContent = text;
     this.message = text;

  }
  render(){
    this.parentElement.appendChild(this.btn)
  }

  buttonAction(message){
    this.btn.addEventListener('click',function(){
      alert(message)
    })
  }
  
}

//Concrete classes that extend Button and customize the appearance of each button type (e.g., different background colors).
class PrimaryButton extends Button{
  parentElement = document.querySelector('.subHead')

  constructor(text){
    super(text);
    this.btn.style.backgroundColor='green';
    this.btn.style.color='white';
  }
}

class SecondaryButton extends Button{
  constructor(text){
    super(text);
    this.btn.style.backgroundColor='blue';
    this.btn.style.color='white';
  }
}

class DangerButton extends Button{
  constructor(text){
    super(text);
    this.btn.style.backgroundColor='red';
    this.btn.style.color='white';
  }
}

//Factory Class: The ButtonFactory class has a static method, createButton, which encapsulates the logic for creating different types of Button instances. and ensures that clients don’t need to directly instantiate each button type.

class ButtonFactory{
  //Use static methods if you don’t need any state or specific instance data, and you’re providing a function that can be used as a utility by the class itself.

  //Static methods are typically used for:
  //1.) Utility functions related to the class.
  //2.) Factory functions that don’t need instance-specific data.
  
  static createButton(type,text){
    switch(type){
      case 'primary':
        return new PrimaryButton(text);
      case 'secondary':
        return new SecondaryButton(text);
      case 'danger':
        return new DangerButton(text);
       default:
        throw new Error('other bitton not allowed')
    }
  }
}

//Client Usage:The client code simply calls ButtonFactory.createButton() with the required type and text, and the factory returns the appropriate button type.
//This pattern hides the implementation details of button creation, following the Factory Pattern’s goal of decoupling the client code from the specific button instantiation logic.
const primaryBtn =ButtonFactory.createButton('primary','Save');
primaryBtn.render(primaryBtn.parentElement)
primaryBtn.buttonAction(primaryBtn.message)

const secondaryBtn =ButtonFactory.createButton('secondary','Info');
secondaryBtn.render()
secondaryBtn.buttonAction(secondaryBtn.message)


const dangerBtn =ButtonFactory.createButton('danger','Warning');
dangerBtn.render()
dangerBtn.buttonAction(dangerBtn.message)
