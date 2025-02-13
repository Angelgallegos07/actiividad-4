const fs = require('fs');

// Clase Evento
class Evento {
    constructor(nombre, fecha, lugar, costoEntrada) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.costoEntrada = costoEntrada;
    }

    // Método para cambiar la fecha del evento
    cambiarFecha(nuevaFecha) {
        this.fecha = nuevaFecha;
    }

    // Método estático para guardar los eventos en un archivo JSON
    static guardarEnArchivo(eventos, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(eventos, null, 2));
    }
}

// Crear 5 eventos
const eventos = [
    new Evento("Concierto de Rock", "2025-03-15", "Estadio Nacional", 150),
    new Evento("Teatro de Comedia", "2025-04-20", "Teatro Principal", 50),
    new Evento("Feria de Ciencia", "2025-05-10", "Centro de Convenciones", 20),
    new Evento("Exposición de Arte", "2025-06-05", "Museo de Arte Moderno", 30),
    new Evento("Festival Gastronómico", "2025-07-12", "Parque Central", 10)
];

// Cambiar la fecha de un evento como ejemplo
eventos[0].cambiarFecha("2025-03-18");

// Guardar los eventos en el archivo JSON
Evento.guardarEnArchivo(eventos, 'eventos.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Eventos guardados en eventos.json:');
console.log(JSON.stringify(eventos, null, 2));
