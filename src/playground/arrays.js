//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Arrayclear
const FgGreen = '\x1b[32m';
const FgBlue = '\x1b[34m';
const Reset = '\x1b[0m';

const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5'];

console.log('Pushing an item at the end of array with push');
notes.push('A new note');
console.log(notes);

const removed = notes.pop();
console.log(`${notes}, element removed wit pop: ${removed}`);

console.log('Pushing an item at the beginning of the array with unshift');
notes.unshift('My first note');
console.log(notes);

const removed2 = notes.shift();
console.log(`Removing first element with shift: ${removed2}`);

notes.splice(2, 0, 'This is my new item added wit splice');

console.log(notes);

const todos = ['Study', 'Play', 'Eat', 'Sleep', 'Workout'];
console.log(todos);
//Delete the 3rd itme
todos.splice(2, 1);
//Add a new item onto the end
todos.push('A new item');
//Remove the first item from the list
todos.shift();

console.log(todos);

todos.forEach(function(item, index) {
  console.log(`${index + 1} - ${item}`);
});

console.log(notes.indexOf('Note 5'));

const myObjs = [
  {
    title: 'My next trip',
    body: 'I would like to go Germany'
  },
  {
    title: 'Habbits to work on',
    body: 'Get some diet'
  },
  {
    title: 'Office modification',
    body: 'New Seat!'
  }
];

const index = myObjs.findIndex(function(obj, index) {
  return obj.title === 'Habbits to work on';
});

console.log(`myObj.findIndex: ${index}`);

//This function is  gonna find the index if there is a match, then it will access element
// array directly through index
const objFound = function(myObjs, titleToFind) {
  const index = myObjs.findIndex(function(obj, index) {
    return obj.title.toLowerCase() === titleToFind.toLowerCase();
  });
  return myObjs[index];
};

console.log(objFound(myObjs, 'office ModificatioN'));

//This function is pretty similar than above but it finds item directly,
//so no index is required
const otherFound = function(myObjs, titleToFind) {
  return myObjs.find(function(item) {
    return item.title.toLowerCase() === titleToFind.toLowerCase();
  });
};

console.log(otherFound(myObjs, 'mY next trip'));

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

const deleteTodo = function(listOfTodos, itemToDelete) {
  const indexFound = listOfTodos.findIndex(function(item, index) {
    return item.title.toLowerCase() === itemToDelete.toLowerCase();
  });
  console.log('indexFound ' + indexFound);
  if (indexFound > -1) {
    listOfTodos.splice(indexFound, 1);
  }
};

deleteTodo(listOfTodos, 'Habbits to work on');
console.log(FgGreen, 'List of todos after element found and deleted: ');
console.log(FgBlue, listOfTodos);

const findTodos = function(listOfTodos, todoText) {
  return listOfTodos.filter(function(todo) {
    const matchTitle = todo.title.toLowerCase().includes(todoText);
    const matchBody = todo.body.toLowerCase().includes(todoText);
    return matchTitle || matchBody;
  });
};

console.log(FgGreen, '\nFiltering todos by ne');
console.log(FgBlue, findTodos(listOfTodos, 'ne'));

const getThingsToDo = function(listOfTodos) {
  return listOfTodos.filter(function(todo) {
    return !todo.completed;
  });
};

console.log(FgGreen, '\nFiltering by todos not completed');
console.log(FgBlue, getThingsToDo(listOfTodos));

const sortTodos = function(listOfTodos) {
  listOfTodos.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

console.log(FgGreen, '\nSorting list of todos');
sortTodos(listOfTodos)
console.log(FgBlue, listOfTodos);


const sortTodosCompleted = function(listOfTodos){
    listOfTodos.sort(function(a,b){
        if(a.completed && b.completed){
            return 0
        } else {
            if(a.completed){
                return 1
            }
            return -1
        }
    })
}

console.log(FgGreen, '\nSorting list of todos by completed');
sortTodosCompleted(listOfTodos)
console.log(FgBlue, listOfTodos);

console.log(Reset);
