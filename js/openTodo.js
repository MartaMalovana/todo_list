import openModal from './openModal.js';
import allTodos from './allTodos.js';
import archiveTodo from './archiveTodo.js';
import closeForm from './closeForm.js';
import createCounter from "./createCounter.js";

export default function openTodo(e) {
    const selectedCard = e.currentTarget.parentElement;
    const selectedTodo = allTodos.find(todo => todo.id.toString() === selectedCard.id);
    if (e.target.classList.contains('change')) {
        openModal(selectedTodo);
    };
    if (e.target.classList.contains('archive')) {
        archiveTodo(selectedTodo);
    };
    if (e.target.classList.contains('delete')) {
        const answer = confirm('Delete this note?');
        if (!answer) {
            return;
        };
        const todoToDelete = document.getElementById(`${selectedCard.id}`);
        todoToDelete.remove();
        const indexInArray = allTodos.indexOf(selectedTodo);
        allTodos.splice(indexInArray, 1);
        createCounter();
        localStorage.setItem('todos', JSON.stringify(allTodos));
        closeForm();
    };
}