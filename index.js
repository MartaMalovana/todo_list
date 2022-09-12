import openModal from './openModal.js';

const modalButton = document.querySelector('.add_todo');
const changeColor = document.querySelector('.yellow_blue');
const container = document.querySelector('.container');

function showTodos () {
    changeColor.addEventListener('click', () => {
        if(!container.classList.contains('ua_color')) {
            container.classList.remove('white_color');
            container.classList.add('ua_color');
        } else {
            container.classList.remove('ua_color');
            container.classList.add('white_color');
        };
    });
    modalButton.addEventListener('click', openModal);
};

showTodos();
