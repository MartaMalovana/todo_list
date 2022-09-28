export default function showCategory (value) {
    let cat_text;
    let icon_name;
    
    switch(value) {
        case 'task': 
            cat_text = 'Task';
            icon_name = "task";
            break;
        case 'random_thought': 
            cat_text = 'Random Thought';
            icon_name = "thought";
            break;
        case 'idea': 
            cat_text = 'Idea';
            icon_name = "idea";
            break;
        default:
            cat_text = 'Task';
            icon_name = "task";
            break;
    };
    return {cat_text, icon_name};
};