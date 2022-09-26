import openModal from './openModal.js';

const modalButton = document.querySelector('.add_todo');
const changeColor = document.querySelector('.yellow_blue');
const container = document.querySelector('.container');
const body = document.querySelector('body');

function showTodos () {
    changeColor.addEventListener('click', () => {
        if(!body.classList.contains('ua_color')) {
            body.classList.remove('white_color');
            body.classList.add('ua_color');
        } else {
            body.classList.remove('ua_color');
            body.classList.add('white_color');
        };
    });
    modalButton.addEventListener('click', openModal);
};

showTodos();
