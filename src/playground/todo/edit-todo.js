'use strict'
const todoId = location.hash.substring(1)
let listOfTodos = getSavedTodos()
let todo = listOfTodos.find(function(todo){
    return todo.id === todoId
});

if(!todo) {    
    location.assign('todos.html')
}

const todoText = document.querySelector("#edit-todo-text")
todoText.value = todo.title

const spanLast = document.querySelector('#last-edited-todo')
spanLast.textContent = generateLastEdited(todo.updatedAt)

todoText.addEventListener('input', (e) => {
    todo.title = e.target.value
    todo.updatedAt = moment().valueOf()
    spanLast.textContent = generateLastEdited(todo.updatedAt)
    saveTodos(listOfTodos)
})

document.querySelector("#btn-remove-todo").addEventListener('click', (e) => {
    removeTodo(todoId)
    saveTodos(listOfTodos)
    location.assign('todos.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'todos'){
        listOfTodos = JSON.parse(e.newValue)
        todo = listOfTodos.find(function(todo){
            return todo.id === todoId
        });

        if(!todo) {    
            location.assign('todos.html')
        }

        todoText.value = todo.title
        spanLast.textContent = generateLastEdited(todo.updatedAt)
    }
})