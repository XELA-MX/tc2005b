
Formas de incluirlo:

1. Inline

```CSS

<p style="font-size: 20px"> Parrafo </p>

```

2. Interno o embebido

```HTML

<style>
	p{
		font-size: 20px
	}
</style>

<p> Parrafo </p>

```

3. Externo

```HTML

<Header>
<link rel="stylesheet" src="estilo.css">
</Header>

```



## Selectores

- Elemento

```CSS

p{
	padding: 20px
}

```

- ID

```CSS

#destacado{
	margin: 10px
}

```

- Clase

```CSS

.clase{
	font-weight: bold;
}

```

- Atributo

```CSS

input[type="text"]{
	background-color: red;
}

```

- Combinados

```CSS

div .container p{
	font-size: 20px;
}

```

```HTML

<div class="container">
	<p>
		Parrafo que se va a modificar
	</p>
</div>

```

- Pseudo-clases

```CSS

a:hover{
	
}

li:first-child{
	font-size: 50em;
}

li.styled:hover{

}

```


## Propiedades básicas - Colores


```CSS

p{
	color: red;
	color: #FF0000;
	color: rgb(255,0,0);
	color: rgba(255,0,0,5);
}

```


### Tipografía

```CSS

p{
	font-family: Arial;
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	text-decoration: underline;
	text-transform: uppercase;
	text-align: center;
	line-height: 1.5;
	letter-spacing: 1px;
	word-spacing: 2px;
}

```


## Fondos

1. Color de fondo: 

```CSS

background-color: red;

```

2. Imagen de fondo

```CSS

p{
	background-image: "LINK";
}

```

3. Gradiente



## `Flexbox` 

En fila:

- `justify-content: center; align-items: center;`
- `flex-direction: row; justify-content: space-between;`
- `flex-direction: column; align-items: center;`


Tienes una dirección y alineación.


## `flex-grow y flex-wrap `

- `flex-grow` Tamaño de los elementos adentro de manera proporcional.

## `Grid` 

Es una malla de manera responsiva.

```CSS
body{
	display: grid;
	grid-template-columns: 1fr 1fr; /* 2 columnas */ /* 3 columnas 1 fr repeat(3,1fr)*/
	grid-gap: 10px;
	background-color: white;
	padding: 10px;
	margin-bottom: 20px;
	border: 1px solid #ccc;
}

```


## Transiciones y animaciones


![[Imagen de WhatsApp 2025-03-26 a las 12.07.11_155a02d3.jpg]]


Elementos normal , tu etiqueta transición y a donde.

![[Imagen de WhatsApp 2025-03-26 a las 12.07.56_6806ef80.jpg]]

