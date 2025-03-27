// Función: contador. Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.


// declarar arreglo
var arreglo = [];

for (var i = 0; i < 10; i++) {
    arreglo[i] = Math.floor(Math.random() * 10) - 5;
}

// escribir al documento el arreglo
document.write("Arreglo: " + arreglo + "<br>");

// función contador

function contador(arreglo) {
    var negativos = 0;
    var ceros = 0;
    var positivos = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] == 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    return [negativos, ceros, positivos];
}

// escribir al documento el resultado
document.write("Negativos: " + contador(arreglo)[0] + "<br>");
document.write("Ceros: " + contador(arreglo)[1] + "<br>");
document.write("Positivos: " + contador(arreglo)[2] + "<br>");

