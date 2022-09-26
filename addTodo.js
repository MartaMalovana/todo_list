import closeForm from "./closeForm.js";
import openTodo from './openTodo.js';
import { allTodos } from './allTodos.js';

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
    // creates checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    //creates category
    const cat = document.createElement('p');
    cat.classList.add('card_category');
    let cat_text = null;
    let icon_name = null;
    const showCategory = () => {
        switch(category.value) {
            case 'task': 
                cat_text = 'Task';
                icon_name = "task";
                break;
            case 'random_thought': 
                cat_text = 'Random Thought';
                icon_name = "thought";
                break;
            case 'idea': 
                cat_text = 'Idea';
                icon_name = "idea";
                break;
            default:
                cat_text = 'Task';
                icon_name = "task";
                break;
        };
    };
    showCategory();
    cat.textContent = cat_text;
    // creates category icon
    const cat_icon = document.createElement('span');
    cat_icon.classList.add('cat_icon');
    cat_icon.innerHTML = `<svg class="cat_icon"><use href="./icons.svg#${icon_name}"></use></svg>`;
    // add card to DOM
    card.append(checkbox);
    card.append(cat_icon);
    card.append(cardName);
    card.append(cardTime);
    card.append(cat);
    card.append(cardDescription);
    todos.prepend(card);
    // add todo as object to allTodos
    const newTodo = {
        id: newId,
        name: inputName.value,
        description: inputDescription.value,
        time: todoTime,
        checked: false,
        category: category.value
    };
    allTodos.push(newTodo);

    card.addEventListener('click', openTodo);
    saveButton.removeEventListener('click', addTodo);
    closeForm();
    
}