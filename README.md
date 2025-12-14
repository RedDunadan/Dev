# Proyecto Final - API REST

Esta es una API REST construida con Node.js y Express que permite la autenticación de usuarios y la gestión de productos. Utiliza Firebase para el almacenamiento de datos y JWT para la autenticación.

## Instalación

1. Clona el repositorio o descarga los archivos.
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Copia el archivo `.env-example` a `.env` y configura las variables de entorno necesarias (como las claves de Firebase y JWT_SECRET).

## Uso

Para ejecutar el servidor en modo desarrollo:
```sh
npm run dev
```

El servidor se ejecutará en el puerto especificado en `.env` (por defecto 3000).

## Endpoints de la API

### Autenticación

- **POST /api/auth/login**
  - Descripción: Inicia sesión con credenciales.
  - Cuerpo de la solicitud (JSON):
    ```json
    {
      "email": "x@x.com",
      "password": "1234"
    }
    ```
  - Respuesta exitosa: `{ "token": "jwt_token_here" }`
  - Respuesta de error: 401 Unauthorized

### Productos

- **GET /api/products**
  - Descripción: Obtiene todos los productos.
  - Respuesta: Lista de productos en JSON.

- **GET /api/products/search**
  - Descripción: Busca productos por nombre (parámetro de consulta `name`).
  - Ejemplo: `/api/products/search?name=producto`
  - Respuesta: Lista de productos coincidentes.

- **GET /api/products/:id**
  - Descripción: Obtiene un producto por ID.
  - Respuesta: Detalles del producto en JSON.

- **POST /api/products**
  - Descripción: Crea un nuevo producto (requiere autenticación).
  - Headers: `Authorization: Bearer <token>`
  - Cuerpo de la solicitud (JSON): Datos del producto.
  - Respuesta: Producto creado.

- **DELETE /api/products/:id**
  - Descripción: Elimina un producto por ID (requiere autenticación).
  - Headers: `Authorization: Bearer <token>`
  - Respuesta: Confirmación de eliminación.

## Autenticación

Para acceder a endpoints protegidos (como crear o eliminar productos), incluye el token JWT en el header `Authorization` como `Bearer <token>`. Obtén el token desde el endpoint de login.

## Variables de Entorno

Configura las siguientes variables en `.env`:
- `PORT`: Puerto del servidor (ej. 3000)
- `JWT_SECRET`: Clave secreta para JWT
- `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, etc.: Credenciales de Firebase

## Dependencias

- Express
- Firebase
- JWT
- bcrypt
- cors
- dotenv

## Autor

Angel Sarmiento
