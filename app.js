'use strict';

let bd = [
    {'task': 'Estudar JS', 'status': ''},
    {'task': 'netflix', 'status': 'checked'}
]

const createItem = (task, status) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${task}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

const clearTasks = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const refreshScreen = () => {
    clearTasks();
    bd.forEach(item => createItem(item.task, item.status));
}

refreshScreen();