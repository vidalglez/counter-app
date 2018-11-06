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
  
    document.querySelector('#todos').innerHTML = '';

    document.querySelector('#todos').appendChild(generateSummaryDOM(todosLeft));

    filterList.forEach(function(todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
  };

  //Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
  const divTodo = document.createElement('div')
  const chkTodo = document.createElement('input')  
  const spanTodo = document.createElement('span')
  const btnRemoveTodo = document.createElement('button')

  //Setup todo checkbox
  chkTodo.setAttribute('type','checkbox')
  divTodo.appendChild(chkTodo)

  //Setup todo text
  spanTodo.textContent = todo.title;
  divTodo.appendChild(spanTodo);

  //Setup todo remove button
  btnRemoveTodo.textContent = 'X'
  divTodo.appendChild(btnRemoveTodo)
  return divTodo
};


//Get the DOM elements for list summary
const generateSummaryDOM = function(todosLeft) {  
  const pCompleted = document.createElement('h3');
  pCompleted.textContent = `You have ${todosLeft.length} todos left`;
  return pCompleted;
};
