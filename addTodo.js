import { nanoid } from './node_modules/nanoid/nanoid.js';
import closeForm from "./closeForm.js";
import openTodo from './openTodo.js';
import { allTodos } from './allTodos.js';

const todos = document.querySelector('.todos');
const saveButton = document.querySelector('.save');
const inputName = document.querySelector('.todo_name');
const inputDescription = document.querySelector('.todo_description');

export default function addTodo (e) {
    e.preventDefault();
    // creates card for new todo
    const card = document.createElement('div');
    card.classList.add('card');
    //creates id
    const newId = nanoid();
    card.id = newId;
    // creates p for new todo's title
    const cardName = document.createElement('p');
    cardName.classList.add('card_name');
    cardName.textContent = inputName.value;
    // creates p for new todo's description
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card_description');
    cardDescription.textContent = inputDescription.value;
    // creates p for current time when todo was created
    const cardTime = document.createElement('p');
    cardTime.classList.add('card_time');
    const todoTime = new Date().toLocaleString();
    cardTime.textContent = todoTime;
    // creates checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    // add new todo to dom
    card.append(checkbox);
    card.append(cardName);
    card.append(cardDescription);
    card.append(cardTime);
    todos.prepend(card);
    // add todo as object to allTodos
    const newTodo = {
        id: newId,
        name: inputName.value,
        description: inputDescription.value,
        time: todoTime,
        checked: false 
    };
    allTodos.push(newTodo);
    
    card.addEventListener('click', e=>openTodo(e));
    saveButton.removeEventListener('click', addTodo);
    console.log(44, allTodos);
    closeForm();

}