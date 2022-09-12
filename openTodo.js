import openModal from './openModal.js';
import { allTodos } from './allTodos.js';
import closeForm from './closeForm.js';

const deleteButton = document.querySelector('.delete_todo');

export default function openTodo (e) {
    if(e.target.type === 'checkbox') {
        return;
    };
    const selectedCard = e.currentTarget;
    const selectedTodo = allTodos.find(todo => todo.id.toString() === selectedCard.id);
    openModal(selectedTodo);

    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', () => {
        if(!confirm("Do You really want to delete this?")) {
            return;
        };
        document.getElementById(`${selectedCard.id}`).remove();
        const indexInArray = allTodos.indexOf(selectedTodo);
        allTodos.splice(indexInArray, 1);
        closeForm();
    })
}