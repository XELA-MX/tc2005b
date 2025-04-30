
 Establece como un elemento es posicionado en el elemento , aqui usaremos los siguientes atributos:

- Top
- Bottom
- Riight
- Left

Lo deault es el estático , con lo que has estado trabjando siempre. Aqui no tiene efecto las propiedades anteriores y tampoco z-index.


Por otro lado la opción `relative` , es como el estático y sigue el flow normal del documento y luego aplica un offest relativo a si mismo basado en los valores de las propiedades mencionadas al inicio.  El offset no afecta a la posición de ningún otro elemento En espacio dado por el elemento es el mismo que en estático.

Básicamente es o mismo que static pero puedes moverlo y se va a mover de manera relativa a donde debería estar realmente.


## Absoluta


El elemento es removido del flow normal del documento y el espacio no es creado por el elemento como se haría normalmente Luego es posicionado de manera relativa a su ancestro mas cercano si es que hay alguno, de otra manera es colocado de manera relativa al elemento inicial de contención. Su posición final es determinado por las propiedades del inicio. Aquí si aplica z-index


## Arreglada o Fixed

Es removido del flow nromal del documento y no se crea su espacio Es posicionado al elemento inicial de contención establecido por el viewport. Se queda flotando en la ventana y no importa a donde lo muevas este se queda ahí. Su posición final esta definida por las propiedades del inicio.