import openModal from './openModal.js';

const modalButton = document.querySelector('.add_todo');
const card = document.querySelector('.card');

function showTodos () {

    modalButton.addEventListener('click', openModal);
};

showTodos();
