export default function createButtons() {
        // add div for buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button_container');
        // add button "change"
        const change = document.createElement('button');
        change.type = 'button';
        change.classList.add('button');
        change.innerHTML = `<svg class="change"><use class="change" href="css/icons.svg#change"></use></svg>`;
        // add button archive
        const archive = document.createElement('button');
        change.type = 'button';
        archive.classList.add('button');
        archive.innerHTML = `<svg class="archive"><use class="archive" href="css/icons.svg#archive"></use></svg>`;
        // add button delete
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.classList.add('button');
        deleteButton.innerHTML = `<svg class="delete"><use class="delete" href="css/icons.svg#delete"></use></svg>`;

        buttonContainer.append(change, archive, deleteButton);
        return buttonContainer;
}