/**
 * server.js
 * ----------
 * Servidor Express que expone las funciones de ejercicios.js como una API REST.
 *
 * Para correrlo:
 *   1) npm install
 *   2) node server.js
 *
 * Endpoints:
 *   GET /api/productos                    -> todos los productos
 *   GET /api/productos/precio-mayor       -> productos con precio > $100.000
 *   GET /api/productos/valor-total        -> valor total del inventario (precio x stock)
 *   GET /api/productos/mayor-stock        -> producto con mayor stock
 *   GET /api/productos/tecnologia         -> productos de categoría "Tecnología"
 *   GET /api/productos/categorias/conteo  -> cantidad de productos por categoría
 *   GET /api/productos/:id                -> busca un producto por su id
 */

var express = require('express');
var ejercicios = require('./ejercicios.js');

var app = express();
var PORT = 3000;

var productos = ejercicios.productos;

// 1) Productos con precio mayor a $100.000
app.get('/api/productos/precio-mayor', function (req, res) {
  var resultado = ejercicios.obtenerProductosPrecioMayor(productos);
  res.json(resultado);
});

// 2) Valor total del inventario
app.get('/api/productos/valor-total', function (req, res) {
  var total = ejercicios.calcularValorTotalInventario(productos);
  res.json({ valorTotalInventario: total });
});

// 3) Producto con mayor stock
app.get('/api/productos/mayor-stock', function (req, res) {
  var producto = ejercicios.encontrarProductoMayorStock(productos);
  res.json(producto);
});

// 4) Productos de categoría "Tecnología"
app.get('/api/productos/tecnologia', function (req, res) {
  var resultado = ejercicios.obtenerProductosTecnologia(productos);
  res.json(resultado);
});

// 6) Conteo de productos agrupados por categoría
// (va antes de /:id para que Express no confunda "categorias" con un id)
app.get('/api/productos/categorias/conteo', function (req, res) {
  var conteo = ejercicios.contarProductosPorCategoria(productos);
  res.json(conteo);
});

// Lista completa de productos
app.get('/api/productos', function (req, res) {
  res.json(productos);
});

// 5) Buscar producto por id (esta ruta va al final porque es la más general)
app.get('/api/productos/:id', function (req, res) {
  var id = req.params.id;

  if (isNaN(Number(id))) {
    res.status(400).json({ error: 'El ID debe ser un número' });
    return;
  }

  var producto = ejercicios.buscarProductoPorId(productos, id);

  if (!producto) {
    res.status(404).json({ error: 'Producto con ID ' + id + ' no encontrado' });
    return;
  }

  res.json(producto);
});

// Ruta raíz -> guía rápida de la API
app.get('/', function (req, res) {
  res.json({
    mensaje: 'API de Productos funcionando correctamente',
    endpoints: [
      'GET /api/productos',
      'GET /api/productos/precio-mayor',
      'GET /api/productos/valor-total',
      'GET /api/productos/mayor-stock',
      'GET /api/productos/tecnologia',
      'GET /api/productos/categorias/conteo',
      'GET /api/productos/:id'
    ]
  });
});

app.listen(PORT, function () {
  console.log('Servidor corriendo en http://localhost:' + PORT);
});
