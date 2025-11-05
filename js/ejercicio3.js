// js/ejercicio3.js: Lógica para el Análisis Condicional (Positivo, Negativo o Cero)

export function init_ejercicio3() {
    const btn = document.getElementById('e3_check');
    const input = document.getElementById('e3_input');
    const resultDisplay = document.getElementById('e3_result');

    btn.onclick = () => {
        const num = parseFloat(input.value);
        let status = '';
        let className = 'text-lg font-medium p-3 rounded-lg border';

        if (isNaN(num)) {
            status = 'Ingresa un valor numérico.';
            className += ' bg-red-50 border-red-200';
        } else if (num > 0) {
            status = 'El número es Positivo.';
            className += ' bg-green-50 border-green-200';
        } else if (num < 0) {
            status = 'El número es Negativo.';
            className += ' bg-red-50 border-red-200';
        } else {
            status = 'El número es Cero.';
            className += ' bg-yellow-50 border-yellow-200';
        }
        
        resultDisplay.textContent = `Estado: ${status}`;
        resultDisplay.className = className;
    };
}