import closeForm from "./closeForm.js";
import openTodo from './openTodo.js';
import { allTodos } from './allTodos.js';
import showCategory from "./showCategory.js";

const todos = document.querySelector('.todos');
const saveButton = document.querySelector('.save');
const inputName = document.querySelector('.todo_name');
const inputDescription = document.querySelector('.todo_description');
const category = document.querySelector('#category');

export default function addTodo (e) {
    e.preventDefault();
    // creates card for new todo
    const card = document.createElement('div');
    card.classList.add('card');
    //creates id
    const newId = Math.round(Math.random()*100000).toString();
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
    const todoTime = `${new Date().toLocaleString('en-US', {month: "long"})} ${new Date().getDate()}, ${new Date().getFullYear()}`;
    cardTime.textContent = todoTime;
    //creates category
    const cat = document.createElement('p');
    cat.classList.add('card_category');
    let cat_text = null;
    let icon_name = null;
    const result = showCategory(category.value);
    cat.textContent = result.cat_text;
    // creates category icon
    const cat_icon = document.createElement('span');
    cat_icon.classList.add('category_icon');
    cat_icon.innerHTML = `<svg class="cat_icon"><use href="./icons.svg#${result.icon_name}"></use></svg>`;
    // Dates from description
    const reg = /[0-9]{1,2}[\/]{1}[0-9]{1,2}[\/]{1}[0-9]{4}/g;
    const datesInDescription = inputDescription.value.match(reg);
    const dates = document.createElement('p');
    dates.classList.add('dates');
    dates.textContent = datesInDescription ? datesInDescription.join(', ') : null;
    // add div for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button_container');
    // add button "change"
    const change = document.createElement('button');
    change.type = 'button';
    change.classList.add('change');
    change.innerHTML = `<svg class="icon"><use id='change' href="./icons.svg#change"></use></svg>`;
    // add button archive
    const archive = document.createElement('button');
    change.type = 'button';
    archive.classList.add('archive');
    archive.innerHTML = `<svg class="icon"><use id='archive' href="./icons.svg#archive"></use></svg>`;
    // add card to DOM
    buttonContainer.append(change, archive);
    card.append(cat_icon, cardName, cardTime, cat, cardDescription, dates, buttonContainer);
    todos.prepend(card);
    // add todo as object to allTodos
    const newTodo = {
        id: newId,
        name: inputName.value,
        description: inputDescription.value,
        time: todoTime,
        checked: false,
        category: category.value,
        dates: datesInDescription,
        archived: false
    };
    allTodos.push(newTodo);

    buttonContainer.addEventListener('click', openTodo);
    saveButton.removeEventListener('click', addTodo);
    closeForm();
    
}