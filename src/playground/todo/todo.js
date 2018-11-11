let listOfTodos = getSavedTodos();

const filterTodo = {
  filterText: '',
  hideCompleted: false,
  sortBy: 'byEdited'
};

renderTodos(listOfTodos, filterTodo)

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
  let uuid = uuidv4()
  const timestamp = moment().valueOf()
  const title = e.target.elements.addTodoText.value.lenght > 0 ? e.target.elements.addTodoText.value : 'Unnamed todo'
  e.preventDefault();
  listOfTodos.push({
    id: uuid,
    title: title,
    completed: false,
    createdAt: timestamp,
    updatedAt: timestamp
  });
  filterTodo.text = '';
  e.target.elements.addTodoText.value = '';
  saveTodos(listOfTodos)
  //renderTodos(listOfTodos, filterTodo)
  location.assign(`/edit-todo.html#${uuid}`)
});

document.querySelector('#filter-todo-text').addEventListener('input', (e) => {
  filterTodo.filterText = e.target.value;
  renderTodos(listOfTodos, filterTodo)
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filterTodo.sortBy = e.target.value
  renderTodos(listOfTodos, filterTodo)
})

document.querySelector('#chk-hide-compl').addEventListener('change', (e) => {
  filterTodo.hideCompleted = e.target.checked;
  renderTodos(listOfTodos, filterTodo)
});

window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    listOfTodos = JSON.parse(e.newValue)
    //saveTodos(listOfTodos)
    renderTodos(listOfTodos, filterTodo)
  }
})