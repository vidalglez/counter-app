const todoId = location.hash.substring(1)
let listOfTodos = getSavedTodos()
let todo = listOfTodos.find(function(todo){
    return todo.id === todoId
});

if(todo === undefined) {    
    location.assign('todos.html')
}

const todoText = document.querySelector("#edit-todo-text")
todoText.value = todo.title
todoText.addEventListener('input', function(e) {
    todo.title = e.target.value
    saveTodos(listOfTodos)
})

document.querySelector("#btn-remove-todo").addEventListener('click', function(e){
    removeTodo(todoId)
    saveTodos(listOfTodos)
    location.assign('todos.html')
})

window.addEventListener('storage', function(e) {
    if(e.key === 'todos'){
        listOfTodos = JSON.parse(e.newValue)
        todo = listOfTodos.find(function(todo){
            return todo.id === todoId
        });

        if(todo === undefined) {    
            location.assign('todos.html')
        }

        todoText.value = todo.title
    }
})