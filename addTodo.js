import closeForm from "./closeForm.js";
import openTodo from './openTodo.js';

const todos = document.querySelector('.todos');
const saveButton = document.querySelector('.save');
const inputName = document.querySelector('.todo_name');
const inputDescription = document.querySelector('.todo_description');

export default function addTodo (e) {
    e.preventDefault();
    // creates card for new todo
    const card = document.createElement('div');
    card.classList.add('card');
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
    cardTime.textContent = new Date().toLocaleString();
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
    
    card.addEventListener('click', e=>openTodo(e));

    closeForm();
    saveButton.removeEventListener('click', addTodo);
}