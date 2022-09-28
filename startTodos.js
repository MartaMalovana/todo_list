import allTodos from './allTodos.js';
import createTodo from './createTodo.js';
import createButtons from './createButtons.js';
import openTodo from './openTodo.js';

const todosDom = document.querySelector('.todos');

export default function startTodos () {
    const activeTodos = allTodos.filter(({archived}) => archived === false);

    activeTodos.map(todo => {
        const card = createTodo(todo);
        const buttons = createButtons();
        card.append(buttons);
        buttons.addEventListener('click', openTodo);
        todosDom.append(card);
    });
};