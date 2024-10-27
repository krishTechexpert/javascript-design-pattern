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

  const options = { priority, schedule };
  const notification = NotificationFactory.createNotification(type);
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

class NotificationFactory {
  static createNotification(type){
    switch(type){
      case 'email':
        return new Gmail();
      case 'whatsapp':
        return new Whatsup();
      case 'sms':
        return new SMSNotification();
      case 'push':
        return new PushNotification();
      default:
        throw new Error("Invalid notification type");
    }
  }
}
