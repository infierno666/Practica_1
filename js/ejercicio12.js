// js/ejercicio12.js: Lógica para Formulario de Registro con Validación

export function init_ejercicio12() {
    const form = document.getElementById('e12_form');
    const nameInput = document.getElementById('e12_name');
    const emailInput = document.getElementById('e12_email');
    const messageDiv = document.getElementById('e12_message');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    form.onsubmit = (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        let isValid = true;
        let message = '';
        let classes = 'bg-red-100 border-red-400 text-red-700';

        if (name.length < 3) {
            isValid = false;
            message = 'El Nombre debe tener al menos 3 caracteres.';
        } else if (!validateEmail(email)) {
            isValid = false;
            message = 'Por favor, ingresa un Correo Electrónico válido.';
        }

        // Limpiar clases anteriores
        messageDiv.className = 'p-3 rounded-lg border text-sm font-medium';

        if (isValid) {
            message = `Registro exitoso para: ${name} (${email}).`;
            classes = 'bg-green-100 border-green-400 text-green-700';
            form.reset();
        } else {
            classes = 'bg-red-100 border-red-400 text-red-700';
        }

        messageDiv.textContent = message;
        messageDiv.classList.add(...classes.split(' '));
        messageDiv.classList.remove('hidden');
    };

    // Limpiar mensaje inicial
    messageDiv.classList.add('hidden');
}