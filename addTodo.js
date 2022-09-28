import closeForm from "./closeForm.js";
import openTodo from './openTodo.js';
import allTodos from './allTodos.js';
import createTodo from "./createTodo.js";
import createButtons from "./createButtons.js";
import createCounter from "./createCounter.js";

const todos = document.querySelector('.todos');
const saveButton = document.querySelector('.save');
const inputName = document.querySelector('.todo_name');
const inputDescription = document.querySelector('.todo_description');
const category = document.querySelector('#category');

export default function addTodo (e) {
    e.preventDefault();
    const newId = Math.round(Math.random()*100000).toString();
    const todoTime = `${new Date().toLocaleString('en-US', {month: "long"})} ${new Date().getDate()}, ${new Date().getFullYear()}`;
    const reg = /[0-9]{1,2}[\/]{1}[0-9]{1,2}[\/]{1}[0-9]{4}/g;
    const datesInDescription = inputDescription.value.match(reg);
    
    const card = createTodo({
        id: newId, 
        name: inputName.value, 
        description: inputDescription.value, 
        time: todoTime,
        category: category.value,
        dates: datesInDescription});

    const buttonContainer = createButtons();

    card.append(buttonContainer);
    todos.prepend(card);

    // add todo as object to allTodos
    const newTodo = {
        id: newId,
        name: inputName.value,
        description: inputDescription.value,
        time: todoTime,
        category: category.value,
        dates: datesInDescription,
        archived: false
    };
    allTodos.push(newTodo);
    createCounter();
    localStorage.setItem('todos', JSON.stringify(allTodos));

    buttonContainer.addEventListener('click', openTodo);
    saveButton.removeEventListener('click', addTodo);
    closeForm();
    
}