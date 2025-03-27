function inverso(num) {
    var resultado = "";  // Se declara una variable local
    for (var i = num.length - 1; i >= 0; i--) {
        resultado += num.charAt(i);
    }
    return resultado;
}

var num = prompt("Introduce un número: ");
document.write("El número " + num + " en orden inverso es: " + inverso(num));
