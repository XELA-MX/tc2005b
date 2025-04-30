
Se dedican a la estructuración de empresas. Parte desde el como lo vas a vender , el marketing digital y las estrategias de formación.

Intermediarios entre la red social y la página.

## Características de funcionalidad

- Condicionante a buscar
- Comentarios descargados
- Edición de cuentas finales
- Registro de clientes en una base de datos
- Asignación de vendedor
- Registro de actividades y cambios.

Dentro de las funcionalidades se busca la posibilidad de edición tanto interna como externamente, los formatos editables externos pueden ser otorgados por la página, creadas para actividades segmentadas a realizar.

### Interna

Al momento de hacer el filtrado de datos , sabemos que la gente no escribe bien. El proceso no va  a ser automatizado. Que sea manual pero ya no tanto. 

- Poner tallas
- Cantidades más ciertas
- Colores

Los vendedores deben ser asignados a los gustos de las personas. Lugar y todo eso.

Restricciones en EXCEL:

Cosas que se puedan editar}

1. Cantidades
2. Descripciones

## Ediciones


- Opción 1
	- Realizar directamente en las cuentas , al final de las cuentas. Dentro de la página checar los comentarios ya sea descargarlos o checarlos en la misma página web. Botones que desplieguen ya sea comentarios o piezas.  Escribir en el formato y ya que salga en el estado final.
- Opción 2
	- Su apartado donde se muestren los productos posterior al filtrado y vaciado de información. Separadas cada 5 productos por hoja de EXCEL.
	- Ej. 1-5, 6-10

Optar por la opción 1.

**Obvio cada empresa tendría su archivo separado**


## Archivos Externos


- La lectura de archivos externos XLSX, o más conocidos como excel es importante. Los archivos que se lean dentro de la página web va a depender de la función que se requiera, dentro de estas funciones se encuentran.
- Al finalizar el proceso interno es necesario la distribución de los resultados obtenidos y para ello es necesario la descarga de documentos separados y se muestren de manera resumida los productos.

## Base de datos


Ya que se vayan a mandar las cuentas que se puedan cargar a los vendedores. Dejar que se suba a los vendedores.

- Nombre de perfil de FB
- ID de cliente
- Asignación de vendedor (panel desplegable donde sea posible registrar los vendedores con nombre e ID interno.)

## Registro de Actividades y modificaciones


- Imborrables
- Debe ser detallado y preciso
- Nombre e ID del que realizó la modificación



<hr>

# 1. Información General del Proyecto

- *Nombre del Cliente:* Domingo y Sol
    
- *Organización:* Cuenta Fácil
    
- *Fecha de la Entrevista:* 27/03/25
    
- *Objetivo del Proyecto:* Desarrollar una página web para la OSF principalmente para control de datos
    
- *Problema que se busca resolver:* La tarea de vender en línea por streaming gasta demasiado tiempo y recurso humano, es un proceso tedioso y complicado para ser realizado por una persona. Descargan comentarios de un live de por ejemplo facebook
    
Interes principal: Ventas por medio de redes sociales
Ventas por streaming en transmisión en vivo


# 2. Interesados en el Sistema

- *Usuarios principales:* La OSF y sus miembros
    
- *Usuarios secundarios:* Posiblemente a futuro las empresas clientes de la OSF
    
- *Otras partes interesadas:* *N/A
    

# 3. Diagrama de Contexto

- *Flujos de datos esperados:*
    
- *Interacciones clave con el sistema:*
    

# 4. Requisitos Funcionales

- *Procesos principales que debe soportar el sistema:*
	- Añadir usuarios y modificar permisos
	- Editar los datos recopilados: (solamente cantidades y descripción de producto)
		- Condiciones de búsqueda
		- Comentarios descargados
		- Edición de cuentas finales
		- Registro de clientes en una base de datos
		- Asignación de vendedor
		- Registro de actividades y cambios
			- Tipo de actividad
			- Responsable (nombre, ID)
			- Fecha
			- Hora
			- Descripción de cambio si aplica
	- Creación de reportes
	- Dar de alta empresas y listado tanto de productos y vendedores
	- Lectura de archivos de excel
	- Descarga de archivos de cotizaciones para cada cliente PDF preferiblemente
	- Usuarios:
		- Nombre de Facebook
		-  ID Cliente
		- Asignación de vendedor (manual) No a un vendedor específico sino a un # de vendedor
	- Cada producto tiene un código alfanumérico, su descripción, cantidad inicial, cantidad vendida, cantidad restante y costo por pieza
	- Para los usuarios, los productos deberán incluir cantidad pedida y producto o productos
    
- *Acciones esperadas por cada tipo de usuario:* Se planea uso exclusivo de la OSF
    
- *Casos de uso identificados:* 
    

# 5. Priorización de Requisitos

- *Criterios de valor, riesgo, complejidad y estabilidad de cada requisito:* 
    

# 6. Detalle de Casos de Uso Prioritarios

- *Identificación de procesos críticos:*
    
- *Flujos de actividad esperados:*
    

# 7. Reglas de Negocio

- *Normativas o políticas que debe seguir el sistema:* Se limita el acceso por persona a un solo dispositivo
    
- *Restricciones en el uso de datos o procesos:*
    

# 8. Modelo de Datos

- *Principales entidades y relaciones:*
    
- *Atributos clave de cada entidad:*
    
- *Restricciones adicionales sobre los datos:*
    

# 9. Requisitos No Funcionales

- *Desempeño esperado:* Respuesta inmediata de acciones de sistema y uso por máximo 15 personas
    
- *Compatibilidad con dispositivos o navegadores:* Preferiblemente Chrome y para movil solo el uso de descargas de cuentas finales
    
- *Seguridad y control de accesos:* Acceso maestro y limitado (empresa)
    
- *Escalabilidad y mantenimiento esperado:* 
    

# 10. Navegación del Sistema

- *Mapa del sitio con las secciones principales:*
    
- *Flujos de navegación esperados por tipo de usuario:*
    

# 11. Diseño de Interfaz

- *Pantallas principales esperadas:* 
	- Landing con inicio de sesión
	- Pestaña de cargado de condiciones (productos y vendedores)
	- Carga de comentarios (clientes y comentarios)
	- Carga de pedidos (filtrado de usuarios y productos)
	- Cuentas resumidas o finales filtro por cliente, fecha Descargar pdf y asignación de vendedores
    
- *Elementos clave en cada pantalla:* En moviles marcar que el acceso es unicamente por computadora
    
- *Evolución del diseño con base en revisiones:* 
    

# 12. Plan de Comunicación

- *Métodos de contacto con el cliente:*
    
- *Frecuencia y tipo de actualizaciones:*
    
- *Responsables de la comunicación en cada fase:*
    

# 13. Guía de Estilo de Codificación

- *Normas para nombres de variables y funciones:* 
    
- *Estandarización de comentarios y documentación:* 
    
- *Uso de convenciones de código y estructuras:* 
    

# 14. Plan de Trabajo

- *Actividades pendientes y plazos:*
    
- *Responsables y esfuerzo estimado:*
    
- *Comparación entre estimación y tiempo real empleado:*