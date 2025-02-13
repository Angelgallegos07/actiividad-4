const fs = require('fs');

// Clase Estudiante
class Estudiante {
    constructor(nombre, edad, carrera, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
    }

    // Método para aprobar una materia y actualizar el promedio
    aprobarMateria(calificacion) {
        this.promedio = (this.promedio + calificacion) / 2; // Promedio actualizado
    }

    // Método estático para guardar estudiantes en un archivo JSON
    static guardarEnArchivo(estudiantes, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(estudiantes, null, 2));
    }
}

// Crear 5 estudiantes
const estudiantes = [
    new Estudiante("Juan Pérez", 21, "Ingeniería", 8.5),
    new Estudiante("Ana García", 22, "Medicina", 9.0),
    new Estudiante("Luis Fernández", 20, "Arquitectura", 7.5),
    new Estudiante("María López", 23, "Derecho", 8.0),
    new Estudiante("Carlos Martínez", 24, "Psicología", 7.0)
];

// Aprobar una materia y actualizar el promedio
estudiantes[0].aprobarMateria(9.0); // Nuevo promedio: (8.5 + 9.0) / 2 = 8.75
estudiantes[1].aprobarMateria(8.5); // Nuevo promedio: (9.0 + 8.5) / 2 = 8.75
estudiantes[2].aprobarMateria(6.0); // Nuevo promedio: (7.5 + 6.0) / 2 = 6.75
estudiantes[3].aprobarMateria(9.5); // Nuevo promedio: (8.0 + 9.5) / 2 = 8.75
estudiantes[4].aprobarMateria(8.0); // Nuevo promedio: (7.0 + 8.0) / 2 = 7.5

// Guardar los estudiantes en el archivo JSON
Estudiante.guardarEnArchivo(estudiantes, 'estudiantes.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Estudiantes guardados en estudiantes.json:');
console.log(JSON.stringify(estudiantes, null, 2));
