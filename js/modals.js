// js/modals.js: Gestión global de modales (Vistas de ejercicios)

let activeViewId = null;

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
    
    // Ocultar la cuadrícula principal
    document.getElementById('exercise-grid').classList.add('hidden');
    document.getElementById('main-interface').classList.add('overflow-hidden');

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
    document.getElementById('exercise-grid').classList.remove('hidden');
    document.getElementById('main-interface').classList.remove('overflow-hidden');
}