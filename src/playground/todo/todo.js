const listOfTodos = [
  {
    title: 'My next trip',
    completed: true
  },
  {
    title: 'Habbits to work on',
    completed: false
  },
  {
    title: 'Office modification',
    completed: false
  },
  {
    title: 'Study Javascript',
    completed: true
  },
  {
    title: 'Get Java Certification',
    completed: false
  }
];

const filterTodo = {
  filterText: '',
  hideCompleted: false
};

const displayTodos = function(listOfTodos, filterTodo) {
  const filterList = listOfTodos.filter(function(todo) {     
      const todoMatch = todo.title.toLowerCase().includes(filterTodo.filterText.toLowerCase()); 
      const hideMatch = !filterTodo.hideCompleted || !todo.completed;
    return todoMatch && hideMatch
  });

  const todosLeft = filterList.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const pCompleted = document.createElement('h3');
  pCompleted.textContent = `You have ${todosLeft.length} todos left`;
  document.querySelector('#todos').appendChild(pCompleted);

  filterList.forEach(function(todo) {
    const pTodo = document.createElement('p');
    document.querySelector('#todos').appendChild(pTodo);
    pTodo.textContent = todo.title;
  });
};

displayTodos(listOfTodos, filterTodo);

document
  .querySelector('#add-todo-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    listOfTodos.push({
      title: e.target.elements.addTodoText.value,
      completed: false
    });
    filterTodo.text = '';
    e.target.elements.addTodoText.value = '';
    displayTodos(listOfTodos, filterTodo);
  });

document
  .querySelector('#filter-todo-text')
  .addEventListener('input', function(e) {
    filterTodo.filterText = e.target.value;
    displayTodos(listOfTodos, filterTodo);
  });

document
  .querySelector('#chk-hide-compl')
  .addEventListener('change', function(e) {
    filterTodo.hideCompleted = e.target.checked;
    displayTodos(listOfTodos, filterTodo);
  });
