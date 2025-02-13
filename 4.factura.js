const fs = require('fs');

// Clase Factura
class Factura {
    constructor(id, cliente, productos, total) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos;
        this.total = total;
    }

    // Método para calcular el IVA (16%) sobre el total
    calcularIVA() {
        return this.total * 0.16;
    }

    // Método estático para guardar las facturas en un archivo JSON
    static guardarEnArchivo(facturas, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(facturas, null, 2));
    }
}

// Crear 5 facturas
const facturas = [
    new Factura(1, "Carlos Pérez", ["Producto A", "Producto B"], 200),
    new Factura(2, "Ana Gómez", ["Producto C", "Producto D"], 350),
    new Factura(3, "Luis Martínez", ["Producto E", "Producto F"], 420),
    new Factura(4, "Sofía Rodríguez", ["Producto G", "Producto H"], 280),
    new Factura(5, "Juan López", ["Producto I", "Producto J"], 500)
];

// Calcular el IVA de cada factura
facturas.forEach(factura => {
    factura.IVA = factura.calcularIVA();
});

// Guardar las facturas en el archivo JSON
Factura.guardarEnArchivo(facturas, 'facturas.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Facturas guardadas en facturas.json:');
console.log(JSON.stringify(facturas, null, 2));
