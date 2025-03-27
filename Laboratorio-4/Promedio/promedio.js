// Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

// Declarar arreglo

var arreglo = [];

// Generar 3 arreglos de 3 elementos cada uno aleatorios

for (var i = 0; i < 3; i++) {
  arreglo[i] = [];
  for (var j = 0; j < 3; j++) {
    arreglo[i][j] = Math.floor(Math.random() * 10);
  }
}

// Función para calcular promedio

function promedios(arreglo) {
    var promedio = [];
    for (var i = 0; i < arreglo.length; i++) {
        var suma = 0;
        for (var j = 0; j < arreglo[i].length; j++) {
        suma += arreglo[i][j];
        }
        promedio[i] = suma / arreglo[i].length;
    }
    return promedio;
}

// Escribir en el documento

// Escribir el arreglo y delimitando los arreglos internos con corchetes

document.write("Arreglo: " + arreglo + "<br>");

document.write("Promedios: " + promedios(arreglo));