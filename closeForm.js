const inputName = document.querySelector('.todo_name');
const inputDescription = document.querySelector('.todo_description');
const form = document.querySelector('.todo_form');
const cancelButton = document.querySelector('.cancel');
const modalButton = document.querySelector('.add_todo');

export default function closeForm () {
    inputName.value = '';
    inputDescription.value = '';
    form.style.display = 'none';
    modalButton.style.display = 'block';
    cancelButton.removeEventListener('click', closeForm);
}