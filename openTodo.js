import openModal from './openModal.js';
import { allTodos } from './allTodos.js';
import archiveTodo from './archiveTodo.js';

const deleteButton = document.querySelector('.delete_todo');
const form = document.querySelector('.todo_form');

export default function openTodo (e) {
    console.log(e.target.id);
    if(e.target.type === 'checkbox') {
        return;
    };
    // deleteButton.style.display = 'block';
    const selectedCard = e.currentTarget.parentElement;
    // const delButton = form.querySelector('.delete_todo');
    // delButton.style.display = 'block';
    const selectedTodo = allTodos.find(todo => todo.id.toString() === selectedCard.id);
    if(e.target.id === 'change') {
        openModal(selectedTodo);  
    };
    if(e.target.id === 'archive') {
        archiveTodo(selectedTodo);  
    };



    
    // deleteButton.addEventListener('click', ()=>deleteCard(selectedCard.id));
}