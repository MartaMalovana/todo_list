const body = document.querySelector('body');
const todoForm = document.querySelector('.todo_form');

export default function changeColor() {
    if (!body.classList.contains('ua_color')) {
        body.classList.remove('white_color');
        body.classList.add('ua_color');
        todoForm.classList.remove('white_color');
        todoForm.classList.add('ua_color');
    } else {
        body.classList.remove('ua_color');
        body.classList.add('white_color');
        todoForm.classList.remove('ua_color');
        todoForm.classList.add('white_color');
    };
};