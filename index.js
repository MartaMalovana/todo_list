import openModal from './openModal.js';
import openTodo from './openTodo.js';
import { allTodos } from './allTodos.js';

const modalButton = document.querySelector('.add_todo');
const card = document.querySelector('.card');

function showTodos () {
    modalButton.addEventListener('click', openModal);
    // if(card) {
    //     card.addEventListener('click', openTodo);
    // }
};

showTodos();
