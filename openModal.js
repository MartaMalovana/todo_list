import addTodo from "./addTodo.js"; 
import closeForm from "./closeForm.js";

const saveButton = document.querySelector('.save');
const form = document.querySelector('.todo_form');
const modalButton = document.querySelector('.add_todo');
const cancelButton = document.querySelector('.cancel');
const textareaName = document.querySelector('.todo_name');
const textareaDescription = document.querySelector('.todo_description');

export default function openModal ({id, name, description}) {
    // opens modal to create new todo
    form.style.display = 'flex';
    // hide button that opens modal
    modalButton.style.display = 'none';
    
    if(id) {
        textareaName.value = name;
        textareaDescription.value = description;
        const selectedItemById = document.querySelector(`#${id}`);
        const selectedName = selectedItemById.querySelector('.card_name');
        const selectedDescription = selectedItemById.querySelector('.card_description');
        const saveChanges = () => {
            selectedName.textContent = textareaName.value;
            selectedDescription.textContent = textareaDescription.value;
        };
        saveButton.addEventListener('click', saveChanges);
        // saveButton.removeEventListener('click', saveChanges);
    } else {
        saveButton.addEventListener('click', e=>addTodo(e,id));
    };

    cancelButton.addEventListener('click', closeForm);
};