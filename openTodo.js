import openModal from './openModal.js';
import { allTodos } from './allTodos.js';
import archiveTodo from './archiveTodo.js';
import closeForm from './closeForm.js';
import createCounter from "./createCounter.js";

const deleteButton = document.querySelector('.delete_todo');
const form = document.querySelector('.todo_form');

export default function openTodo (e) {
    console.log(e.target.classList);
    // deleteButton.style.display = 'block';
    const selectedCard = e.currentTarget.parentElement;
    // const delButton = form.querySelector('.delete_todo');
    // delButton.style.display = 'block';
    const selectedTodo = allTodos.find(todo => todo.id.toString() === selectedCard.id);
    if(e.target.classList.contains('change')) {
        openModal(selectedTodo);  
    };
    if(e.target.classList.contains('archive')) {
        archiveTodo(selectedTodo);  
    };
    if(e.target.classList.contains('delete')) {
        const answer = confirm('Delete this note?');
        if(!answer) {
            return;
        };
        const todoToDelete = document.getElementById(`${selectedCard.id}`);
        todoToDelete.remove();
        const indexInArray = allTodos.indexOf(selectedTodo);
        allTodos.splice(indexInArray, 1);
        createCounter();
        closeForm();
    };


    
    // deleteButton.addEventListener('click', ()=>deleteCard(selectedCard.id));
}