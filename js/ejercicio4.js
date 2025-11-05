// js/ejercicio4.js: Lógica para Análisis de Array (Suma y Promedio)

export function init_ejercicio4() {
    const btn = document.getElementById('e4_analyze');
    const sumDisplay = document.getElementById('e4_sum');
    const avgDisplay = document.getElementById('e4_average');
    const dataArray = [10, 20, 35, 15, 5];

    btn.onclick = () => {
        const sum = dataArray.reduce((acc, current) => acc + current, 0);
        const average = sum / dataArray.length;

        sumDisplay.textContent = `Suma: ${sum}`;
        avgDisplay.textContent = `Promedio: ${average.toFixed(2)}`;
    };
}