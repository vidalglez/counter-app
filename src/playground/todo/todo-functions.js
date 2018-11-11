//Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

//Saves todos to localStorage
const saveTodos = (listOfTodos) => {
  localStorage.setItem('todos', JSON.stringify(listOfTodos));
};

const removeTodo = (id) => {
    const todoIndex = listOfTodos.findIndex((todo) => todo.id === id);

    if(todoIndex > -1) {
      listOfTodos.splice(todoIndex, 1);
    }
}

const toggleTodo = (id) => {
  const todoIndex = listOfTodos.findIndex((todo) => todo.id === id);

    if(todoIndex > -1) {
      listOfTodos[todoIndex].completed = !listOfTodos[todoIndex].completed
    }
}

const sortTodos = (todos, sortBy) => {
  if (sortBy === 'byEdited'){
    return todos.sort((a, b) => {
      if(a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return todos.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })    
  } else if(sortBy === 'alphabetical'){
      return todos.sort((a, b) => {
        if(a.title.toLowerCase() < b.title.toLowerCase) {
          return -1
        } else if(a.title > b.title){
          return 1
        } else {
          return 0
        }
      })
    }
  return todos
}

//Render applications todos based on filters
const renderTodos = (listOfTodos, filterTodo) => {
    listOfTodos = sortTodos(listOfTodos, filterTodo.sortBy)
    const filterList = listOfTodos.filter((todo) => {     
        const todoMatch = todo.title.toLowerCase().includes(filterTodo.filterText.toLowerCase()); 
        const hideMatch = !filterTodo.hideCompleted || !todo.completed;
      return todoMatch && hideMatch
    });
  
    const todosLeft = filterList.filter((todo) =>  !todo.completed);
  
    document.querySelector('#todos').innerHTML = '';

    document.querySelector('#todos').appendChild(generateSummaryDOM(todosLeft));

    filterList.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
  };

  //Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const divTodo = document.createElement('div')
  const chkTodo = document.createElement('input')  
  const elementTodo = document.createElement('a')
  const btnRemoveTodo = document.createElement('button')

  btnRemoveTodo.addEventListener('click', () => {
    console.log(todo)    
    removeTodo(todo.id)
    saveTodos(listOfTodos)
    renderTodos(listOfTodos, filterTodo)
  });

  //Setup todo checkbox
  chkTodo.setAttribute('type','checkbox')
  chkTodo.checked = todo.completed  
  divTodo.appendChild(chkTodo)
  chkTodo.addEventListener('change', () => {    
    toggleTodo(todo.id);
    saveTodos(listOfTodos)
    renderTodos(listOfTodos, filterTodo)
  });

  //Setup todo text
  if(todo.title !== undefined) { 
    elementTodo.textContent = todo.title;
  } else {
    elementTodo.textContent = 'Unnamed todo';
  }
  elementTodo.setAttribute('href', `/edit-todo.html#${todo.id}`)
  divTodo.appendChild(elementTodo);

  //Setup todo remove button
  btnRemoveTodo.textContent = 'X'
  divTodo.appendChild(btnRemoveTodo)
  return divTodo
};


//Get the DOM elements for list summary
const generateSummaryDOM = (todosLeft) => {  
  const pCompleted = document.createElement('h3');
  pCompleted.textContent = `You have ${todosLeft.length} todos left`;
  return pCompleted;
};

//Generate the last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}