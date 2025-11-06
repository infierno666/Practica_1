// js/ejercicio2.js — Conjetura de Collatz con visualización mejorada
export function init_ejercicio2() {
    const btn = document.getElementById('e2_calculate');
    const input = document.getElementById('e2_input');
    const sequenceDisplay = document.getElementById('e2_sequence');

    btn.onclick = () => {
        const value = input.value.trim();
        const n = parseInt(value);

        if (isNaN(n) || n <= 0) {
            sequenceDisplay.innerHTML = `<span class="text-red-500 font-semibold"> Por favor, ingresa un número entero positivo.</span>`;
            return;
        }

        let sequence = [n];
        let current = n;
        let steps = 0;
        const MAX_STEPS = 500;  

        while (current !== 1 && steps < MAX_STEPS) {
            current = current % 2 === 0 ? current / 2 : 3 * current + 1;
            sequence.push(current);
            steps++;
        }

        const formattedSequence = sequence.join(' → ');
        sequenceDisplay.innerHTML = `
            <div class="animate-fadeIn">
                <p class="text-gray-800 font-medium mb-2"> Secuencia generada:</p>
                <p class="text-purple-700 font-semibold break-words">${formattedSequence}</p>
                <p class="mt-3 text-sm text-gray-500">Longitud total: ${sequence.length} pasos</p>
            </div>
        `;
    };
}
