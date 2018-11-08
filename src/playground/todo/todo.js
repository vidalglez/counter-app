let listOfTodos = getSavedTodos();

const filterTodo = {
  filterText: '',
  hideCompleted: false
};

renderTodos(listOfTodos, filterTodo)

document.querySelector('#add-todo-form').addEventListener('submit', function(e) {
  let uuid = uuidv4()
    e.preventDefault();
    listOfTodos.push({
      id: uuid,
      title: e.target.elements.addTodoText.value,
      completed: false
    });
    filterTodo.text = '';
    e.target.elements.addTodoText.value = '';
    saveTodos(listOfTodos)
    //renderTodos(listOfTodos, filterTodo)
    location.assign(`/edit-todo.html#${uuid}`)
  });

document.querySelector('#filter-todo-text').addEventListener('input', function(e) {
    filterTodo.filterText = e.target.value;
    renderTodos(listOfTodos, filterTodo)    
  });

document.querySelector('#chk-hide-compl').addEventListener('change', function(e) {
    filterTodo.hideCompleted = e.target.checked;
    renderTodos(listOfTodos, filterTodo)    
  });

window.addEventListener('storage', function(e){
  if(e.key === 'todos'){
    listOfTodos = JSON.parse(e.newValue)
    //saveTodos(listOfTodos)
    renderTodos(listOfTodos, filterTodo)
  }
})  
