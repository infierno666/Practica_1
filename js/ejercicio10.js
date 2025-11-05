// js/ejercicio10.js: Lógica para Análisis de Texto (Caracteres y Palabras)

export function init_ejercicio10() {
    const textArea = document.getElementById('e10_text_area');
    const analyzeBtn = document.getElementById('e10_analyze');
    const charsDisplay = document.getElementById('e10_chars');
    const wordsDisplay = document.getElementById('e10_words');

    const analyzeText = () => {
        const text = textArea.value.trim();
        const charCount = text.length;
        let wordCount = 0;

        // Contar palabras: divide por espacios y filtra cadenas vacías
        if (text.length > 0) {
            wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
        }

        charsDisplay.textContent = `Total de Caracteres: ${charCount}`;
        wordsDisplay.textContent = `Total de Palabras: ${wordCount}`;
    };

    analyzeBtn.onclick = analyzeText;
    textArea.oninput = analyzeText; // Análisis en tiempo real
    
    // Estado inicial
    charsDisplay.textContent = 'Total de Caracteres: 0';
    wordsDisplay.textContent = 'Total de Palabras: 0';
}