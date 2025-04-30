

El **Modelo Entidad-Relación (MER)** es una herramienta conceptual para diseñar bases de datos relacionales, enfocada en minimizar redundancias y facilitar la recuperación de información. Su objetivo es estructurar datos en esquemas normalizados que reflejen fielmente la realidad de una organización.

---

### **Problemas en Diseños Incorrectos**

Ejemplo con tablas `PERSONA`, `COCHE` y `TENER`:

1. **Redundancia e inconsistencia**: Datos repetidos (ejemplo: nombre de persona en múltiples registros).
    
2. **Valores nulos**: Espacio desperdiciado al admitir datos vacíos (ejemplo: personas sin coches).
    
3. **Complejidad en actualizaciones**: Modificar datos requiere cambios en múltiples lugares.
    

---

### **Fases del Diseño de Bases de Datos**

1. **Recolección de requerimientos**: Entrevistas con usuarios para definir necesidades.
    
2. **Diseño conceptual**: Creación del esquema usando el **MER** (entidades, relaciones, atributos).
    
3. **Diseño lógico**: Transformación a un modelo relacional (tablas, claves).
    
4. **Diseño físico**: Implementación en un SGBD (estructuras de almacenamiento, índices).
    

---

### **Componentes Clave del Modelo ER**

1. **Entidades**:
    
    - Objetos del mundo real con existencia propia (ejemplo: `Alumnos`, `Cursos`).
        
    - Representadas como **rectángulos** y deben tener un **identificador único** (RFC, matrícula).
        
2. **Asociaciones (Relaciones)**:
    
    - Conexiones entre entidades (ejemplo: `Alumnos inscriben Cursos`).
        
    - Representadas con **rombos** y tienen **cardinalidad** (1:1, 1:N, N:N).
        
    - Tipos de participación: **obligatoria** (doble línea) u **opcional** (línea simple).
        
3. **Atributos**:
    
    - Características de entidades o relaciones.
        
    - Clasificados en:
        
        - **Simples/Compuestos**: Ejemplo: `Dirección` (compuesto por calle, número).
            
        - **Monovaluados/Multivaluados**: Ejemplo: `Color` de un coche (puede ser varios).
            
        - **Derivados**: Calculados a partir de otros (ejemplo: `Edad` a partir de `Fecha_Nacimiento`).
            

---

### **Modelo ER Extendido**

1. **Roles**:
    
    - Permiten que una entidad participe múltiples veces en una relación (ejemplo: `Empleado` como _jefe_ y _subordinado_).
        
2. **Generalización/Especialización (ISA)**:
    
    - **Superclases** (entidad general) y **subclases** (entidades específicas).
        
    - Ejemplo: `Empleados` (superclase) → `Honorarios` y `Planta` (subclases).
        
    - Relación **disjunta** (subclases exclusivas) o **solapada** (subclases compartidas).
        
3. **Entidades Débiles y Fuertes**:
    
    - **Débiles**: Dependen de otra entidad para existir (ejemplo: `Familiar` depende de `Empleado`).
        
    - **Fuertes**: Existen independientemente (ejemplo: `Proveedor`).
        

---

### **Restricciones de Integridad**

1. **Implícitas**:
    
    - Cardinalidad y participación en relaciones (ejemplo: un curso debe tener al menos 3 alumnos).
        
2. **Adicionales**:
    
    - **Atributos**: `Curso.FechaInicial ≤ Curso.FechaFinal`.
        
    - **Recursos críticos**: Límites de capacidad (ejemplo: salones con máximo 40 alumnos).
        
    - **Reglas empresariales**: `Empleado.Sueldo < Jefe.Sueldo`.
        

---

### **Metodología para Construir un MER**

1. Identificar **entidades** (sustantivos).
    
2. Definir **atributos** e **identificadores**.
    
3. Establecer **asociaciones** (verbos) y su cardinalidad.
    
4. Incorporar atributos en relaciones N:N.
    
5. Validar con requerimientos y ajustar.