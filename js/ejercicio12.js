// js/ejercicio12.js
export function init_ejercicio12() {
    const form = document.getElementById('formulario');
    const mensajeDiv = document.getElementById('mensaje');

    const validarEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validarTelefono = tel => /^[0-9]{7,15}$/.test(tel);

    form.onsubmit = (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apP = document.getElementById('apP').value.trim();
        const apM = document.getElementById('apM').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const edad = document.getElementById('edad').value.trim();
        const fecha = document.getElementById('fecha').value.trim();
        const sexo = document.getElementById('sexo').value;
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const ciudad = document.getElementById('ciudad').value.trim();

        let mensaje = '';
        let clases = 'bg-red-100 border-red-400 text-red-700';
        let valido = true;

        if (nombre.length < 3) { valido = false; mensaje = 'Nombre inválido (mín. 3 caracteres).'; }
        else if (!apP) { valido = false; mensaje = 'Apellido paterno obligatorio.'; }
        else if (!apM) { valido = false; mensaje = 'Apellido materno obligatorio.'; }
        else if (!direccion) { valido = false; mensaje = 'Dirección obligatoria.'; }
        else if (!edad || isNaN(edad) || edad < 0) { valido = false; mensaje = 'Edad inválida.'; }
        else if (!fecha) { valido = false; mensaje = 'Fecha de nacimiento obligatoria.'; }
        else if (!sexo) { valido = false; mensaje = 'Selecciona un género.'; }
        else if (!validarEmail(email)) { valido = false; mensaje = 'Correo inválido.'; }
        else if (!validarTelefono(telefono)) { valido = false; mensaje = 'Teléfono inválido (solo números, 7-15 dígitos).'; }
        else if (!ciudad) { valido = false; mensaje = 'Ciudad obligatoria.'; }

        mensajeDiv.className = 'p-3 rounded-lg border text-sm font-medium';
        if (valido) {
            mensaje = `✅ Registro exitoso para ${nombre} ${apP} ${apM} (${email})`;
            clases = 'bg-green-100 border-green-400 text-green-700';
            form.reset();
        }

        mensajeDiv.textContent = mensaje;
        mensajeDiv.classList.add(...clases.split(' '));
        mensajeDiv.classList.remove('hidden');
    };

    mensajeDiv.classList.add('hidden');
};
