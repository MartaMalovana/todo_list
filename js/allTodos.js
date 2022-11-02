let allTodos = [];

const todosFromLS = localStorage.getItem('todos');
if (todosFromLS) {
    allTodos = JSON.parse(todosFromLS);
};

export default allTodos;
