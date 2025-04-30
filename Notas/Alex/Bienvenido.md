
Se dice que la arquitectura más básica es la `Cliente-Servidor` . 

Un servidor es una computadora capaz que cuenta con

+ Ram
+ HD
+ Seguridad

El servidor es obviamente una computadora preparada para precisamente eso , aceptar conexiones a diferencia de la computadora cliente.

Y el cliente es simplemente yo computadora.

El cliente lo que ve es :

- HTML
- CSS
- JS

La principal estructura es :

Html
	Header
	Body
	 Footer


CSS ¿Cómo se ve?

- Colores
- Renderización
- Imágenes
- Animaciones
- Formato

# Github
 
El Árbol de trabajo actual es básicamente los cambios como están al momento en ese estado. (Usualmente es el momento actual) , cuando agregas código modificas es `working tree.`

Git es el sistema de `versionamiento`  que funciona a la par de la plataforma `github` para tener tu código o repositorio y trabajar en equipo.

El repositorio es la colección de cambios permanentes (`commits`) realizados a través de la historia del proyecto. Típicamente existe un repositorio remoto y mucho repositorios locales, uno para cada desarrollador involucrado en el proyecto.

Hay otras plataformas parecidas a `github`:

- Git
- Hg
- Svn
- HelixCore
- CVS
- Bazaar
- Fossit
- TFS
- ClearCase
- Dares

**Hacer `commits` cada que se pueda es lo mas recomendable** Eso ayuda a que el equipo siempre tenga los últimos cambios. Para eliminar un archivo del repositorio es simplemente romper un `commit` pero según el profe es un relajo por lo tanto recomienda mejor hacer un nuevo repositorio.

Comandos: 

- git diff --cached - Muestra los cambios en archivos
- git add archivo - Hace posible ver los cambios con el comando de arriba ^
- U - Nuevo archivo - A - Added

Asi ya tienes tus cambios en el `Staging Area`. (Es la preparación para que compruebes si estas mal o no).

Para hacer el `commit`: 

-  git commit -m "Mensaje del commit"

Y ya ahí sale del `staging` y queda en el repositorio local.

Y ya si quieres agregar un parráfo:

- git commit -am "PARRAFO XD"
- git add -A - Agregar todos los archivos del folder

- git status - Que archivos tienen los cambios. Archivos agregados ,no agregados y pos los cambios. -A es All
- Git log - Generar el historial con la línea de tiempo local.