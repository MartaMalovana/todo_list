import openModal from './openModal.js';
import { allTodos } from './allTodos.js';

export default function openTodo (e) {
    if(e.target.type === 'checkbox') {
        return;
    };
    const selectedCard = e.currentTarget;
    const selectedTodo = allTodos.find(({id})=> id === selectedCard.id);
    openModal(selectedTodo);
}