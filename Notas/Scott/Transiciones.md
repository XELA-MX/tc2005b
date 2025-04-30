
Puedes empezar estableciendo el cuanto tiempo tarda la transición.

```CSS

transition: 1s;

```

El template es así:

```CSS

transition: propiedad duración timepo delay;

```

Hay maneras de establecer el comportamiento d la transición omo lo pued ser ease , ease-in y hay un ejemplo muy completo en esta página web: https://easings.net


## Transform

Te permite rotar cosas , perspectivas , escalarlas , etc.

Hay muchos transforms:

```CSS

h1{
	/* Keyword values */
	transform: none;
	
	/* Function values */
	transform: matrix(1, 2, 3, 4, 5, 6);
	transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	transform: perspective(17px);
	transform: rotate(0.5turn);
	transform: rotate3d(1, 2, 3, 10deg);
	transform: rotateX(10deg);
	transform: rotateY(10deg);
	transform: rotateZ(10deg);
	transform: translate(12px, 50%);
	transform: translate3d(12px, 50%, 3em);
	transform: translateX(2em);
	transform: translateY(3in);
	transform: translateZ(2px);
	transform: scale(2, 0.5);
	transform: scale3d(2.5, 1.2, 0.3);
	transform: scaleX(2);
	transform: scaleY(0.5);
	transform: scaleZ(0.3);
	transform: skew(30deg, 20deg);
	transform: skewX(30deg);
	transform: skewY(1.07rad);
	
	/* Multiple function values */
	transform: translateX(10px) rotate(10deg) translateY(5px);
	transform: perspective(500px) translate3d(10px, 0, 20px) rotateY(30deg);
	
	/* Global values */
	transform: inherit;
	transform: initial;
	transform: revert;
	transform: revert-layer;
	transform: unset;
}

```


Por ejemplo rotar puede ocupar grados de inclinación , radianes , e inclusive turns. Una vuelta completa son 1 turn.




## La verdad detrás del background


Puedes tener un background-image perro debe tene run url , es algo tipo:

```CSS

bakground-iimag: url("www.tumama.com");

```

Peor hay veces que el navegador corta la imagen para que se vea mejor o simplemente las dimensiones son algo que no cuadran.

Parra eso utilizas la propiedad `background-size:` sus diferentes valores pueden ser cover y contain.

Contain lo que hace es escalar la imagen para que quepa dentro del recuadro. Y si no cuadran las medidas agrega partes de la imagen , se ve muy fo la vdd.

Cover escala a imagen de manera que quepa la imagen , simplemente que quede.

Puedes hacer incluso que se repita la imagen jajajajja , en plan: 

```CSS

background-repeat: repeat-x;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;
background-repeat: space repeat;

```

Puedes inclusive establecr donde quieres que inicie ell background :

![[Pasted image 20250407220514.png]]

