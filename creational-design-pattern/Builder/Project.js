// this Project is based on to generate form such as login form, registration form, survey form

// prodcut class: Form
class Form{
  constructor(){
    this.fields=[];
  }
  render(parentId){
    const form=document.querySelector(`#${parentId}`);
    this.fields.forEach(element => {
      let input=element.render();
      form.appendChild(input)
    })

    form.addEventListener('submit',function(e){
      e.preventDefault();
      const formData = new FormData(form);
      console.log(Object.fromEntries(formData))
    })
  }
}

class FormBuilder{
  constructor(){
    this.form= new Form();

  }
  addTextInputField(label,placeholder='',type="text"){
    const fieldName = label.toLowerCase().replace(" ", "_");

    this.form.fields.push({
      label:label,
      type:type,
      placeholder:placeholder,
      render:function(){
        const wrapper=document.createElement('div')
        const labelElement = document.createElement('label');
        labelElement.textContent=label;

        const inputElement = document.createElement('input')
        inputElement.type=type;
        inputElement.placeholder=placeholder;
        inputElement.name=fieldName;
        wrapper.appendChild(labelElement)
        wrapper.appendChild(inputElement);
        return wrapper;
      },

    })
    return this;
  }
  addPasswordInputField(label,placeholder='',type="password"){
    const fieldName = label.toLowerCase().replace(" ", "_");

    this.form.fields.push({
      label:label,
      type:type,
      placeholder:placeholder,
      render:function(){
        const wrapper=document.createElement('div')
        const labelElement = document.createElement('label');
        labelElement.textContent=label;

        const inputElement = document.createElement('input')
        inputElement.type=type;
        inputElement.placeholder=placeholder;
        inputElement.name=fieldName;
        wrapper.appendChild(labelElement)
        wrapper.appendChild(inputElement);
        return wrapper;
      },

    })
    return this;
  }

  addDatePicker(label) {
    const fieldName = label.toLowerCase().replace(" ", "_");

    this.form.fields.push({
      type: "date",
      label: label,
      render: function () {
        const wrapper = document.createElement("div");
        const labelElement = document.createElement("label");
        labelElement.textContent = label;
        
        const dateElement = document.createElement("input");
        dateElement.type = "date";
        dateElement.name=fieldName;

        wrapper.appendChild(labelElement);
        wrapper.appendChild(dateElement);
        return wrapper;
      },
    });
    return this;
  }



  addRadioButton(label,options=[]) {

    this.form.fields.push({
      type: "radio",
      label: label,
      options,
      render: function () {
        const wrapper = document.createElement("div");
        const labelElement = document.createElement("span");
        labelElement.textContent = label;
        wrapper.appendChild(labelElement);

        options.forEach(option => {
          const optionWraper = document.createElement("label");
          const  radioElement = document.createElement('input');
          radioElement.type="radio";
          radioElement.name=label;
          radioElement.value=option;
          optionWraper.textContent=option;
          optionWraper.prepend(radioElement);
          wrapper.appendChild(optionWraper);
          
        })        
        return wrapper;
      },
    });
    return this;
  }

  addDropDown(label,options=[]){
    const fieldName = label.toLowerCase().replace(" ", "_");

    this.form.fields.push({
        label,
        options,
        type:"dropdown",
        render:function(){
          const wrapper = document.createElement('div');
          const labelElement = document.createElement('label');
          labelElement.textContent=label;

          const select = document.createElement('select');
          select.name=fieldName;
          options.forEach(text => {
            const option =document.createElement('option')
            option.value=text;

            option.textContent=text;
            select.appendChild(option)
          })
          wrapper.appendChild(labelElement);

          wrapper.appendChild(select);
          return wrapper;
        }
      })
    return this;
  }

  addCheckbox(label,options=[]) {

    this.form.fields.push({
      type: "checkbox",
      label: label,
      options,
      render: function () {
        const wrapper = document.createElement("div");
        const span=document.createElement('span')
        span.textContent=label;
        wrapper.appendChild(span);

        options.forEach(text => {
          const labelElement = document.createElement("label");
          const checkboxElement = document.createElement("input");
          checkboxElement.type = "checkbox";
          checkboxElement.checked=false;
          checkboxElement.name=text;
          labelElement.textContent = text;
          labelElement.prepend(checkboxElement);
          wrapper.appendChild(labelElement);

        })
            
        return wrapper;
      },
    });
    return this;
  }
  addTextArea(label, rows = 4, cols = 50) {
    const fieldName = label.toLowerCase().replace(" ", "_");

    this.form.fields.push({
      type: "textarea",
      label: label,
      rows: rows,
      cols: cols,
      render: function () {
        const wrapper = document.createElement("div");
        const labelElement = document.createElement("label");
        labelElement.textContent = label;
        
        const textAreaElement = document.createElement("textarea");
        textAreaElement.rows = rows;
        textAreaElement.cols = cols;
        textAreaElement.name=fieldName;

        wrapper.appendChild(labelElement);
        wrapper.appendChild(textAreaElement);
        return wrapper;
      },
    });
    return this;
  }
  addNumberInput(label, min = 0, max = 100) {
    const fieldName = label.toLowerCase().replace(" ", "_");

    this.form.fields.push({
      type: "number",
      label: label,
      min: min,
      max: max,
      render: function () {
        const wrapper = document.createElement("div");
        const labelElement = document.createElement("label");
        labelElement.textContent = label;

        const numberElement = document.createElement("input");
        numberElement.type = "number";
        numberElement.min = min;
        numberElement.max = max;
        numberElement.name=fieldName;

        wrapper.appendChild(labelElement);
        wrapper.appendChild(numberElement);
        return wrapper;
      },
    });
    return this;
  }


  addSubmitButton(text = "Submit") {
    this.form.fields.push({
      type: "submit",
      text: text,
      render: function () {
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = text;
        return submitButton;
      },
    });
    return this;
  }


  build(){

    return this.form;
  }
}

const customForm=new FormBuilder();
const login = customForm
              .addTextInputField('name','enter your name')
              .addPasswordInputField('password','enter your passowrd')
              .addRadioButton('Gender',['male','female','others'])
              .addNumberInput("Age", 18, 100)
              .addTextArea("Bio", 5, 40)
              .addDatePicker("Date of Birth")

              .addDropDown('country',['ind','aus','nz'])
              .addCheckbox('Hobbies',['reading','cricket','football'])
              .addCheckbox("Subscribe to newsletter",['remember'])
              .addSubmitButton("Register")

              .build();
login.render('formContainer');


const surveyForm = new FormBuilder()
  .addTextInputField("name","Full Name")
  .addCheckbox("Subscribe to newsletter",['1'])
  .addRadioButton("Gender", ["Male", "Female", "Other"])
  .addSubmitButton("Submit Survey")
  .build();


console.log("\nSurvey Form:");
surveyForm.render('survey');