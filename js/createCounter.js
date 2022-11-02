import countNotes from "./countNotes.js";

export default function createCounter() {
    const actTask = document.querySelector('.act_task');
    const actRandom = document.querySelector('.act_random');
    const actIdea = document.querySelector('.act_idea');
    const archTask = document.querySelector('.arch_task');
    const archRandom = document.querySelector('.arch_random');
    const archIdea = document.querySelector('.arch_idea');

    const { activeTask,
        archivedTask,
        activeRandom,
        archivedRandom,
        activeIdea,
        archivedIdea } = countNotes();

    actTask.textContent = activeTask;
    actRandom.textContent = activeRandom;
    actIdea.textContent = activeIdea;
    archIdea.textContent = archivedIdea;
    archTask.textContent = archivedTask;
    archRandom.textContent = archivedRandom;
};