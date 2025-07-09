# Proyecto final integrador del curso backend 2025

## Autor: Fernando Ramos
## Comisión: 25023
 
### Descripción:
#### Este repositorio contiene un servidor backend construido como parte de un curso práctico. Utiliza Node.js, Express.js para el manejo de rutas y está conectado a una base de datos en Firebase Firestore. El sistema de autenticación está implementado con JWT y está diseñado para testearse fácilmente desde Postman.

### Tecnologias: 
  * #### Node.js
  * #### Express.js
  * #### Cors
  * #### Dotenv
  * #### Firebase/Firestore
  * #### Jsonwebtoken

### Estructura del Proyecto:
    📁 src/
    ┣ 📁 routes/         # Definición de endpoints
    ┣ 📁 controllers/    # Lógica para manejar las peticiones
    ┣ 📁 services/       # Conexión con Firestore y lógica de negocio
    ┣ 📁 models/         # Estructura de datos y validaciones
    ┣ 📁 middlewares/    # Autenticación JWT y otros
    ┗ 📁 utils/          # Funciones auxiliares


### Instalación:
  * #### Clonar el repositorio:
    - git clone https://github.com/Fernando-Andres-Ramos/proyecto-final-ecommerce-Fernando-Ramos.git
    - cd proyecto-final-ecommerce-Fernando-Ramos
  * #### Instalar dependencias:
    - npm install
  * #### Configurar variables de entorno en .env:
    - PORT=3000
    - FIREBASE_API_KEY= 
    - FIREBASE_AUTH_DOMAIN= 
    - FIREBASE_PROJECT_ID= 
    - FIREBASE_STORAGE_BUCKET= 
    - FIREBASE_MESSAGING_SENDER_ID= 
    - FIREBASE_APP_ID= 
    - JWT_SECRET_KEY=
  * #### Iniciar el servidor:
    - npm run dev

### Uso:
  #### Para su utilización en POSTMAN deberas acceder a la ruta /api/login con metodo POST y obtener un token JWT, dicho token. Debés incluir el token en el encabezado Authorization: Bearer <token> para acceder a rutas protegidas (POST, UPDATE, DELETE) de productos.

### Endpoints disponibles:

| Método  | Endpoint               | Autorización | Uso          | Ejemplo de petición |
|---------|------------------------|--------------|--------------|----------------------|
| GET     | `/api/products`        | No           | Web / Postman | Obtener todos los productos |
| GET     | `/api/products/:id`    | No           | Web / Postman | `/api/products/123` |
| POST    | `/api/products`        | Sí           | Postman       | Body: `{ "title": "Camara Web", "price": 25000 }` con Token en Header |
| PUT     | `/api/products/:id`    | Sí           | Postman       | `/api/products/123` con Body actualizado |
| DELETE  | `/api/products/:id`    | Sí           | Postman       | `/api/products/123` con Token en Header |
| POST    | `/api/login`           | No           | Postman       | Body: `{ "email": "user@email.com", "password": "strongPass123" }` |

