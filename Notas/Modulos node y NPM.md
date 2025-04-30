
(Node pacakage manager).

NPM es una librería de muchos paquetes.

## Express


Es un paquete de express , es un framework. Te ayuda hacer aplciaciones web.

Te da métodos o Add-Ons para trabajar con APIS y con lo que necesites para "backend".



- Te ayuda a iniciar un servidor que se queda a la escucha de solicitudes.
- Manejar solicitudes entrantes.
- Especificar código que va hacia cieta ruta.
- Crear respuestas http asociadas a contenido.

Hello everyone,

**NOTE: keep this noted if you get the error mentioned below anywhere later in the course, too.**

While watching and following the next lecture video, if you by any chance get an error saying ``throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`); TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError``, then please find and update the following line in your **index.js** code (again, this line is added during the next lecture video):

1. app.get('*', (req, res) => {

Change that line to **exactly** this:

1. app.get(/(.*)/, (req, res) => {

Then, save the app.js file changes and restart your node app, and that specific error should be resolved.

If you get any questions or issues, please reach out on the course Q&A boards and let us know.

Kind regards,  
Zarko — _Course Teaching Assistant_


![[Pasted image 20250426001605.png]]