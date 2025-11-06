// js/main.js: Archivo principal que importa todos los módulos y conecta la lógica

import { showExercise, hideExercise } from './modals.js';
import { init_ejercicio1 } from './ejercicio1.js';
import { init_ejercicio2 } from './ejercicio2.js';
import { init_ejercicio3 } from './ejercicio3.js';
import { init_ejercicio4 } from './ejercicio4.js';
import { init_ejercicio5 } from './ejercicio5.js';
import { init_ejercicio6 } from './ejercicio6.js';
import { init_ejercicio7 } from './ejercicio7.js';
import { init_ejercicio8 } from './ejercicio8.js';
import { init_ejercicio9 } from './ejercicio9.js';
import { init_ejercicio10 } from './ejercicio10.js';
import { init_ejercicio11 } from './ejercicio11.js';
import { init_ejercicio12 } from './ejercicio12.js';

// Mapa de funciones de inicialización
const initFunctions = {
    ejercicio1: init_ejercicio1,
    ejercicio2: init_ejercicio2,
    ejercicio3: init_ejercicio3,
    ejercicio4: init_ejercicio4,
    ejercicio5: init_ejercicio5,
    ejercicio6: init_ejercicio6,
    ejercicio7: init_ejercicio7,
    ejercicio8: init_ejercicio8,
    ejercicio9: init_ejercicio9,
    ejercicio10: init_ejercicio10,
    ejercicio11: init_ejercicio11,
    ejercicio12: init_ejercicio12,
};

// Se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Exponer showExercise y hideExercise al scope global (window)
    // Esto es necesario para que los botones con 'onclick="..."' en el HTML puedan llamar a estas funciones.
    window.showExercise = (viewId) => showExercise(viewId, initFunctions);
    window.hideExercise = hideExercise;

    console.log("Aplicación modular iniciada. Total de ejercicios cargados:", Object.keys(initFunctions).length);
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('hidden');
    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times text-2xl"></i>'
        : '<i class="fas fa-bars text-2xl"></i>';
});