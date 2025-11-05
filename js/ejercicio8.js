// js/ejercicio8.js: Lógica para Secciones Colapsables (Acordeón)

function toggleCollapse(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    const isHidden = content.classList.toggle('hidden');
    icon.textContent = isHidden ? '+' : '–';
}

export function init_ejercicio8() {
    // Asegurar estado inicial (colapsado)
    document.getElementById('e8_content1').classList.add('hidden');
    document.getElementById('e8_icon1').textContent = '+';
    document.getElementById('e8_content2').classList.add('hidden');
    document.getElementById('e8_icon2').textContent = '+';

    // Asignar listeners
    document.getElementById('e8_header1').onclick = () => toggleCollapse('e8_content1', 'e8_icon1');
    document.getElementById('e8_header2').onclick = () => toggleCollapse('e8_content2', 'e8_icon2');
}