export function init_ejercicio6() {
    const readMoreLink = document.getElementById('e6_read_more');
    const fullText = document.getElementById('e6_full_text');

 
    if (readMoreLink && fullText) {
        fullText.classList.add('hidden');      // Oculta el texto completo
        readMoreLink.style.display = 'inline'; // Vuelve a mostrar el enlace
    }


    readMoreLink.onclick = (e) => {
        e.preventDefault();       // Evita que el enlace navegue
        fullText.classList.remove('hidden'); // Muestra el texto completo
        readMoreLink.style.display = 'none'; // Oculta el enlace después de pulsarlo
    };
}
