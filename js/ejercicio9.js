// js/ejercicio9.js: Lógica para Eventos de Ratón y Teclado

export function init_ejercicio9() {
    const mousePosDisplay = document.getElementById('e9_mouse_pos');
    const keyDisplay = document.getElementById('e9_key');
    const container = document.getElementById('ejercicio9');

    // Función de manejo del ratón (guardada en window para limpieza)
    window.e9_handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Solo actualizar si el ratón está dentro del área de la vista
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            mousePosDisplay.textContent = `X: ${Math.round(x)} | Y: ${Math.round(y)}`;
        }
    };

    // Función de manejo del teclado (guardada en window para limpieza)
    window.e9_handleKeyDown = (e) => {
        keyDisplay.textContent = `Tecla: ${e.key} | Código: ${e.code}`;
    };

    // Añadir listeners globales
    document.addEventListener('mousemove', window.e9_handleMouseMove);
    document.addEventListener('keydown', window.e9_handleKeyDown);

    mousePosDisplay.textContent = 'X: - | Y: - (Mueve el ratón)';
    keyDisplay.textContent = 'Tecla: - | Código: - (Presiona una tecla)';
}