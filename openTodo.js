import openModal from './openModal.js';
import { allTodos } from './allTodos.js';

const deleteButton = document.querySelector('.delete_todo');
const form = document.querySelector('.todo_form');

export default function openTodo (e) {
    if(e.target.type === 'checkbox') {
        return;
    };
    // deleteButton.style.display = 'block';
    const selectedCard = e.currentTarget;
    // const delButton = form.querySelector('.delete_todo');
    // delButton.style.display = 'block';
    const selectedTodo = allTodos.find(todo => todo.id.toString() === selectedCard.id);
    openModal(selectedTodo);

    
    // deleteButton.addEventListener('click', ()=>deleteCard(selectedCard.id));
}