

- Inline
- Block
- Inline-Block

Recordemos que block ocupa todo el width disponible en la pantalla o en este caso el navegador. Inline por otro oupa el ancho o width que es mas conveniente o que se ajusta a lo que hay dentro de ese elemento.

## ¿Qué es Inline-Block?


Se comporta como un elemento inline excepto que el ancho , altura , margen y padding son respetados.

## Unidades


Hay 2 : 

- Relativas
	- EM
	- REM
	- VH
	- VW
	- %
	- And more!
- Absolutas
	- PX
	- PT
	- CM
	- IN
	- MM

Estaremos trabajando con las relativas. Que son las más usadas.


Los porcentajes por ejemplo son siempre relativos a otro valor , a veces es relativo al valor del parent y otras veces del valor del elemento en sí.


```CSS

width: 50%; /* A la mitad del with del parent */
line-height: 50%; /* La mitad del tamaño de la fuente del elemento en sí */

```


## Ems & Rems



Con el tamaño de la fuente 1em equivale al tamaño de la fuente tal cual si tienes 2em es el doble al tamaño de la fuente del parent.

Con otras propiedades , 1em es igual al tamaño de la fuente computarizado del elemento en sí. (Si mismo)


En cambio rem es relativo al elemento base  html y su tamaño de fuente. Es más fácil trabajar con esto. Si la raíz tiene un tamaño de fuente de 20px , 1 rm es siempre 20px , 2rem es 40px y asi consecutivamente.


Hablamos del elemento raíz  :

```HTML

<html lang="en">
</html>

```

A ese en especifico , hay que tomar en cuenta que tiene un tamaño de fuente por default pero se lo puedes cambiar si quieres trabajar con eso.

