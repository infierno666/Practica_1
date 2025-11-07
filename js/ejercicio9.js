// js/ejercicio9.js — Eventos de Ratón y Teclado 

const COLOR_MOUSE_MOVE = '#FFFFFF'; // Blanco
const COLOR_MOUSE_DOWN = '#FFFFCC'; // Amarillo
const COLOR_KEY_DOWN = '#CCE6FF';   // Azul

const INFO_BOX = document.getElementById('e9_info_box');
const MOUSE_TITLE = document.querySelector('#e9_mouse_data h3');
const KEY_TITLE = document.querySelector('#e9_keyboard_data h3');
const COORD_NAV = document.getElementById('e9_coord_nav');
const COORD_PAGE = document.getElementById('e9_coord_page');
const KEY_CHAR = document.getElementById('e9_key_char');
const KEY_CODE = document.getElementById('e9_key_code');

document.onmousemove = (e) => {
    MOUSE_TITLE.textContent = "Ratón 🖱️";
    KEY_TITLE.textContent = "Teclado";

    COORD_NAV.textContent = `${e.clientX}, ${e.clientY}`;
    COORD_PAGE.textContent = `${e.pageX}, ${e.pageY}`;

    INFO_BOX.style.backgroundColor = COLOR_MOUSE_MOVE;
};

document.onmousedown = () => {
    INFO_BOX.style.backgroundColor = COLOR_MOUSE_DOWN;
};


document.onkeydown = (e) => {
    MOUSE_TITLE.textContent = "Ratón";
    KEY_TITLE.textContent = "Teclado ⌨️";

    KEY_CHAR.textContent = e.key;
    KEY_CODE.textContent = e.keyCode; 


    INFO_BOX.style.backgroundColor = COLOR_KEY_DOWN;
};

export function init_ejercicio9() {
    INFO_BOX.style.backgroundColor = COLOR_MOUSE_MOVE;
    COORD_NAV.textContent = "--";
    COORD_PAGE.textContent = "--";
    KEY_CHAR.textContent = "--";
    KEY_CODE.textContent = "--";
}
