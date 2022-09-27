import openModal from './openModal.js';
import changeColor from './changeColor.js';
import openArchived from './openArchived.js';

const modalButton = document.querySelector('.add_todo');
const changeColorButton = document.querySelector('.yellow_blue');
const archivedButton = document.querySelector('.archived');

function showTodos () {
    changeColorButton.addEventListener('click', changeColor);
    modalButton.addEventListener('click', openModal);
    archivedButton.addEventListener('click', openArchived);
};

showTodos();
