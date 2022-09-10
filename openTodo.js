export default function openTodo (e) {
    const selectedCard = e.currentTarget;
    console.log(selectedCard.querySelector('.card_name').textContent);
    
}