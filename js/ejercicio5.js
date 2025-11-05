// js/ejercicio5.js: Lógica para Información del DOM y Ventana

export function init_ejercicio5() {
    const widthDisplay = document.getElementById('e5_width');
    const heightDisplay = document.getElementById('e5_height');
    const urlDisplay = document.getElementById('e5_url');
    const refreshBtn = document.getElementById('e5_refresh');

    const updateInfo = () => {
        widthDisplay.textContent = `Ancho de la Ventana (Viewport): ${window.innerWidth}px`;
        heightDisplay.textContent = `Alto de la Ventana (Viewport): ${window.innerHeight}px`;
        urlDisplay.textContent = `URL Actual: ${window.location.href}`;
    };

    // Almacenar la función en window para poder remover el listener al salir del "modal"
    window.e5_handleResize = updateInfo;
    window.addEventListener('resize', window.e5_handleResize);

    refreshBtn.onclick = updateInfo;

    // Mostrar la información inicial
    updateInfo();
}