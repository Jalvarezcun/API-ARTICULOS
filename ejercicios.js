/**
 * ejercicios.js
 * -------------
 * Aquí están las funciones que resuelven cada ejercicio del enunciado,
 * operando sobre el array de productos. Cada función recibe el array
 * de productos como parámetro y devuelve el resultado pedido.
 */

// Array de productos de ejemplo (el mismo del enunciado)
var productos = [
  { id: 1, nombre: "Laptop Lenovo", precio: 2800000, stock: 8, categoria: "Tecnología" },
  { id: 2, nombre: "Mouse Logitech", precio: 120000, stock: 25, categoria: "Tecnología" },
  { id: 3, nombre: "Teclado Mecánico", precio: 350000, stock: 12, categoria: "Tecnología" },
  { id: 4, nombre: "Silla Ergonómica", precio: 850000, stock: 5, categoria: "Muebles" },
  { id: 5, nombre: "Escritorio", precio: 1200000, stock: 7, categoria: "Muebles" },
  { id: 6, nombre: "Audífonos Sony", precio: 450000, stock: 18, categoria: "Audio" },
  { id: 7, nombre: "Micrófono USB", precio: 380000, stock: 10, categoria: "Audio" },
  { id: 8, nombre: "Monitor Samsung", precio: 950000, stock: 6, categoria: "Tecnología" }
];

// 1) Obtener los productos cuyo precio sea mayor a $100.000
function obtenerProductosPrecioMayor(listaProductos) {
  var resultado = [];

  for (var i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].precio > 100000) {
      resultado.push(listaProductos[i]);
    }
  }

  return resultado;
}

// 2) Calcular el valor total del inventario (precio × stock)
function calcularValorTotalInventario(listaProductos) {
  var total = 0;

  for (var i = 0; i < listaProductos.length; i++) {
    total = total + (listaProductos[i].precio * listaProductos[i].stock);
  }

  return total;
}

// 3) Encontrar el producto con mayor stock
function encontrarProductoMayorStock(listaProductos) {
  if (listaProductos.length === 0) {
    return null;
  }

  var productoMayor = listaProductos[0];

  for (var i = 1; i < listaProductos.length; i++) {
    if (listaProductos[i].stock > productoMayor.stock) {
      productoMayor = listaProductos[i];
    }
  }

  return productoMayor;
}

// 4) Obtener un nuevo array solo con los productos de categoría "Tecnología"
function obtenerProductosTecnologia(listaProductos) {
  var resultado = [];

  for (var i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].categoria === "Tecnología") {
      resultado.push(listaProductos[i]);
    }
  }

  return resultado;
}

// 5) Buscar un producto por su id
function buscarProductoPorId(listaProductos, id) {
  var idBuscado = Number(id);

  for (var i = 0; i < listaProductos.length; i++) {
    if (listaProductos[i].id === idBuscado) {
      return listaProductos[i];
    }
  }

  return null;
}

// 6) Generar un objeto con la cantidad de productos agrupados por categoría
function contarProductosPorCategoria(listaProductos) {
  var conteo = {};

  for (var i = 0; i < listaProductos.length; i++) {
    var categoria = listaProductos[i].categoria;

    if (conteo[categoria] === undefined) {
      conteo[categoria] = 1;
    } else {
      conteo[categoria] = conteo[categoria] + 1;
    }
  }

  return conteo;
}

module.exports = {
  productos: productos,
  obtenerProductosPrecioMayor: obtenerProductosPrecioMayor,
  calcularValorTotalInventario: calcularValorTotalInventario,
  encontrarProductoMayorStock: encontrarProductoMayorStock,
  obtenerProductosTecnologia: obtenerProductosTecnologia,
  buscarProductoPorId: buscarProductoPorId,
  contarProductosPorCategoria: contarProductosPorCategoria
};
