import { allTodos } from "./allTodos.js";

export default function countNotes () {
    let activeTask = 0;
    let archivedTask= 0;
    let activeRandom = 0;
    let archivedRandom = 0;
    let activeIdea = 0;
    let archivedIdea = 0;
    
    if(allTodos !== []) {
        allTodos.map(({archived, category}) => {
            if(archived) {
                switch (category) {
                    case 'task': 
                        archivedTask += 1;
                        break;
                    case 'random_thought':
                        archivedRandom += 1;
                        break;
                    case 'idea':
                        archivedIdea += 1;
                    default: break;
                };
            } else {
                switch (category) {
                    case 'task': 
                        activeTask += 1;
                        break;
                    case 'random_thought':
                        activeRandom += 1;
                        break;
                    case 'idea':
                        activeIdea += 1;
                    default: break;
                };
            };
        });
    };
    return {activeTask, archivedTask, activeRandom, archivedRandom, activeIdea, archivedIdea};
};