// js/ejercicio3.js — Demostración del Ejercicio 3 (Condicionales)
export function init_ejercicio3() {
    const runBtn = document.getElementById("e3_run");


    runBtn.onclick = async () => {
        var numero1 = 5;
        var numero2 = 8;

        const swalBaseConfig = {
            confirmButtonText: 'Aceptar',
            background: '#0a141d',
            color: '#e6f7ff',
            confirmButtonColor: '#00e5ff'
        };

        if (numero1 <= numero2) {
            await Swal.fire({
                ...swalBaseConfig,
                title: 'Condición 1',
                text: 'numero1 no es mayor que numero2',
                icon: 'info',
            });

        }

        if (numero2 > 0) {
            await Swal.fire({
                ...swalBaseConfig,
                title: 'Condición 2',
                text: 'numero2 es positivo',
                icon: 'success',
            });
        }


        if (numero1 < 0 || numero1 !== 0) {
            await Swal.fire({
                ...swalBaseConfig,
                title: 'Condición 3',
                text: 'numero1 es negativo o distinto de cero',
                icon: 'warning',
            });
        }
        if ((numero1 + 1) < numero2) {
            await Swal.fire({
                ...swalBaseConfig,
                title: 'Condición 4',
                text: 'Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2',
                icon: 'info',
            });
        }
    }
};
