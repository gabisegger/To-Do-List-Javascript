'use strict';

const createItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox">
        <div>${tarefa}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}