
Algo muy importante para tener y que se haga más fácil este viaje es el siguiente [Link](https://trello.com/b/0PVRE1XQ/web-developer-bootcamp).

Hay 2 tipos de elementos que pueden se mostrados de diferentes manera s, están los elementos desplegados de manera en línea y de bloque.

De bloque lo que hace es tomar todo el ancho de la ventana posible y en línea se juntan los elementos que alcancen en el ancho de la ventana.

![[Pasted image 20250327213721.png]]

Esos son los elementos bloque.

Y los en línea: 

![[Pasted image 20250327213746.png]]


## Tablas

Elementos  a usar: 

```HTML

<table>
<tr>
<td>
<th>

```

Secciones de una table:

* `thead`
* `tfoot`
* `tbody`

De igual manera `Colspan y Rowspan`.


![[Pasted image 20250328125952.png]]


### Creando nuestra primer tabla


## Formularios

Vamos a ver loe elementos botón , las etiquetas y los tipos mas comunes de `input` . Así como validarlos y el rango y las áreas de texto.


![[Pasted image 20250328134914.png]]


Eso hace lo siguiente:

![[Pasted image 20250328134930.png]]

Un ejemplo completo: 

![[Pasted image 20250328135256.png]]


## Formularios

- La etiqueta `form` es simplemente como un div y no muestra nada realmente en la pantalla.
- Tienes que llenar la etiqueta con elementos pertenecientes a esta etiqueta como lo pueden ser los `inputs, checkboxes,buttons,etc`.

![[Pasted image 20250329132932.png]]

- Esta etiqueta representa que el documento tiene una sección que contiene controles interactivos por el usuarios para mandar información.
- El atributo método especifica que protocolo o método HTTP debería usar (No preocuparse de momento.)

la forma básica de este es:

```HTML

    <form action="">

    </form>

```

El atributo acción básicamente es a donde se va a mandar la información.

Por ejemplo cuando buscas algo en Reddit , esta información se manda a `/search/`  y se modifica el link , es eso básicamente.

![[Pasted image 20250329133619.png]]

El control más común de los formularios es el `input`:

- Hay más de 20 posibles opciones para el control
- Para establecer que información deberá aceptar el control es con el atributo `type`.
- El tipo por default es el de texto.

Por ejemplo:

![[Pasted image 20250329134229.png]]

Otro elemento esencial es el `Label` como se puede observar en la captura.

![[Pasted image 20250329135655.png]]


Puedes ver que el `label` es para `cheese`  del `checkbox` con ese id , eso es para asignar las `labels` y que estén alineados , si no tuvieran eso sería casi imposible saber para quien es la `label`.


### Botones


Si creas un botón dentro del formulario este simplemente mandará la información del formulario. Si esta afuera no hará nada y veremos como agregarle acciones en futuras notas.

Podemos pasarle un atributo tipo dentro de formulario. Si no quieres que mande el formulario lo que podrías hacer es pasarle el tipo `type="button"`. Ya no manda el formulario y actúa como un botón normal.  

![[Pasted image 20250330132118.png]]


### El atributo `Name`


Es básicamente el valor que se va a mandar en el atributo acción: ![[Pasted image 20250330133312.png]]



Se manda hacia `search` con q = , eso lo vamos a ver después supongo.


Entonces tienes lo siguiente: 

![[Pasted image 20250330133417.png]]


Y se va a mostrar: 

![[Pasted image 20250330133436.png]]

Hacia donde y con lo que tenga el `input`.

Más de esto:

![[Pasted image 20250330134631.png]]


## Validación de Formularios

Primero que nada puedes tener un atributo requerido:

![[Pasted image 20250330135822.png]]


Como su nombre lo indica si esta vacío no hace nada o no te deja mandar el formulario.

Otra validación es en un`input` :

![[Pasted image 20250330135951.png]]


De igual manera le puedes colocar el `required`.



Igual puedes tener patrones con expresiones regulares:

![[Pasted image 20250330140228.png]]

![[Pasted image 20250330140320.png]]


