'use strict';

const getBD = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBD = (bd) => localStorage.setItem('todoList', JSON.stringify(bd));

const createItem = (task, status, index) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-index=${index}>
        <div>${task}</div>
        <input type="button" value="X" data-index=${index}>
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
    const bd = getBD();
    bd.forEach((item, index) => createItem(item.task, item.status, index));
}

const createNewTask = (e) => {
    const key = e.key;
    const text = e.target.value;
    if (key === 'Enter'){
        const bd = getBD();
        bd.push ({'task': text,'status': ''})
        setBD(bd);
        refreshScreen();
        e.target.value = '';
    }
}

const removeItem = (index) => {
    const bd = getBD();
    bd.splice(index, 1);
    setBD(bd);
    refreshScreen();
}

const updateItem = (index) => {
    const bd = getBD();
    bd[index].status = bd[index].status === '' ? 'checked' : '';
    setBD(bd);
    refreshScreen();
}

const clickItem = (e) => {
    const element = e.target;
    if(element.type === 'button'){
        const index = element.dataset.index;
        removeItem(index);
    }else if(element.type === 'checkbox'){
        const index = element.dataset.index;
        updateItem(index);
    }
}

document.getElementById('newItem').addEventListener('keypress', createNewTask);
document.getElementById('todoList').addEventListener('click', clickItem);

refreshScreen();