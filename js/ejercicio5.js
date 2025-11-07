// js/ejercicio5.js — Análisis del DOM (Enlaces y Párrafos)

export function init_ejercicio5() {
    const analyzeBtn = document.getElementById("e5_analyze");
    const totalLinksDisplay = document.getElementById("e5_total_links");
    const lastLinkDisplay = document.getElementById("e5_last_link");
    const paragraphLinksDisplay = document.getElementById("e5_paragraph_links");

    analyzeBtn.onclick = () => {

        const links = document.getElementsByTagName("a");
        const numLinks = links.length;

        const penultimateHref = numLinks >= 2 ? links[numLinks - 2].href : "No hay suficientes enlaces";

        const paragraphs = document.getElementsByTagName("p");
        let numLinksInThirdParagraph = 0;
        if (paragraphs.length >= 3) {
            numLinksInThirdParagraph = paragraphs[2].getElementsByTagName("a").length;
        } else {
            numLinksInThirdParagraph = "No hay tercer párrafo";
        }

        // Mostrar resultados en pantalla
        totalLinksDisplay.textContent = `Número total de enlaces: ${numLinks}`;
        lastLinkDisplay.textContent = `Penúltimo enlace: ${penultimateHref}`;
        paragraphLinksDisplay.textContent = `Enlaces en el tercer párrafo: ${numLinksInThirdParagraph}`;
    };
}
