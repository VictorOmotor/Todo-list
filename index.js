// Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * 
    Some further requirements:
    - the input field must be reset when the add button is clicked on 
    - the todo list must show the most recent first
 */


let todoList = [];

let addButton = document.getElementById('add-button');
let inputtedText = document.getElementById('new-task');
let deleteButton = document.getElementById('delete-button');
let toDoField = document.getElementById('incomplete-tasks');

function addItem () {
    let text = inputtedText.value.trim();
    if (text) {
      let item = {text: text, timestamp: Date.now()};
      todoList.unshift(item);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      renderTodoList();
      inputtedText.value = '';
    }
}
    
    
function deleteItem (item) {
  todoList.splice(item, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}

function renderTodoList() {
    toDoField.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
      let listItem = document.createElement('li');
      let deleteButton = document.createElement('button');
      let textNode = document.createElement('p');
      //deleteButton.style.backgroundColor = "black"
     // listItem.style.backgroundColor = "gray"
     deleteButton.classList.add('delete-button');
  
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteItem(i);
      });
  
      textNode.innerHTML = todoList[i].text;
  
      listItem.appendChild(textNode);
      listItem.appendChild(deleteButton);
  
      toDoField.appendChild(listItem);
    }
}



addButton.addEventListener('click', addItem);

let storedTodoList = localStorage.getItem('todoList');
if (storedTodoList) {
  todoList = JSON.parse(storedTodoList);
  renderTodoList();
}
