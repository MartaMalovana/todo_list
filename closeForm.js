import modalButtonDown from "./modalButtonDown.js";

const inputName = document.querySelector('.todo_name');
const inputDescription = document.querySelector('.todo_description');
const form = document.querySelector('.todo_form');

export default function closeForm () {
    inputName.value = '';
    inputDescription.value = '';
    form.style.display = 'none';
    modalButtonDown();
}