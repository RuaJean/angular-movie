# **Gestión de Empleados y Entidades**

Este proyecto es una aplicación web para la gestión de empleados y entidades. Incluye funcionalidades como crear, listar, editar y eliminar empleados y entidades, además de autenticación con JWT.

---

## **Características**

- **Autenticación**: Login con JWT.
- **Gestión de Empleados**:
    - Crear, editar, listar y eliminar empleados.
    - Ver detalles de un empleado.
- **Gestión de Entidades**:
    - Crear, editar, listar y eliminar entidades.
    - Ver detalles de una entidad.
- **Protección de rutas**: Solo los usuarios autenticados tienen acceso a las funcionalidades de CRUD.
- **API Backend**: Comunicación con una API basada en Node.js/ASP.NET Core.

---

## **Tecnologías Usadas**

- **Frontend**: Angular 15+
- **Backend**: .NET Core con API REST
- **Base de Datos**: SQL Server
- **Autenticación**: JWT
- **Estilo**: CSS con diseño responsivo.

---

## **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) 
- Angular CLI 
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) o cualquier editor de tu elección
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (si estás usando una base de datos local)

---

## **Cómo Ejecutar el Proyecto**

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/RuaJean/angular_movie.git
cd angular_movie

```
 
**2. Instalar Dependencias**

Navega al directorio del proyecto y ejecuta el siguiente comando:

```bash
npm install

```

### **3. Configurar el Backend**

El proyecto está configurado para conectarse a una API backend. Verifica que el backend esté corriendo en el endpoint:

```arduino
https://pruebatecnica-backend.azurewebsites.net

```

Asegúrate de que el backend tenga habilitados los endpoints necesarios:

- **Login**: `POST /api/Auth/login`
- **CRUD Empleados**: `/api/Empleados`
- **CRUD Entidades**: `/api/Entidades`

### **4. Iniciar la Aplicación**

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
ng serve

```

Accede a la aplicación en:

```arduino

http://localhost:4200

```

---

**Estructura del Proyecto**

```lua

src/
|-- app/
    |-- auth/
    |-- components/
        |-- empleados/
        |-- entidades/
    |-- models/
    |-- services/
    |-- app.module.ts
    |-- app-routing.module.ts

```

---

## **Endpoints de la API**

### **Autenticación**

- **Login**: `POST /api/Auth/login`

### **Empleados**

- **Listar**: `GET /api/Empleados`
- **Detalle**: `GET /api/Empleados/{id}`
- **Crear**: `POST /api/Empleados`
- **Editar**: `PUT /api/Empleados/{id}`
- **Eliminar**: `DELETE /api/Empleados/{id}`

### **Entidades**

- **Listar**: `GET /api/Entidades`
- **Detalle**: `GET /api/Entidades/{id}`
- **Crear**: `POST /api/Entidades`
- **Editar**: `PUT /api/Entidades/{id}`
- **Eliminar**: `DELETE /api/Entidades/{id}`

---

## **Cómo Contribuir**

1. Haz un fork del repositorio.
2. Crea una rama nueva para tus cambios: `git checkout -b mi-nueva-rama`.
3. Realiza los cambios y haz commit: `git commit -m 'Mi cambio'`.
4. Haz push a tu rama: `git push origin mi-nueva-rama`.
5. Abre un Pull Request.

---

## **Licencia**

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo `LICENSE` para más información.