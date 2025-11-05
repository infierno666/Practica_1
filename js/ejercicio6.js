// js/ejercicio6.js: Lógica para Mostrar/Ocultar Texto

export function init_ejercicio6() {
    const btn = document.getElementById('e6_toggle');
    const textEl = document.getElementById('e6_text');

    // Asegurar estado inicial (mostrado)
    textEl.classList.remove('opacity-0', 'h-0');
    textEl.classList.add('p-4');
    btn.textContent = 'Ocultar Texto';

    btn.onclick = () => {
        const isHidden = textEl.classList.toggle('opacity-0');
        textEl.classList.toggle('h-0', isHidden); // Oculta altura para evitar espacio
        textEl.classList.toggle('p-4', !isHidden); // Restaura padding

        btn.textContent = isHidden ? 'Mostrar Texto' : 'Ocultar Texto';
    };
}