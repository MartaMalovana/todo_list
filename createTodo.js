import showCategory from "./showCategory.js";

export default function createTodo ({id, name, description, time, category, dates}) {
    const result = showCategory(category);

    const card = document.createElement('div');
    card.classList.add('card');
    card.id = id;

    const cardName = document.createElement('p');
    cardName.classList.add('card_name');
    cardName.textContent = name;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card_description');
    cardDescription.textContent = description;

    const cardTime = document.createElement('p');
    cardTime.classList.add('card_time');
    cardTime.textContent = time;

    const cat = document.createElement('p');
    cat.classList.add('card_category');
    cat.textContent = result.cat_text;

    const cat_icon = document.createElement('span');
    cat_icon.classList.add('category_icon');
    cat_icon.innerHTML = `<svg class="cat_icon"><use href="./icons.svg#${result.icon_name}"></use></svg>`;
    
    const datesArray = document.createElement('p');
    datesArray.classList.add('dates');
    datesArray.textContent = dates ? dates.join(', ') : null;

    card.append(cat_icon, cardName, cardTime, cat, cardDescription, datesArray);

    return card;
}