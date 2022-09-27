import { allTodos } from './allTodos.js';
import showCategory from './showCategory.js';
import unarchiveCard from './unarchiveCard.js';
import createTodo from './createTodo.js';
import openTodo from './openTodo.js';

const todos = document.querySelector('.todos');
const archived = document.querySelector('.archived_container');
const buttonArchived = document.querySelector('.archived');
const createCardButton = document.querySelector('.add_todo');
const returnButton = document.querySelector('.return');

export default function openArchived () {
    console.log(allTodos);
    archived.style.display = 'block';
    buttonArchived.style.display = 'none';
    createCardButton.style.display = 'none';
    returnButton.style.display = 'block';
    const archivedList = document.querySelector('.archTodos');
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
        unarchiveButton.classList.add('unarchive');
        unarchiveButton.innerHTML = `<svg class="icon"><use id='unarchive' href="./icons.svg#unarchive"></use></svg>`;
        archivedTodo.append(unarchiveButton);
        archivedInDom.append(archivedTodo);
        archived.append(archivedInDom);

        unarchiveButton.addEventListener('click', () => {
            const selectedTodo = allTodos.find(el => el.id === todo.id);
            selectedTodo.archived = false;
            const selectedTodoDom = document.getElementById(`${todo.id}`);
            selectedTodoDom.remove();
            const returnedTodo = createTodo(selectedTodo);
            
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button_container');
            const change = document.createElement('button');
            change.type = 'button';
            change.classList.add('change');
            change.innerHTML = `<svg class="icon"><use id='change' href="./icons.svg#change"></use></svg>`;
            const archive = document.createElement('button');
            change.type = 'button';
            archive.classList.add('archive');
            archive.innerHTML = `<svg class="icon"><use id='archive' href="./icons.svg#archive"></use></svg>`;
            buttonContainer.append(change, archive);
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
            // archived.innerHTML = '';
        })
    });
    

};