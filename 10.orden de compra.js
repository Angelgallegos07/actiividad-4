const fs = require('fs');

// Clase OrdenDeCompra
class OrdenDeCompra {
    constructor(id, cliente, productos) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos; // Array de productos con {nombre, precio}
        this.total = 0; // Inicializamos el total a 0
    }

    // Método para calcular el total de la orden
    calcularTotal() {
        this.total = this.productos.reduce((suma, producto) => suma + producto.precio, 0);
        return this.total;
    }

    // Método estático para guardar las órdenes en un archivo JSON
    static guardarEnArchivo(ordenes, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(ordenes, null, 2));
    }
}

// Crear 5 órdenes de compra
const ordenes = [
    new OrdenDeCompra(1, "Carlos Ruiz", [
        { nombre: "Laptop", precio: 1000 },
        { nombre: "Mouse", precio: 20 },
        { nombre: "Teclado", precio: 50 }
    ]),
    new OrdenDeCompra(2, "María López", [
        { nombre: "Celular", precio: 700 },
        { nombre: "Funda", precio: 15 }
    ]),
    new OrdenDeCompra(3, "José Gómez", [
        { nombre: "Monitor", precio: 300 },
        { nombre: "Parlantes", precio: 40 }
    ]),
    new OrdenDeCompra(4, "Lucía Fernández", [
        { nombre: "Auriculares", precio: 100 },
        { nombre: "Mochila", precio: 45 }
    ]),
    new OrdenDeCompra(5, "Pedro Sánchez", [
        { nombre: "Tablet", precio: 250 },
        { nombre: "Papel", precio: 5 }
    ])
];

// Calcular el total para cada orden
ordenes.forEach(orden => orden.calcularTotal());

// Guardar las órdenes de compra en el archivo JSON
OrdenDeCompra.guardarEnArchivo(ordenes, 'ordenes.json');

// Mostrar el contenido de las órdenes de compra en consola
console.log('Órdenes guardadas en ordenes.json:');
console.log(JSON.stringify(ordenes, null, 2));
