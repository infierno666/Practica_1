// js/ejercicio11.js — Ejercicio 11: Identificar zonas de pantalla
export function init_ejercicio11() {
    const clickArea = document.getElementById('e11_click_area');
    const zoneDisplay = document.getElementById('e11_zone');

    // Reiniciar mensaje inicial
    zoneDisplay.textContent = 'Zona: (Haz click aquí)';

    clickArea.onclick = (e) => {
        const rect = clickArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

    
        let horizontal = x < centerX ? 'Izquierda' : 'Derecha';
        let vertical = y < centerY ? 'Arriba' : 'Abajo';

        const zone = `${horizontal} ${vertical}`;
        zoneDisplay.textContent = `Zona: ${zone}`;

    
        zoneDisplay.classList.add('animate-pulse');
        setTimeout(() => zoneDisplay.classList.remove('animate-pulse'), 500);
    };
};
