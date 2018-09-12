//Fetch existing todos from localStorage
const getSavedTodos = function() {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

//Saves todos to localStorage
const saveTodos = function(listOfTodos) {
  localStorage.setItem('todos', JSON.stringify(listOfTodos));
};

//Render applications todos based on filters
const renderTodos = function(listOfTodos, filterTodo) {
    const filterList = listOfTodos.filter(function(todo) {     
        const todoMatch = todo.title.toLowerCase().includes(filterTodo.filterText.toLowerCase()); 
        const hideMatch = !filterTodo.hideCompleted || !todo.completed;
      return todoMatch && hideMatch
    });
  
    const todosLeft = filterList.filter(function(todo) {
      return !todo.completed;
    });
  
    const pCompleted = generateSummaryDOM(todosLeft)
    document.querySelector('#todos').appendChild(pCompleted);
  
    filterList.forEach(function(todo) {
      generateTodoDOM(todo)
    });
  };

  //Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
  const pTodo = document.createElement('p');
  document.querySelector('#todos').appendChild(pTodo);
  pTodo.textContent = todo.title;
};


//Get the DOM elements for list summary
const generateSummaryDOM = function(todosLeft) {
  document.querySelector('#todos').innerHTML = '';
  const pCompleted = document.createElement('h3');
  pCompleted.textContent = `You have ${todosLeft.length} todos left`;
  return pCompleted;
};