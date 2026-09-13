# API de Productos - Tarea

API REST hecha con **Express (Node.js)** que expone las operaciones pedidas
en el enunciado sobre un array de productos.

## Operaciones implementadas (en `ejercicios.js`)

1. Obtener los productos cuyo precio sea mayor a $100.000
2. Calcular el valor total del inventario (precio × stock)
3. Encontrar el producto con mayor stock
4. Obtener un nuevo array solo con los productos de categoría "Tecnología"
5. Buscar un producto por su id
6. Generar un objeto con la cantidad de productos agrupados por categoría

## Cómo correrlo

1. Instala las dependencias (solo Express):
   ```
   npm install
   ```
2. Levanta el servidor:
   ```
   node server.js
   ```
   o
   ```
   npm start
   ```
3. Verás en la consola:
   ```
   Servidor corriendo en http://localhost:3000
   ```

## Endpoints

| Método | Ruta                                  | Qué hace                                          |
|--------|----------------------------------------|----------------------------------------------------|
| GET    | `/api/productos`                      | Lista todos los productos                          |
| GET    | `/api/productos/precio-mayor`         | Productos con precio > $100.000                    |
| GET    | `/api/productos/valor-total`          | Valor total del inventario (precio × stock)        |
| GET    | `/api/productos/mayor-stock`          | Producto con mayor stock                           |
| GET    | `/api/productos/tecnologia`           | Productos de categoría "Tecnología"                |
| GET    | `/api/productos/categorias/conteo`    | Cantidad de productos agrupados por categoría      |
| GET    | `/api/productos/:id`                  | Busca un producto por su id                        |

## Cómo probarlo

### Con el navegador o curl
```bash
curl http://localhost:3000/api/productos
curl http://localhost:3000/api/productos/precio-mayor
curl http://localhost:3000/api/productos/valor-total
curl http://localhost:3000/api/productos/mayor-stock
curl http://localhost:3000/api/productos/tecnologia
curl http://localhost:3000/api/productos/categorias/conteo
curl http://localhost:3000/api/productos/5
```

### Con Postman
1. Método **GET**.
2. Pega cualquiera de las URLs de la tabla de arriba (con el servidor corriendo).
3. Send, y verás la respuesta en JSON.

## Estructura del proyecto

| Archivo         | Contenido                                                        |
|------------------|-------------------------------------------------------------------|
| `ejercicios.js`  | Array de productos y las funciones que resuelven cada ejercicio  |
| `server.js`      | Servidor Express que expone esas funciones como endpoints REST  |
| `package.json`   | Dependencias del proyecto (Express)                               |
