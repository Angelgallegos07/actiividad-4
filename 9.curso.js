const fs = require('fs');

// Clase Curso
class Curso {
    constructor(nombre, duracion, instructor, costo) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.instructor = instructor;
        this.costo = costo;
        this.estudiantes = []; // Array para almacenar estudiantes
    }

    // Método para inscribir un estudiante
    inscribirEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    // Método estático para guardar los cursos en un archivo JSON
    static guardarEnArchivo(cursos, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(cursos, null, 2));
    }
}

// Crear 5 cursos
const cursos = [
    new Curso("JavaScript Básico", "3 meses", "Juan Pérez", 1500),
    new Curso("Desarrollo Web", "4 meses", "Ana García", 2000),
    new Curso("Python para Principiantes", "2 meses", "Carlos Martínez", 1200),
    new Curso("Programación Avanzada en C", "6 meses", "Lucía Fernández", 2500),
    new Curso("React y Redux", "2.5 meses", "Pedro Sánchez", 1800)
];

// Inscribir estudiantes en los cursos como ejemplo
cursos[0].inscribirEstudiante("Carlos Ruiz");
cursos[1].inscribirEstudiante("María López");
cursos[2].inscribirEstudiante("José Gómez");

// Guardar los cursos en el archivo JSON
Curso.guardarEnArchivo(cursos, 'cursos.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Cursos guardados en cursos.json:');
console.log(JSON.stringify(cursos, null, 2));
