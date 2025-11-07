// js/ejercicio8.js: Lógica para Secciones Colapsables (Acordeón)

function toggleCollapse(contentId, iconId, titleId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    const titleElement = document.getElementById(titleId); 

    const isHidden = content.classList.toggle('hidden');

    icon.innerHTML = isHidden ? '+' : '–';

    if (isHidden) {
        titleElement.innerHTML = titleElement.innerHTML.replace(' (Abierta)', '') + ' (Oculta)';
    } else {
        titleElement.innerHTML = titleElement.innerHTML.replace(' (Oculta)', '') + ' (Abierta)';
    }
}

export function init_ejercicio8() {

    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        const iconId = header.dataset.icon;
        const titleId = header.dataset.title;

        document.getElementById(iconId).innerHTML = '–';
        document.getElementById(titleId).innerHTML += ' (Abierta)';

        header.onclick = () => {
            const contentId = header.dataset.target;

            toggleCollapse(contentId, iconId, titleId);
        };
    });
}