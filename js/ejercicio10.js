// js/ejercicio10.js — Ejercicio 10: Análisis de texto con ventana nueva tipo anuncio
export function init_ejercicio10() {
    const textArea = document.getElementById('e10_text_area');
    const analyzeBtn = document.getElementById('e10_analyze');
    const charsDisplay = document.getElementById('e10_chars');
    const wordsDisplay = document.getElementById('e10_words');

    const analyzeText = () => {
        const text = textArea.value.trim();

        if (text.length === 0) {
            alert("Por favor ingresa al menos una palabra antes de analizar.");
            return;
        }

        const charCount = text.length;
        const words = text.split(/\s+/).filter(w => w.length > 0);
        const wordCount = words.length;

        charsDisplay.textContent = `Total de Caracteres: ${charCount}`;
        wordsDisplay.textContent = `Total de Palabras: ${wordCount}`;

        const firstWord = words[0];
        const lastWord = words[words.length - 1];
        const reversed = [...words].reverse();
        const sortedAZ = [...words].sort((a, b) => a.localeCompare(b));
        const sortedZA = [...sortedAZ].reverse();

        const resultHTML = `
            <html>
            <head>
                <title>Resultados del Análisis de Texto</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        background: #f0fdf4; 
                        color: #064e3b; 
                        padding: 20px; 
                        text-align: center;
                    }
                    h1 { color: #047857; margin-bottom: 20px; }
                    .section { margin-bottom: 15px; }
                    strong { color: #065f46; }
                    ul { 
                        background: #d1fae5; 
                        padding: 10px; 
                        border-radius: 8px; 
                        list-style: none; 
                        max-height: 150px; 
                        overflow-y: auto;
                        margin: 5px 0 0 0;
                    }
                    li { margin: 5px 0; }
                    button { 
                        margin-top: 20px; 
                        padding: 8px 16px; 
                        border: none; 
                        border-radius: 6px; 
                        background: #047857; 
                        color: white; 
                        font-weight: bold; 
                        cursor: pointer; 
                    }
                    button:hover { background: #065f46; }
                </style>
            </head>
            <body>
                <h1>Resultados del Análisis</h1>
                <div class="section"><strong>Número de palabras:</strong> ${wordCount}</div>
                <div class="section"><strong>Primera palabra:</strong> ${firstWord}</div>
                <div class="section"><strong>Última palabra:</strong> ${lastWord}</div>
                <div class="section">
                    <strong>Palabras en orden inverso:</strong>
                    <ul>${reversed.map(w => `<li>${w}</li>`).join('')}</ul>
                </div>
                <div class="section">
                    <strong>Palabras ordenadas A → Z:</strong>
                    <ul>${sortedAZ.map(w => `<li>${w}</li>`).join('')}</ul>
                </div>
                <div class="section">
                    <strong>Palabras ordenadas Z → A:</strong>
                    <ul>${sortedZA.map(w => `<li>${w}</li>`).join('')}</ul>
                </div>
                <button onclick="window.close()">Cerrar Ventana</button>
            </body>
            </html>
        `;

        const width = 500;
        const height = 600;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);

        const newWindow = window.open(
            '',
            'AnalisisTexto',
            `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=yes`
        );

        newWindow.document.write(resultHTML);
        newWindow.document.close();
    };

    analyzeBtn.onclick = analyzeText;

    // Estado inicial
    charsDisplay.textContent = 'Total de Caracteres: 0';
    wordsDisplay.textContent = 'Total de Palabras: 0';
};
