// js/ejercicio2.js: Lógica para la Conjetura de Collatz

export function init_ejercicio2() {
    const btn = document.getElementById('e2_calculate');
    const input = document.getElementById('e2_input');
    const sequenceDisplay = document.getElementById('e2_sequence');

    btn.onclick = () => {
        let n = parseInt(input.value);
        if (isNaN(n) || n <= 0) {
            sequenceDisplay.textContent = 'Por favor, ingresa un entero positivo.';
            return;
        }

        let sequence = [n];
        let count = 0;
        // Límite de seguridad para evitar loops infinitos en el navegador
        while (n !== 1 && count < 500) { 
            if (n % 2 === 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
            sequence.push(n);
            count++;
        }
        
        sequenceDisplay.textContent = sequence.join(' → ');
    };
}