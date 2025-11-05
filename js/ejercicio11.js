// js/ejercicio11.js: Lógica para Zonas de Pantalla (Cuadrantes de Click)

export function init_ejercicio11() {
    const clickArea = document.getElementById('e11_click_area');
    const zoneDisplay = document.getElementById('e11_zone');

    clickArea.onclick = (e) => {
        const rect = clickArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        let horizontal = x < centerX ? 'Izquierda' : 'Derecha';
        let vertical = y < centerY ? 'Superior' : 'Inferior';

        zoneDisplay.textContent = `Zona: ${vertical} - ${horizontal}`;
        zoneDisplay.classList.add('animate-pulse');
        setTimeout(() => zoneDisplay.classList.remove('animate-pulse'), 500);
    };
    
    zoneDisplay.textContent = 'Zona: (Haz click aquí)';
}