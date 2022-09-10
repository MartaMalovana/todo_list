function openModal () {
    const saveButton = document.querySelector('.save');
    const form = document.querySelector('.todo_form');
    const inputName = document.querySelector('.todo_name');
    const inputDescription = document.querySelector('.todo_description');
    const todos = document.querySelector('.todos');
    const modalButton = document.querySelector('.add_todo');
    const cancelButton = document.querySelector('.cancel');

    // opens modal to create new todo
    form.style.display = 'flex';
    modalButton.style.display = 'none';

    const modalButtonDown = () => {
        modalButton.style.display = 'block';
        modalButton.style.position = 'absolute';
        modalButton.style.bottom = '5px';
        modalButton.style.left = '50%';
        modalButton.style.transform = "translate(-50%, -50%)";
    };

    const addTodo = (e) => {
        e.preventDefault();
        console.log(inputName.value);
        // if(e.target.elements.todo_description.value === '') {
        //     alert('This note is empty');
        // }
        const newTodo = {
            name: inputName.value,
            description: inputDescription.value
        };
        console.log(newTodo);
        const card = document.createElement('div');
        card.classList.add('card');

        const cardName = document.createElement('p');
        cardName.classList.add('card_name');
        cardName.textContent = inputName.value;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card_description');
        cardDescription.textContent = inputDescription.value;

        const cardTime = document.createElement('p');
        cardTime.classList.add('card_time');
        cardTime.textContent = new Date().toLocaleString();

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        card.append(cardName);
        card.append(cardDescription);
        card.append(cardTime);
        card.append(checkbox);
        todos.prepend(card);

        // form.reset();
        // inputName.value = '';
        // inputDescription.value = '';

        // form.style.display = 'none';
        // modalButtonDown();
        closeForm();
        saveButton.removeEventListener('click', addTodo);
    };

    const closeForm = () => {
        // form.reset();
        inputName.value = '';
        inputDescription.value = '';
        form.style.display = 'none';
        modalButtonDown();
    };
    saveButton.addEventListener('click', addTodo);
    // inputDescription.addEventListener('submit', addTodo);
    cancelButton.addEventListener('click', closeForm);

};