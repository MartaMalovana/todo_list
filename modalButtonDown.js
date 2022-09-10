const modalButton = document.querySelector('.add_todo');

export default function modalButtonDown () {
    modalButton.style.display = 'block';
        modalButton.style.position = 'absolute';
        modalButton.style.bottom = '5px';
        modalButton.style.left = '50%';
        modalButton.style.transform = "translate(-50%, -50%)";
}