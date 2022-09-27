import {allTodos} from "./allTodos.js";

export default function archiveTodo (todo) {
    console.log(todo);
    const todoInDocument = document.getElementById(`${todo.id}`);
    console.log(todoInDocument);
    todoInDocument.remove();
    const todoInArray = allTodos.find(({id}) => id === todo.id);
    todoInArray.archived = true;
    console.log(allTodos);
};