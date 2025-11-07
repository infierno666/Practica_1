// js/ejercicio4.js — Análisis del Array según el enunciado (sin emojis)

export function init_ejercicio4() {
    const btn = document.getElementById('e4_analyze');
    const textComparison = document.getElementById('e4_text_comparison');
    const booleansDisplay = document.getElementById('e4_booleans');
    const mathResults = document.getElementById('e4_math_results');

    const valores = [true, 5, false, "hola", "adios", 2];

    btn.onclick = () => {
        // 1) Comparación de textos (alfabéticamente)
        const textos = valores.filter(v => typeof v === 'string');
   
        const textosOrdenados = [...textos].sort((a, b) => a.localeCompare(b));
        const mayorTexto = textosOrdenados[textosOrdenados.length - 1] || '-';
        textComparison.textContent = `1. Texto mayor: "${mayorTexto}"`;

        // 2) Operadores booleanos usando exclusivamente los booleanos del array
        const bools = valores.filter(v => typeof v === 'boolean');
        const b1 = bools[0];
        const b2 = bools[1];
        // Resultado true y false con operadores lógicos
        const resultadoTrue = b1 || b2;   // true || false => true
        const resultadoFalse = b1 && b2;  // true && false => false
        booleansDisplay.textContent = `2. Booleanos → (${b1} || ${b2}) = ${resultadoTrue}, (${b1} && ${b2}) = ${resultadoFalse}`;

        // 3) Operaciones matemáticas con los dos números
        const nums = valores.filter(v => typeof v === 'number');
        const [a, b] = nums;
        if (typeof a === 'number' && typeof b === 'number') {
            const operaciones = [
                `Suma (${a} + ${b}) = ${a + b}`,
                `Resta (${a} - ${b}) = ${a - b}`,
                `Multiplicación (${a} * ${b}) = ${a * b}`,
                `División (${a} / ${b}) = ${(a / b).toFixed(2)}`,
                `Módulo (${a} % ${b}) = ${a % b}`
            ];
            mathResults.innerHTML = operaciones.map(op => `<li>${op}</li>`).join('');
        } else {
            mathResults.innerHTML = '<li>Datos numéricos no disponibles</li>';
        }

        // Refrescar iconos Lucide (si la librería está cargada)
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    };

    // Asegurar que lucide crea iconos la primera vez si corresponde
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}
