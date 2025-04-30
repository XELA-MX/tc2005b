
NodeJS es simplemente un runtime de JS, recientemente solo podías correr JS en un navegador. Con Node eso cambia.

Es básicamente lo que va a estar del lado del servidor , código que no puede ver la gente.

¿Qué construye la gente con node?

- Servidores Web
- Herramientas de líneas de comandos.
- Aplicaciones nativas , VS code es de NODE.
- Videojuegos
- Etc.

Simplemente para correr archivos node es con:

```BATCH

node filename.js

```

## Process & Argv

MPORTANT NOTE: fs.writeFileSync Changes

#### When watching the upcoming 'File System Module Crash Course' video lecture, please be aware that the `fs.writeFileSync` method that we use there underwent some changes in the newer versions of Node.js. Check below for more details and a solution:

Basically, with newer versions of Node.js, you might see the following error message when using the `fs.writeFileSync` method as you are coding along while watching the upcoming lecture video:  
`TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined`

#### **Here is the solution:**

When calling the mentioned `fs.writeFileSync` method, in addition to passing the file name and path that you are writing to as the first argument (string), you must also provide the second argument called `"data"` which is now mandatory — in our case, the `"data"` argument can just be an empty string `''` (see the updated code below).

Explanation: This second `"data"` argument to the `fs.writeFileSync` method specifies the content you want to write to the file internally (in our example here, we are not writing any internal content to the files we're creating and that's why we just specify an empty string there).

Therefore, this is the updated code from the upcoming lecture video that will work with newer versions of Node.js:

1. const fs = require('fs');
2. const folderName = process.argv[2] || 'Project';

3. try {
4.     fs.mkdirSync(folderName);
5.     fs.writeFileSync(`${folderName}/index.html`, '');
6.     fs.writeFileSync(`${folderName}/app.js`, '');
7.     fs.writeFileSync(`${folderName}/styles.css`, '');
8. } catch (e) {
9.     console.log("SOMETHING WENT WRONG!!!");
10.     console.log(e);
11. }

After modifying your code according to these instructions, you shouldn't get any errors related to the missing (undefined) second "data" argument, which is now required when calling the `fs.writeFileSync` method.

If you need any further help with this, please reach out to the course Q&A boards.

Kind regards,


![[Pasted image 20250424003838.png]]


