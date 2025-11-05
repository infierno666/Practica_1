// js/ejercicio7.js: Lógica para Añadir Nodos a Lista

export function init_ejercicio7() {
    const btn = document.getElementById('e7_add_node');
    const list = document.getElementById('e7_list');
    let initialCount = list.children.length;
    let counter = initialCount;

    btn.onclick = () => {
        counter++;
        const newLi = document.createElement('li');
        newLi.className = 'p-1 bg-white rounded flex justify-between items-center';
        newLi.innerHTML = `Nueva Tarea ${counter}
            <button class="text-red-500 hover:text-red-700 ml-2 text-xs font-bold" onclick="this.parentElement.remove()">X</button>`;
        list.appendChild(newLi);
    };
}