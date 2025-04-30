
## The Call Stack

Mecanismo que usa JavaScript para mantener un registro de en que parte del script se esta llamando a multiples funciones.

Javascript "sabe" que función esta siendo ejecutada y que funciones son llamadas desde esa función , etc.

"FILA" First In Last Out

¿Cómo funciona?

- Cuando un script llama a una función , JS agrega esta llamada al call stack y de ahí empieza a llevar la función
- Cualquier función que sea llamada por esa función se añade a la pila de llamadas más arriba y se ejecuta cuando se alcanza su llamada.

## WebAPIs 

Hay que recordar que JS es de un solo thread.

Las premisas es un objeto que representa si se completo o fallo una operación asíncrona.

![[Pasted image 20250421003910.png]]

![[Pasted image 20250421004020.png]]

Las premisas pueden tener 3 estados:

- Pending
- Failure/Rejected
- Resolved/Succesful

Simplemente hace algo si es exitoso o falla una llamada.

![[Pasted image 20250421004156.png]]![[Pasted image 20250421004259.png]]

En esta parte no se pasa las funciones y simplemente al completar ejecuta un código si es exitosa la llamada. Pero obviamente esta mejor la premisa.
![[Pasted image 20250421004400.png]]

Esta es la versión si quieres agarrar un error.

Esta es una manera de diferentes premisas : ![[Pasted image 20250421004808.png]]

![[Pasted image 20250421005238.png]]


Usa eso como template.


## Funciones Asíncronas

**No las soporta internet Explorer**


Una manera nueva y limpia para trabajar con código asíncrono. Es una premisa pero más bonita

2 piezas clave:

- async
	- Una función asíncrona siempre retorna una premisa.
	- Si la función retorna un valor la premisa va a ser resuelta con ese valor.
	- Si la función devuelve una excepción , la premisa será rechazada.
- Await
	- Exclusivo su uso con funciones asíncronas.
	- Pausa la ejecución de la función esperando una promesa que sea completada.

Una manera de hacer premisa simple:


![[Pasted image 20250421010301.png]]

![[Pasted image 20250421010401.png]]

