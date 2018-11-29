'use strict';
//Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return []
  }
};

//Saves todos to localStorage
const saveTodos = listOfTodos => {
  localStorage.setItem('todos', JSON.stringify(listOfTodos));
};

const removeTodo = id => {
  const todoIndex = listOfTodos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    listOfTodos.splice(todoIndex, 1);
  }
};

const toggleTodo = id => {
  const todoIndex = listOfTodos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    listOfTodos[todoIndex].completed = !listOfTodos[todoIndex].completed;
  }
};

const sortTodos = (todos, sortBy) => {
  if (sortBy === 'byEdited') {
    return todos.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return todos.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return todos.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  return todos;
};

//Render applications todos based on filters
const renderTodos = (listOfTodos, filterTodo) => {
  const todosEl = document.querySelector('#todos')
  listOfTodos = sortTodos(listOfTodos, filterTodo.sortBy);
  const filterList = listOfTodos.filter(todo => {
    const todoMatch = todo.title
      .toLowerCase()
      .includes(filterTodo.filterText.toLowerCase());
    const hideMatch = !filterTodo.hideCompleted || !todo.completed;
    return todoMatch && hideMatch;
  });

  const todosLeft = filterList.filter(todo => !todo.completed);

  todosEl.innerHTML = '';

  todosEl.appendChild(generateSummaryDOM(todosLeft));

  if (filterList.length > 0) {
    filterList.forEach(todo => {
      todosEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const pEmptyMsg = document.createElement('p')
    pEmptyMsg.textContent = 'There is no to-dos to show'
    pEmptyMsg.classList.add('empty-message')
    dtodosEl.appendChild(pEmptyMsg)
  }

  
};

//Get the DOM elements for an individual note
const generateTodoDOM = todo => {
  const containerEl = document.createElement('div')
  const todoEl = document.createElement('label')
  const chkTodo = document.createElement('input')
  const elementTodo = document.createElement('a')
  const todoTitleEl = document.createElement('p') 
  const btnRemoveTodo = document.createElement('button')

  btnRemoveTodo.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(listOfTodos);
    renderTodos(listOfTodos, filterTodo);
  });

  //Setup todo checkbox
  chkTodo.setAttribute('type', 'checkbox');
  chkTodo.checked = todo.completed;
  containerEl.appendChild(chkTodo);
  chkTodo.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(listOfTodos);
    renderTodos(listOfTodos, filterTodo);
  });


  if (todo.title) {
    todoTitleEl.textContent = todo.title;
  } else {
    todoTitleEl.textContent = 'Unnamed todo';
  }
  elementTodo.appendChild(todoTitleEl)
  elementTodo.setAttribute('href', `/edit-todo.html#${todo.id}`);
  elementTodo.classList.add('list-item')
  containerEl.appendChild(elementTodo);

  //Setup todo remove button
  btnRemoveTodo.textContent = 'remove'
  btnRemoveTodo.classList.add('button', 'button--text')
  
  /*
  todoEl.appendChild(btnRemoveTodo)
  containerEl.appendChild(todoEl)
  */
  
  todoEl.appendChild(containerEl)
  todoEl.appendChild(btnRemoveTodo)


  //Setup container
  
  containerEl.classList.add('list-item__container')
  todoEl.classList.add('list-item')
  //return containerEl;
  return todoEl
};

//Get the DOM elements for list summary
const generateSummaryDOM = todosLeft => {
  const pCompleted = document.createElement('h2');
  pCompleted.classList.add('list-title')
  const pluralTodo = todosLeft.length === 1 ? 'todo' : 'todos'
  pCompleted.textContent = `You have ${todosLeft.length} ${pluralTodo} left`;
  return pCompleted;
};

//Generate the last edited message
const generateLastEdited = timestamp => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};
