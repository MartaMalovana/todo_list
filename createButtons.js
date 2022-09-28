export default function createButtons () {
        // add div for buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button_container');
        // add button "change"
        const change = document.createElement('button');
        change.type = 'button';
        change.classList.add('change');
        change.innerHTML = `<svg class="icon change"><use class='change' href="./icons.svg#change"></use></svg>`;
        // add button archive
        const archive = document.createElement('button');
        change.type = 'button';
        archive.classList.add('archive');
        archive.innerHTML = `<svg class="icon archive"><use class='archive' href="./icons.svg#archive"></use></svg>`;
        // add button delete
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = `<svg class="icon delete"><use class='delete' href="./icons.svg#delete"></use></svg>`;

        buttonContainer.append(change, archive, deleteButton);
        return buttonContainer;
}