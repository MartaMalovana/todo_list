import allTodos from "./allTodos.js";
import createCounter from "./createCounter.js";

export default function archiveTodo(todo) {
    const todoInDocument = document.getElementById(`${todo.id}`);
    todoInDocument.remove();
    const todoInArray = allTodos.find(({ id }) => id === todo.id);
    todoInArray.archived = true;
    createCounter();
    localStorage.setItem('todos', JSON.stringify(allTodos));
};