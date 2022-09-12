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

    const deleteCard = () => {
            deleteButton.removeEventListener('click', deleteCard);
            const indexInArray = allTodos.indexOf(selectedTodo);
            allTodos.splice(indexInArray, 1);
            document.getElementById(`${selectedCard.id}`).remove();
            closeForm();
            console.log(551);
            return;
    };

    deleteButton.style.display = 'block';
    deleteButton.addEventListener('click', deleteCard);
}