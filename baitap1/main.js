const inputEl = document.getElementById('input');
const tiltleEl = document.getElementById('title');
const listEl = document.getElementById('list');
const checkBoxEl = document.getElementById('checkBox');
const removeEl = document.getElementById('close');

var data=[]

document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // 13 is the key code for the Enter key
      var id = event.target.value;
      console.log(id);
      const inputList = document.createElement('ul');    
      const newTodo = document.createTextNode(input.value); 
      inputList.appendChild(newTodo);                       
      inputList.className ='li class=" border-b-[2px] border-solid px-[60px] py-[16px] bor-border" '
      list.append(inputList);
    }
  });


  