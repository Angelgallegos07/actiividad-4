const fs = require('fs');

// Clase Mascota
class Mascota {
    constructor(nombre, especie, edad, dueño) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.dueño = dueño;
    }

    // Método para aumentar la edad de la mascota
    cumplirAños() {
        this.edad++;
    }

    // Método estático para guardar las mascotas en un archivo JSON
    static guardarEnArchivo(mascotas, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(mascotas, null, 2));
    }
}

// Crear 5 mascotas
const mascotas = [
    new Mascota("Fido", "Perro", 3, "Carlos"),
    new Mascota("Whiskers", "Gato", 2, "María"),
    new Mascota("Pepe", "Pájaro", 1, "José"),
    new Mascota("Luna", "Conejo", 4, "Ana"),
    new Mascota("Max", "Hamster", 1, "Luis")
];

// Cumplir años para una mascota como ejemplo
mascotas[0].cumplirAños();

// Guardar
