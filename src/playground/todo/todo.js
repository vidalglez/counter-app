const listOfTodos = [
  {
    title: 'My next trip',
    body: 'I would like to go Germany',
    completed: true
  },
  {
    title: 'Habbits to work on',
    body: 'Get some diet',
    completed: false
  },
  {
    title: 'Office modification',
    body: 'New Seat!',
    completed: false
  },
  {
    title: 'Study Javascript',
    body: 'Buy a book',
    completed: true
  },
  {
    title: 'Get Certification',
    body: 'Pay exam',
    completed: false
  }
];

const filterTodo = {
  filterText: ''
};

const todosLeft = listOfTodos.filter(function(todo) {
  return !todo.completed;
});

const pCompleted = document.createElement('h3');
pCompleted.textContent = `You have ${todosLeft.length} todos left`;
document.querySelector('body').appendChild(pCompleted);

const displayTodos = function(listOfTodos, filterTodo) {
  const filterList = listOfTodos.filter(function(todo) {
    return todo.title.toLowerCase().includes(filterTodo.filterText.toLowerCase())
  });

  document.querySelector("#todos").innerHTML = ''

  filterList.forEach(function(todo) {
    const pTodo = document.createElement('p');
    document.querySelector('#todos').appendChild(pTodo);
    pTodo.textContent = todo.title;
  });
};

displayTodos(listOfTodos, filterTodo)

document.querySelector('#add-todo').addEventListener('click', function(e) {
  e.target.textContent = 'A new message';
});

document.querySelector('#remove-all').addEventListener('click', function(e) {
  console.log('Remove all clicked');
});

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
  filterTodo.filterText = e.target.value
  displayTodos(listOfTodos, filterTodo)
});
