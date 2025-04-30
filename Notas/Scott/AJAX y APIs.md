
Estas operan con el formato JSON.

 ## HTTP Verbs

- GET para obtener información de una API.
- POST se usa para mandar información a un lugar.


## Códigos de estado

- 200: OK, en general todos los 200 suelen ser buenos.
- Los 300 normalmente significan que estan siendo redirigidos.
- Los 400 pueden ser errores.

![[Pasted image 20250421161908.png]]

## ¿Qué es XMLHttpRequest (XHR)?

Es una API de JavaScript que permite hacer peticiones HTTP a un servidor sin recargar la página. Es una de las tecnologías clave detrás del desarrollo de aplicaciones web dinámicas (lo que llamamos "AJAX").

Aunque el nombre dice XML, se puede usar para enviar/recibir datos en JSON, texto, HTML, XML, etc.

## 🔧 ¿Para qué sirve?

Con XHR puedes:

Cargar datos desde el servidor después de que la página haya sido cargada.

Enviar formularios en segundo plano.

Crear experiencias interactivas, como chats en tiempo real, filtros dinámicos, etc.

Trabajar con APIs REST desde el navegador.

Ejemplos:

```JS

const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.ejemplo.com/datos", true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 && xhr.status === 200) {
	    console.log("Respuesta:", xhr.responseText);
	  }
};
xhr.send();

fetch("https://api.ejemplo.com/datos")
  .then(res => res.json())
  .then(data => console.log(data));


```



![[Pasted image 20250421163155.png]]


## La función fetch

- Una nueva forma de hacer solicitudes via JS!
- Soporta premisas
- No lo soporta internet explorer!


Uso más básico:

![[Pasted image 20250421231316.png]]

Completo: ![[Pasted image 20250422204558.png]]![[Pasted image 20250422205100.png]]


![[Pasted image 20250422205119.png]]

## AXIOS

Librería separada para hacer solicitudes HTTP. Si usa fetch pero debe ser importado.

 ![[Pasted image 20250422210223.png]]![[Pasted image 20250422210321.png]]