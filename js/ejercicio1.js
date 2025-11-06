// js/ejercicio1.js - Lógica de la Calculadora 

let expresion = '0';
let resultado = '0';
let esperandoNuevoNumero = true;

const displayExpresion = document.getElementById('calcExpresion');
const displayResultado = document.getElementById('calcResultado');

function actualizarDisplay() {
    displayExpresion.textContent = expresion;
    displayResultado.textContent = resultado;
}

function evaluarExpresion(soloPreview = false) {
    let expresionParaEvaluar = expresion
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/%/g, '/100*');

    const ultimoChar = expresionParaEvaluar.slice(-1);
    if (['*', '/', '+', '-', '/100*'].includes(ultimoChar)) {
        expresionParaEvaluar = expresionParaEvaluar.slice(0, -1);
    }

    try {
        let res = String(eval(expresionParaEvaluar));

        if (res === 'Infinity' || res === 'NaN') {
            throw new Error("Error matemático.");
        }

        const numRes = parseFloat(res);
        if (numRes % 1 !== 0) {
            res = numRes.toFixed(2);
        }

        if (!soloPreview) {
            expresion = res;
            resultado = '';
        } else {
            resultado = '= ' + res;
        }
    } catch (e) {
        if (!soloPreview) {
            resultado = 'Error';
        }
    }
}

function manejarEntrada(valor) {
    if (valor === 'C') {
        expresion = '0';
        resultado = '0';
        esperandoNuevoNumero = true;
    } else if (valor === '←') {
        if (expresion.length > 1) {
            expresion = expresion.slice(0, -1);
        } else {
            expresion = '0';
            esperandoNuevoNumero = true;
        }
    } else if (valor === '=') {
        evaluarExpresion();
        esperandoNuevoNumero = true;
    } else if (['+', '-', '×', '÷', '%'].includes(valor)) {
        esperandoNuevoNumero = false;
        const ultimoChar = expresion.slice(-1);
        if (['+', '-', '×', '÷', '%', '.'].includes(ultimoChar)) {
            expresion = expresion.slice(0, -1) + valor;
        } else if (expresion === '0' && valor !== '-') {
            expresion = expresion.slice(0, -1) + valor;
        } else {
            expresion += valor;
        }
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(valor)) {
        if (esperandoNuevoNumero && expresion !== '0') {
            expresion = valor;
            esperandoNuevoNumero = false;
        } else if (expresion === '0' && valor !== '.') {
            expresion = valor;
        } else if (valor === '.' && expresion.slice(-1) === '.') {
            return;
        } else {
            expresion += valor;
        }
        esperandoNuevoNumero = false;
        evaluarExpresion(true);
    }

    actualizarDisplay();
}

export function init_ejercicio1() {
    console.log("Inicializando Calculadora de Expresión (Estilo Claro)");
    const interfaceElement = document.getElementById('ejercicio1');
    if (!interfaceElement) return;


    if (interfaceElement.dataset.initialized === "true") {
        console.log("Calculadora ya inicializada. No se duplicarán eventos.");
        return;
    }
    interfaceElement.dataset.initialized = "true";

    const buttons = interfaceElement.querySelectorAll('button[data-value]');

    buttons.forEach(button => {
        const valor = button.getAttribute('data-value');
        button.addEventListener('click', () => {
            if (valor === 'history') {
                alert("Funcionalidad de historial no implementada.");
                return;
            }
            manejarEntrada(valor);
        });
    });

    actualizarDisplay();
}
