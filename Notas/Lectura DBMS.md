

## Definiciones clave

- Base de datos (BD): Colección de archivos interrelacionados diseñados para minimizar la redundancia y representar de manera integral los datos de una organización. Ejemplos: registros de alumnos, cursos e inscripciones en una universidad.

- DBMS (Sistema de Gestión de Bases de Datos): Software que gestiona el acceso, almacenamiento, seguridad e integridad de una base de datos. Ejemplos: MySQL, Oracle.


## Justificación y contexto de las bases de datos


1. **Problemas sin bases de datos (enfoque tradicional de archivos):**
    
    - **Redundancia e inconsistencia:** Datos repetidos en múltiples archivos, generando conflictos (ejemplo: direcciones contradictorias de un cliente).
        
    - **Aislamiento de datos:** Dificultad para acceder a información distribuida en formatos distintos.
        
    - **Problemas de concurrencia:** Actualizaciones simultáneas sin control pueden corromper datos (ejemplo: saldos incorrectos en cuentas bancarias).
        
    - **Falta de seguridad e integridad:** Restricciones no centralizadas y acceso no regulado.
        
2. **Ventajas del enfoque de bases de datos:**
    
    - **Centralización:** Datos únicos y compartidos para múltiples aplicaciones y usuarios.
        
    - **Eficiencia:** Optimización de espacio y acceso rápido, incluso con grandes volúmenes (ejemplo: padrones electorales).
        
    - **Consistencia:** Diseño estructurado que evita repeticiones y contradicciones.

### **Funciones clave de un DBMS**

1. **Gestión de datos:**
    
    - Almacena y recupera datos mediante interacción con el sistema de archivos del SO.
        
    - Facilita consultas complejas (ejemplo: filtrar clientes por código postal).
        
2. **Control de integridad:**
    
    - Aplica reglas para mantener la coherencia (ejemplo: saldo mínimo en cuentas bancarias).
        
3. **Seguridad:**
    
    - Restringe accesos no autorizados (ejemplo: empleados de nómina no ven datos de clientes).
        
4. **Copia de seguridad y recuperación:**
    
    - Protege datos ante fallos del sistema (ejemplo: restauración tras un corte eléctrico).
        
5. **Control de concurrencia:**
    
    - Gestiona accesos simultáneos para evitar inconsistencias (ejemplo: retiros simultáneos en una cuenta).
        

---

### **Casos de uso recomendados**

- **Datos interrelacionados:** Empresas con múltiples áreas (ventas, producción, finanzas).
    
- **Grandes volúmenes:** Directorios telefónicos, registros gubernamentales.
    
- **Multiplataforma:** Sistemas que requieren acceso concurrente y seguro (ejemplo: banca en línea).