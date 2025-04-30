
Primero veremos una herramienta muy poderosa que es el grid. El grid es básicamente una serie de opciones en donde puedes colocar elementos , piensa en ella como una galería de art de esta manera: ![[Pasted image 20250407223311.png]]

De cualquier manera qu tu quieras.

![[Pasted image 20250407223410.png]]

Imagina que tienes lo anterior y quieres acomodar los elementos de una manera diferente.

Pues creas lo siguiente: 

![[Pasted image 20250407223458.png]]

De esta manera no sucede nada ya que debes especificar cuantas columnas y filas quieres que existan y para definirlas haces lo siguiente: ![[Pasted image 20250407223545.png]]


Ahora tienes un grid con 6 columnas  y 6 filas.

Para posicionar un elemento haces lo siguiente: ![[Pasted image 20250407223655.png]]

Otra manera simplificada: ![[Pasted image 20250407223713.png]]

Otra osa es hacer span que es extender el elemento en nuestro grid: ![[Pasted image 20250407223751.png]]

Otra manera es usar el grid-area: ![[Pasted image 20250407223826.png]]

Para las unidades puedes usar fr que divide nueestra pantalla en secciones iguales: 

![[Pasted image 20250407223926.png]]![[Pasted image 20250407223931.png]]


Para establecer los gaps pudes usar: ![[Pasted image 20250407224026.png]]

Donde el primer valor es el de las filas y el segundo de las columnas. Otra osa que pudes hacer es lo siguiente: ![[Pasted image 20250407224112.png]]

Establecer el nombre d las áreas. Ahora si de regreso al curso: 

# ¿Qué es la FlexBox?

Es un display dimensional que trabaja con filas o columnas pero no ambas como el grid.

Al parecer es nuevo en CSS así que es bueno aprender esta cosa.


Puedes cambiar la dirección de la flex box con `flex-direction: row/column;`

Row es de izquierda a derecha y column es de arriba a abajo.

Inclusive pudes tener row-reveerse que coloca los elementos de una manera que nadie esperaba, en orden inverso jajajaja, esto igual se puede hacer con column.

## Justify-Content

Este establece como el contenido es colocado a través de la posición establecida con el flex-direction el default es flex-start.

flex-end , toma todo y acaba en el final de flex box , recuerda que es un eemento blocck.

Igual tienes center , space-between , space-around , space-evenly ,

## Flex Wrap

Básicamente si se termina el espacio de la box hacia donde va?

Creo que solo hay 2 valores , wrap y wrap-reverse. Jaja

## Align Items

Distribuye los elementos a través del cross axis , básicamente pal otro lado que no sea el flex-direction. Tiene valores similares flex-start y todos esos.

También existen Align-CContent y Align-Itself que como su nombre lo india uno va en el contenedor y otro en el elemento. Align ontent solo funciona cuando tienes flex wrap.

## Flex-Basis, Grow & Shrink

- Flex Basis , deffine el tamaño inicial de un elemento antes de que el espacio adicional sea distribuido. (Puesto en elemento no contenedor)

- Flex-Grow : Controla la cantidad de espacio disponible de un elemento que debería tomar.

- Flex-Shrink : Si los elementos son más grandes que el contenedor , se van a encoger de acuerdo del flex-shrink.


## El Problema

- Los dispositivos móviles y tabletas se convirtieron en algo en donde muchos desarrolladores tienen problemas ya que no todos los estilos se ven bien en diferentes widths. ¿Cómo le hacemos?
- Antes era muy común crear diferentes hojas de estilo o incluso páginas web totalmente diferentes para cada tamaño
- Hoy en día típicamente se crea 1 hoja de estilos capaz de responder a diferentes tamaños de pantalla.

### Media Queries

Estas te permiten modificar tu estilo dependiendo de parámetros particulares como lo puede ser el ancho de la pantalla o el tipo de pantalla.

Típicamente así se ven: ![[Pasted image 20250408001725.png]]


Inventario , ventas y citas de servicio

