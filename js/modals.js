// js/modals.js: Gestión global de modales (Vistas de ejercicios)

let activeViewId = null;
let savedScrollY = 0; // NUEVO: Variable para guardar la posición de scroll

/**
 * Función que obtiene el mapa de todas las vistas de ejercicios.
 * Se define aquí para ser accesible en la gestión de modales.
 */
function getViewsMap() {
    const views = {};
    document.querySelectorAll('.exercise-view').forEach(view => {
        views[view.id] = view;
    });
    return views;
}

/**
 * Muestra la vista del ejercicio especificado.
 * @param {string} viewId El ID del contenedor del ejercicio (ej. 'ejercicio1').
 * @param {Object} initFunctions Mapa de funciones de inicialización de ejercicios.
 */
export function showExercise(viewId, initFunctions) {
    const views = getViewsMap();

    // 1. GUARDAR: Guardar la posición actual de scroll ANTES de moverse.
    savedScrollY = window.scrollY;

    // 2. Desplazar la ventana al inicio y ocultar la interfaz principal.
    window.scrollTo(0, 0);

    // Ocultar la cuadrícula principal y la sección del equipo.
    document.getElementById('exercise-grid').classList.add('hidden');
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
        teamSection.classList.add('hidden');
    }



    // Ocultar la vista actualmente activa
    if (activeViewId && views[activeViewId]) {
        views[activeViewId].classList.remove('active');
        // Limpiar listeners globales al salir
        if (activeViewId === 'ejercicio5' && window.e5_handleResize) {
            window.removeEventListener('resize', window.e5_handleResize);
        }
        if (activeViewId === 'ejercicio9') {
            document.removeEventListener('mousemove', window.e9_handleMouseMove);
            document.removeEventListener('keydown', window.e9_handleKeyDown);
        }
    }

    // Mostrar la nueva vista
    const newView = views[viewId];
    if (newView) {
        activeViewId = viewId;
        newView.classList.add('active');

        // Ejecutar la función de inicialización del ejercicio
        const initFunction = initFunctions[viewId];
        if (typeof initFunction === 'function') {
            initFunction();
        }
    }
}

/**
 * Oculta la vista de ejercicio actual y vuelve al menú principal.
 */
export function hideExercise() {
    const views = getViewsMap();
    if (activeViewId && views[activeViewId]) {
        views[activeViewId].classList.remove('active');
    }

    // Limpiar listeners globales
    if (activeViewId === 'ejercicio5' && window.e5_handleResize) {
        window.removeEventListener('resize', window.e5_handleResize);
    }
    if (activeViewId === 'ejercicio9') {
        document.removeEventListener('mousemove', window.e9_handleMouseMove);
        document.removeEventListener('keydown', window.e9_handleKeyDown);
    }

    activeViewId = null;

    // Mostrar la cuadrícula principal y la sección del equipo.
    document.getElementById('exercise-grid').classList.remove('hidden');
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
        teamSection.classList.remove('hidden');
    }

    // Desbloquear el scroll del cuerpo principal.
    document.body.classList.remove('overflow-hidden');

    // 3. RESTAURAR: Volver a la posición de scroll guardada.
    window.scrollTo(0, savedScrollY);
}


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const destino = link.getAttribute('href');
            const seccion = destino && document.querySelector(destino);
            if (!seccion) return;

            // Guardar posición actual del scroll antes de cerrar
            const posicionActual = window.scrollY;

            // Cerrar el modal (sin forzar scroll hacia arriba)
            if (typeof hideExercise === 'function') {
                // Desactiva el efecto de "window.scrollTo(0, 0)" dentro de hideExercise temporalmente
                const originalScrollTo = window.scrollTo;
                window.scrollTo = () => { }; // bloquea el scroll interno temporalmente
                hideExercise();
                window.scrollTo = originalScrollTo; // restaura comportamiento normal
            }

            window.scrollTo({ top: posicionActual });

            setTimeout(() => {
                seccion.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 10); 
        });
    });
});
