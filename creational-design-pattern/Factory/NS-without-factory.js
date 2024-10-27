/**Project Structure
Notification Interface: Define a structure that all notifications will follow (e.g., send() method).
Concrete Notification Classes: Implement different notification types (Email, SMS, Push) with specific behaviors.
Notification Factory: A factory that decides which notification to create based on provided parameters.**/


const notificationForm = document.querySelector('#notificationForm');

notificationForm.addEventListener('submit',function(e){
  e.preventDefault()

  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value;
  const priority = document.getElementById("priority").value || undefined;
  const schedule = document.getElementById("schedule").value || undefined;

    // Create an instance of the selected notification class based on `type`

  const notificationClass = notificationService[type];
  const notification = new notificationClass()

  const options = { priority, schedule };

  notification.send(message,options)
  
})


class Notification{
  send(message,options={}){
    const { priority, schedule } = options;
    console.log(`Sending Email: ${message}, Priority: ${priority}, Schedule: ${schedule}`);
  }
}

class Gmail extends Notification {
  send(message,options={}){
    const { priority, schedule } = options;
    console.log(`Sending Email: ${message}, Priority: ${priority}, Schedule: ${schedule}`);
  }
}

class SMSNotification extends Notification {
  send(message,options={}){
    const { priority, schedule } = options;
    console.log(`Sending SMS: ${message}, Priority: ${priority}, Schedule: ${schedule}`);
  }
}

class PushNotification extends Notification {
  send(message,options={}){
    const { priority, schedule } = options;
    console.log(`Sending PUSH: ${message}, Priority: ${priority}, Schedule: ${schedule}`);
  }
}

class Whatsup extends Notification {
  send(message,options={}){
    const { priority, schedule } = options;
    console.log(`Sending Whatsapp: ${message}, Priority: ${priority}, Schedule: ${schedule}`);
  }
}

// Mapping notification types to specific classes

const notificationService = {
  "gmail":Gmail,
  "sms":SMSNotification,
  "push":PushNotification,
  "whatsapp":Whatsup
}

console.log(notificationService)


//In this code, if you want to add new notification types, you need to:
//drawback 1
//another drawback in this code is that the client code (the event handler) has direct knowledge of how objects are created. In other words, the client code is exposed to the details of object instantiation for each notification type.  client code has direct access to the internal details of the notification creation process.

// drawback 2
//In other words, the client code is not fully encapsulated from the object creation logic, which goes against the Encapsulation Principle. Ideally, the client should only request a notification without needing to know which class is being instantiated or how it’s being done.


//Define a new class for the notification type.
//Update the notificationTypes mapping object by adding an entry for this new class.


//With a factory, you’d only modify the factory class, centralizing the logic for creating new instances and avoiding the need to update multiple places in the code.

//By using the Factory Pattern, we can abstract away the creation logic. The client simply calls the factory with a type and receives an object, without knowing the details of the instantiation process.