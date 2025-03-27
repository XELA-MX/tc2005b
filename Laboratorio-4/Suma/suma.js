// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: 
// La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

// Generar números aleatorios
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

// Sumar los números
let suma = num1 + num2;

// Pedir al usuario que ingrese el resultado de la suma
let tiempoInicio = new Date();
let resultado = prompt(`¿Cuánto es ${num1} + ${num2}?`);
let tiempoFin = new Date();
let tiempoTotal = tiempoFin - tiempoInicio;

// Verificar si el resultado es correcto
if (resultado == suma) {
    document.write(`¡Correcto! El resultado es ${suma}.<br>`);
}

else {
    document.write(`¡Incorrecto! El resultado es ${suma}.<br>`);
}

document.write(`Tardaste ${tiempoTotal / 1000} segundos en responder.`);

// Regresar a la página principal

document.write(`<br><br><a href="../index.html">Regresar a la página principal</a>`);