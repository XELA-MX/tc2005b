Combinar el JS con HTML. (Document Object Model) son un conjunto de objetos de javascript con los que puedes interactuar.

Es nuestro portal a modificar el html y todo eso. GENIAL!

Esta parte del DOM no tiene nada que ver con las bases de datos , simplemente lo que hace es la parte visual sigue siendo en cierto modo una parte front-end y una bak-end aunque el usuario s puede ver esta parte entonces por eso no lo es totalmente.

Comportamiento d ela página en resumen.

El objeto documento es el principal para el DOM  Contiene una representación de todo el contenido de la página además de miles de métodos y propiedades que son muy útiles.



Empecemos por aprender como seleccionar elementos. Básicamente seleccionar , manipular.

## Selección

Algo como 

```JS

var element = document.getElementById(id);

```

Hay otras maneras como lo puede ser por tag o  clase.

```JS

var elements = document.getElementsByTagName(name);

```

Esta es por nombre de etiqueta , entonces puedes aplicar una serie de propiedades o cosas con 'p' y seleccionas todos los parrafos. (NO ES SENSIBLE AL CASO)

Retorna un arreglo con todos los elementos que selecciones , se le llama una colección HTML o algo asi.

Ya por último por clase:

```JS

document.getElementsByClassName('CLASS');

```

## `QuerySelector y QuerySelectorAll`


Son nuevos en esta parte del DOM. 

```JS

// Encuentra el primer elemento H1
document.querySelector('h1');

// EEncuentra el prrimer elemento con el ID red
document.querySelector('#red');

// Primer elemento con la clase big
document.querySelector('.big');

```

Y con eso adivina que selecciona el QuerySelectorAll , psst , devuelve una colección de HTML..

Ahora pasemos al "Segundo paso del DOM".

## Manipulación


![[Pasted image 20250417184532.png]]

innerText únicamente funciona con elementos texto como son litas , párrafos , hipervínculos , etc. Y como su nombre o indica simplemente es el texto que tiene.

InnerHtml sería idoneó que se utilizará en secciones como div o algo asi , ya que pues como su nombre lo indica puedes meter HTML. Y bueno si quieres utlizar tags HTML dentor de tu etiiqueta.



## Eventos

Es código que se ejecuta cuando algo sucede. Por ejemplo al hacker click , al arrastrar elementos.

![[Pasted image 20250420124112.png]]


3 Maneras de incluir eventos.

Empecemos con el más simple , algo cuando se hace click.

HTML:

```HTML

<button onclick='JS'> Click Me! </button>

```

