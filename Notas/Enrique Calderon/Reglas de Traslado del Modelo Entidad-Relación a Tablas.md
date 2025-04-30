## Introducción

Para implementar un Modelo Entidad-Relación (MER) en una base de datos relacional, se debe traducir a tablas del Modelo Relacional (MR). La notación utilizada es:


```SCSS

nombretabla(nombrecolumna1, nombrecolumna2, ..., nombrecolumnaN)

```

Las columnas subrayadas representan la llave primaria de la tabla.

## Procedimiento de Transferencia


### 1. Entidades

- Por cada entidad se crea una tabla con el mismo nombre.

- Las columnas corresponden a los atributos de la entidad.

- El **identificador** de la entidad se convierte en la **llave primaria**.

- Si no hay identificador, se crea una **llave artificial**.


### 2. Asociaciones N:N

- Se crea una tabla adicional.

- Las columnas incluyen los identificadores de las entidades participantes y los atributos de la asociación.

- La **llave primaria** es la concatenación de las llaves de las entidades involucradas.

- Puede agregarse una **llave artificial** por eficiencia.


### 3. Asociaciones 1:N

- A: entidad con cardinalidad 1

- B: entidad con cardinalidad N

- Se agrega la **llave de A** en la tabla de B (como **clave foránea**).


### 4. Asociaciones 1:1

- Se agrega la **llave primaria de una entidad** a la tabla de la otra.


## Ejemplo (Modelo Abstracto)

MER con entidades: A, B, C
Asociaciones: X (N:N entre A y C), Y (1:N entre A y B)

Traducción al MR:

```

A(a1, a2, a3)
B(b1, b2, a1)
C(c1, c2, c3, c4)
X(a1, c1, x1, x2)


```

- `a1`, `b1`, y `c1` son llaves primarias.
- `X` representa la asociación N:N entre A y C.
- `B` incluye `a1` como clave foránea por la relación 1:N.

## Reglas para Elementos Adicionales del MER

### Relaciones ISA

- Se manejan como relaciones 1:1.
    
- Las tablas de las entidades especializadas heredan la llave de la entidad general.
    
- La **llave primaria** es la misma para general y especializadas.
    

#### Ejemplo:

G(g1, g2, g3)
Ea(g1, a1, a2)
Eb(g1, b1)`

### Entidades Fuertes y Débiles

- Relación 1:N donde la fuerte hereda su llave a la débil.
- La **llave primaria** de la tabla débil incluye:
    - La **llave de la fuerte**
	- Un identificador adicional para distinguir tuplas.


#### Ejemplo:

plaintext

CopyEdit

`F(f1, f2)
D(f1, d1, d2)`

### Roles

- Se usan en **relaciones reflexivas** o múltiples relaciones entre dos entidades.
- Los **roles** diferencian columnas que serían ambiguas.