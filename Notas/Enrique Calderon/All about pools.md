
### **Identificación de Elementos Clave para el Sistema All-about-pools**

---

#### **1. Problemática**

- **Gestión ineficiente de operaciones** debido al crecimiento acelerado de la empresa.
    
- **Asignación manual de empleados** por zonas geográficas, con riesgo de errores.
    
- **Falta de centralización** en la gestión de solicitudes, presupuestos, autorizaciones, facturas e informes.
    
- **Dificultad para coordinar servicios** (limpieza, mantenimiento, socorrismo) en tiempo real.
    
- **Retrasos en la comunicación** con clientes (autorización de presupuestos, resolución de incidencias).
    
- **Falta de trazabilidad** entre clientes, servicios, empleados y facturas.
    

---

#### **2. Objetivo**

Desarrollar un **sistema web centralizado** que:

- Optimice la gestión de servicios (solicitudes, asignación de empleados, autorizaciones).
    
- Automatice la asignación de empleados según su ubicación geográfica.
    
- Facilite la comunicación entre clientes, empleados y administradores.
    
- Mantenga registros integrados de clientes, servicios, presupuestos, facturas e informes.
    
- Genere reportes administrativos para la toma de decisiones.
    

---

#### **3. Requerimientos Funcionales**

- **Acceso y seguridad**:
    
    - RF1: Control de acceso por roles (clientes, administradores, empleados).
        
    - RF2: Registro de clientes para acceder a servicios.
        
- **Gestión de servicios**:
    
    - RF3: Solicitud de servicios (limpieza, mantenimiento, socorrismo) por clientes.
        
    - RF4: Visualización y autorización de presupuestos de mantenimiento por clientes.
        
    - RF5: Generación de facturas no automatizadas (solo consulta).
        
    - RF6: Registro y seguimiento de incidencias por clientes.
        
- **Gestión administrativa**:
    
    - RF7: Administración de empleados (alta/baja, zonas geográficas).
        
    - RF8: Asignación de empleados a servicios según ubicación y rol.
        
    - RF9: Generación de reportes (clientes, facturas, ingresos, solicitudes).
        
- **Funciones para empleados**:
    
    - RF10: Consulta de asignaciones de trabajo.
        
    - RF11: Elaboración de informes de servicio.
        
- **Integridad de datos**:
    
    - RF12: Mantener relaciones entre clientes, servicios, presupuestos, empleados y facturas.
        

---

#### **4. Requerimientos No Funcionales**

- **Seguridad**:
    
    - RNF1: Autenticación robusta (ej. HTTPS, cifrado de datos).
        
- **Usabilidad**:
    
    - RNF2: Interfaz intuitiva para clientes y empleados.
        
- **Rendimiento**:
    
    - RNF3: Respuesta en <2 segundos para consultas frecuentes.
        
- **Disponibilidad**:
    
    - RNF4: 99.9% de uptime (excepto mantenimiento programado).
        
- **Escalabilidad**:
    
    - RNF5: Soporte para 10,000 usuarios concurrentes.
        
- **Cumplimiento**:
    
    - RNF6: Adaptación al RGPD (protección de datos en España).
        

---

#### **5. Información (Modelo de Datos)**

- **Clientes**: Datos personales, historial de servicios, incidencias, facturas.
    
- **Empleados**: Datos personales, rol (socorrista, supervisor, mantenimiento), zona geográfica asignada.
    
- **Servicios**: Tipo (limpieza, mantenimiento, socorrismo), fechas, estado, materiales requeridos.
    
- **Presupuestos**: Coste desglosado, autorización del cliente.
    
- **Incidencias**: Descripción, estado, retroalimentación.
    
- **Facturas**: Monto, fecha de emisión, método de pago externo.
    
- **Zonas geográficas**: Provincia, municipio (ej. Pozuelo de Alarcón, Leganés).
    

---

#### **6. Reglas de Negocio**

- RN1: Un empleado solo puede asignarse a servicios dentro de su zona geográfica registrada.
    
- RN2: El mantenimiento requiere autorización del presupuesto por el cliente antes de iniciar.
    
- RN3: Los socorristas se contratan por rangos de fechas específicos.
    
- RN4: Las facturas se pagan externamente (sin integración con pasarelas de pago).
    
- RN5: Toda incidencia debe tener un seguimiento documentado en el sistema.
    
- RN6: Los supervisores deben generar informes técnicos previo a cualquier mantenimiento.
    

---

#### **7. Interfaz**

- **Clientes**:
    
    - Dashboard con servicios activos, historial, facturas y opción para reportar incidencias.
        
    - Formulario de solicitud de servicios con calendario para fechas.
        
- **Administradores**:
    
    - Panel para gestionar empleados (filtros por zona/rol) y generar reportes en PDF/Excel.
        
    - Vista de solicitudes pendientes con opción a asignar empleados y crear presupuestos.
        
- **Empleados**:
    
    - Lista de asignaciones diarias/semanales con detalles (cliente, ubicación, materiales).
        
    - Formulario para subir informes de servicio (fotos, observaciones, horas trabajadas).
        
- **General**:
    
    - Diseño responsive (accesible desde móviles y tablets).
        
    - Notificaciones en tiempo real (ej. autorización de presupuestos, nuevas asignaciones.