import addTodo from "./addTodo.js"; 
import closeForm from "./closeForm.js";
import { allTodos } from "./allTodos.js";
import showCategory from "./showCategory.js";
import createCounter from "./createCounter.js";

const saveButton = document.querySelector('.save');
const form = document.querySelector('.todo_form');
const modalButton = document.querySelector('.add_todo');
const cancelButton = document.querySelector('.cancel');
const textareaName = document.querySelector('.todo_name');
const textareaDescription = document.querySelector('.todo_description');
const deleteButton = document.querySelector('.delete_todo');
const categ = document.querySelector('#category');
const archived = document.querySelector('.archived');

export default function openModal ({id, name, description, category}) {
    deleteButton.style.display = 'block';
    // opens modal to create new todo
    form.style.display = 'flex';
    // hide button that opens modal
    modalButton.style.display = 'none';
    archived.style.display = 'none';
    if(id) {
        categ.value = category;
        textareaName.value = name;
        textareaDescription.value = description;
        const selectedItemById = document.getElementById(`${id}`);
        const selectedName = selectedItemById.querySelector('.card_name');
        const selectedDescription = selectedItemById.querySelector('.card_description');
        const selectedCateg = selectedItemById.querySelector('.card_category');
        const categIcon = selectedItemById.querySelector('.category_icon');
        const dates = selectedItemById.querySelector('.dates');
        const todoInArray = allTodos.find(todo => todo.id === id);
        const saveChanges = () => {
            selectedName.textContent = textareaName.value;
            selectedDescription.textContent = textareaDescription.value;
            const changeCategory = showCategory(categ.value);
            selectedCateg.textContent = changeCategory.cat_text;
            categIcon.innerHTML = `<svg class="cat_icon"><use href="./icons.svg#${changeCategory.icon_name}"></use></svg>`;
            const reg = /[0-9]{1,2}[\/]{1}[0-9]{1,2}[\/]{1}[0-9]{4}/g;
            const datesInDescription = textareaDescription.value.match(reg);
            dates.textContent = datesInDescription ? datesInDescription.join(', ') : null;
            todoInArray.name = textareaName.value;
            todoInArray.description = textareaDescription.value;
            todoInArray.category = categ.value;
            todoInArray.dates = datesInDescription;
            saveButton.removeEventListener('click', saveChanges);
            deleteButton.removeEventListener('click', deleteCard);
            closeForm();
        };
        const deleteCard = () => {
            selectedItemById.remove();
            const indexInArray = allTodos.indexOf(todoInArray);
            allTodos.splice(indexInArray, 1);
            createCounter();
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