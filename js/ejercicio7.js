export function init_ejercicio7() {
    const btn = document.getElementById('e7_add_node');
    const list = document.getElementById('e7_list');
    let initialCount = list.children.length;
    let counter = initialCount;
    const DELETE_BTN_CLASS = 'e7_delete_btn';

    list.addEventListener('click', (event) => {
        const target = event.target.closest(`.${DELETE_BTN_CLASS}`);
        if (target) {
            target.parentElement.remove();
        }
    });

    btn.onclick = () => {
        counter++;

        const newLi = document.createElement('li');
        const deleteButton = document.createElement('button');

        newLi.className = 'p-1 bg-white rounded flex justify-between items-center';
        newLi.textContent = `Nueva Tarea ${counter}`;

        deleteButton.textContent = 'X';
        deleteButton.className = `text-red-500 hover:text-red-700 ml-2 text-xs font-bold ${DELETE_BTN_CLASS}`;

        newLi.appendChild(deleteButton);
        list.appendChild(newLi);
    };
}