const fs = require('fs');

// Clase Producto
class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    // Método para aplicar un descuento sobre el precio
    aplicarDescuento(porcentaje) {
        this.precio = this.precio - (this.precio * (porcentaje / 100)); // Descuento aplicado
    }

    // Método estático para guardar productos en un archivo JSON
    static guardarEnArchivo(productos, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(productos, null, 2));
    }
}

// Crear 5 productos
const productos = [
    new Producto("Laptop", 1000, "Electrónica", 15),
    new Producto("Camiseta", 20, "Ropa", 50),
    new Producto("Cafetera", 150, "Electrodomésticos", 30),
    new Producto("Smartphone", 800, "Electrónica", 25),
    new Producto("Zapatos", 50, "Ropa", 40)
];

// Aplicar descuentos
productos[0].aplicarDescuento(10); // Descuento del 10% en la Laptop (1000 - 100 = 900)
productos[1].aplicarDescuento(15); // Descuento del 15% en la Camiseta (20 - 3 = 17)
productos[2].aplicarDescuento(20); // Descuento del 20% en la Cafetera (150 - 30 = 120)
productos[3].aplicarDescuento(5);  // Descuento del 5% en el Smartphone (800 - 40 = 760)
productos[4].aplicarDescuento(10); // Descuento del 10% en los Zapatos (50 - 5 = 45)

// Guardar los productos en el archivo JSON
Producto.guardarEnArchivo(productos, 'productos.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Productos guardados en productos.json:');
console.log(JSON.stringify(productos, null, 2));
