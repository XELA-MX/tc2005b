// Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida

var input = prompt("Introduce un número: ");

document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (var i = 1; i <= input; i++) {
    document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
}
document.write("</table>");


