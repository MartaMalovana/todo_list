import addTodo from "./addTodo.js"; 
import closeForm from "./closeForm.js";

const saveButton = document.querySelector('.save');
const form = document.querySelector('.todo_form');
const modalButton = document.querySelector('.add_todo');
const cancelButton = document.querySelector('.cancel');

export default function openModal () {
    // opens modal to create new todo
    form.style.display = 'flex';
    // hide button that opens modal
    modalButton.style.display = 'none';

    saveButton.addEventListener('click', addTodo);
    cancelButton.addEventListener('click', closeForm);
};