import openModal from './js/openModal.js';
import changeColor from './js/changeColor.js';
import openArchived from './js/openArchived.js';
import createCounter from './js/createCounter.js';
import startTodos from './js/startTodos.js';

const modalButton = document.querySelector('.add_todo');
const changeColorButton = document.querySelector('.yellow_blue');
const archivedButton = document.querySelector('.archived');

function showTodos() {
    changeColorButton.addEventListener('click', changeColor);
    modalButton.addEventListener('click', openModal);
    archivedButton.addEventListener('click', openArchived);
    createCounter();
    startTodos();
};

showTodos();
