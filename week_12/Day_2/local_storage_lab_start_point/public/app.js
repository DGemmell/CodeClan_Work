// The items should be persisted as an array of strings,
// saved to local storage. On load, the app should first display any data
// that is already saved in local storage.
//
// When a user enters a new To-Do item, the app should:
//
// append the new item to the html list
// save the new item to local storage

// HINT: Tackle this by first implementing the handleButtonClick function,
// then addItem, then save and then populate.

var init = function () {

  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);

// to loop through the array of todos
  var populate = function (todos) {
    todos.forEach(function,item){
      addItem(item);

    });
  }


  // this function needs to:
  // - loop through the array of todos, invoking addItem() for each todo item- done
}
// to add a new item to the input box
var addItem = function (item) {
  var ul = document.querySelector('#todo-list');
  var newItem = document.createElement('li');
  newItem.innerText = item;
  ul.appendChild(newItem);
  // this function needs to:
  // - create an li element containing the string 'item'
  // - append the li to the "todo-list" ul
}

var handleButtonClick = function () {
  var todo = getInputValue('#todo');
  setDefinitionText(#todo-display, todo);
  varjsonString =JSON.stringify(todo-list);
  localStorage.setItem('todo', jsonString);
  // this function needs to:
  // - get hold of the input box's value
  // - append it to the "todo-list" ul by invoking addItem()
  // - add it to local storage by invoking save()
}

var save = function (newItem) {
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  todoArray.push(newItem);
  localStorage.setItem('todoList', JSON.stringify(todosArray));
}



  // this function needs to:
  // - get the data back from local storage and parse to an array
  // - add the newItem to the array
  // - stringify the updated array
  // - save it back to localstoage

window.addEventListener('load', init);
