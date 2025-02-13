const fs = require('fs');

// Clase Empleado
class Empleado {
    constructor(nombre, puesto, salario, añosExperiencia) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
        this.añosExperiencia = añosExperiencia;
    }

    // Método para calcular el bono del 10% del salario
    calcularBono() {
        return this.salario * 0.10;
    }

    // Método estático para guardar los empleados en un archivo JSON
    static guardarEnArchivo(empleados, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(empleados, null, 2));
    }
}

// Crear 5 empleados
const empleados = [
    new Empleado("Carlos Pérez", "Desarrollador", 3000, 3),
    new Empleado("Ana Gómez", "Diseñadora", 2800, 5),
    new Empleado("Luis Martínez", "Gerente", 4500, 10),
    new Empleado("Sofía Rodríguez", "Analista", 3200, 6),
    new Empleado("Juan López", "Project Manager", 5000, 8)
];

// Calcular el bono de cada empleado
empleados.forEach(empleado => {
    empleado.bono = empleado.calcularBono();
});

// Guardar los empleados en el archivo JSON
Empleado.guardarEnArchivo(empleados, 'empleados.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Empleados guardados en empleados.json:');
console.log(JSON.stringify(empleados, null, 2));
