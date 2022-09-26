import addTodo from "./addTodo.js"; 
import closeForm from "./closeForm.js";
import { allTodos } from "./allTodos.js";

const saveButton = document.querySelector('.save');
const form = document.querySelector('.todo_form');
const modalButton = document.querySelector('.add_todo');
const cancelButton = document.querySelector('.cancel');
const textareaName = document.querySelector('.todo_name');
const textareaDescription = document.querySelector('.todo_description');
const deleteButton = document.querySelector('.delete_todo');

export default function openModal ({id, name, description}) {
    deleteButton.style.display = 'block';
    // opens modal to create new todo
    form.style.display = 'flex';
    // hide button that opens modal
    modalButton.style.display = 'none';
    if(id) {
        textareaName.value = name;
        textareaDescription.value = description;
        const selectedItemById = document.getElementById(`${id}`);
        const selectedName = selectedItemById.querySelector('.card_name');
        const selectedDescription = selectedItemById.querySelector('.card_description');
        const todoInArray = allTodos.find(todo => todo.id === id);
        const saveChanges = () => {
            selectedName.textContent = textareaName.value;
            selectedDescription.textContent = textareaDescription.value;
            todoInArray.name = textareaName.value;
            todoInArray.description = textareaDescription.value;
            saveButton.removeEventListener('click', saveChanges);
            deleteButton.removeEventListener('click', deleteCard);
            closeForm();
        };
        const deleteCard = () => {
            selectedItemById.remove();
            const indexInArray = allTodos.indexOf(todoInArray);
            allTodos.splice(indexInArray, 1);
            deleteButton.removeEventListener('click', deleteCard);
            closeForm();
        };
        saveButton.addEventListener('click', saveChanges);
        deleteButton.addEventListener('click', deleteCard);
    } else {
        saveButton.addEventListener('click', addTodo);
    };
    cancelButton.addEventListener('click', closeForm);
};