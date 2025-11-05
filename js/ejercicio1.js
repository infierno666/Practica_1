// js/ejercicio1.js: Lógica para la Calculadora (Suma)

export function init_ejercicio1() {
    const btn = document.getElementById('e1_calculate');
    const resultDisplay = document.getElementById('e1_result');

    btn.onclick = () => {
        const num1 = parseFloat(document.getElementById('e1_num1').value) || 0;
        const num2 = parseFloat(document.getElementById('e1_num2').value) || 0;
        const sum = num1 + num2;
        resultDisplay.textContent = `Resultado: ${sum.toFixed(2)}`;
    };
}