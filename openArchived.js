import allTodos from './allTodos.js';
import createTodo from './createTodo.js';
import openTodo from './openTodo.js';
import createButtons from './createButtons.js';
import createCounter from "./createCounter.js";

const todos = document.querySelector('.todos');
const archived = document.querySelector('.archived_container');
const buttonArchived = document.querySelector('.archived');
const createCardButton = document.querySelector('.add_todo');
const returnButton = document.querySelector('.return');

export default function openArchived () {
    archived.style.display = 'block';
    buttonArchived.style.display = 'none';
    createCardButton.style.display = 'none';
    returnButton.style.display = 'block';
    const archivedTodos = allTodos.filter(todo => todo.archived === true);
    todos.style.display = 'none';
    const archivedInDom = document.createElement('div');
    archivedInDom.classList.add('archTodos');
    archivedTodos.map(todo => {
        if(document.getElementById(`${todo.id}`)) {
            return;
        };
        const archivedTodo = createTodo(todo);
        const unarchiveButton = document.createElement('button');
        unarchiveButton.type = 'button';
        unarchiveButton.classList.add('button');
        unarchiveButton.innerHTML = `<svg class="icon unarchive"><use id='unarchive' href="./icons.svg#unarchive"></use></svg>`;
        archivedTodo.append(unarchiveButton);
        archivedInDom.append(archivedTodo);
        archived.append(archivedInDom);

        unarchiveButton.addEventListener('click', () => {
            const selectedTodo = allTodos.find(el => el.id === todo.id);
            selectedTodo.archived = false;
            createCounter();
            localStorage.setItem('todos', JSON.stringify(allTodos));

            const selectedTodoDom = document.getElementById(`${todo.id}`);
            selectedTodoDom.remove();
            const returnedTodo = createTodo(selectedTodo);
            
            const buttonContainer = createButtons();
            buttonContainer.addEventListener('click', openTodo);
            returnedTodo.append(buttonContainer);
            todos.append(returnedTodo);

        });
        returnButton.addEventListener('click', () => {
            todos.style.display = 'block';
            archived.style.display = 'none';
            returnButton.style.display = 'none';
            buttonArchived.style.display = 'block';
            createCardButton.style.display = 'block';
        })
    });
    

};