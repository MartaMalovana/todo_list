const body = document.querySelector('body');

export default function changeColor () {
    if(!body.classList.contains('ua_color')) {
        body.classList.remove('white_color');
        body.classList.add('ua_color');
    } else {
        body.classList.remove('ua_color');
        body.classList.add('white_color');
    };
};