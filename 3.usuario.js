const fs = require('fs');

// Clase Usuario
class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    // Método para cambiar la contraseña del usuario
    cambiarContraseña(nuevaContraseña) {
        this.contraseña = nuevaContraseña;
    }

    // Método estático para guardar usuarios en un archivo JSON
    static guardarEnArchivo(usuarios, archivo) {
        fs.writeFileSync(archivo, JSON.stringify(usuarios, null, 2));
    }
}

// Crear 5 usuarios
const usuarios = [
    new Usuario("Carlos Pérez", "carlos@example.com", "contraseña123"),
    new Usuario("Ana Gómez", "ana@example.com", "secreto456"),
    new Usuario("Luis Martínez", "luis@example.com", "123456789"),
    new Usuario("Sofía Rodríguez", "sofia@example.com", "clave987"),
    new Usuario("Juan López", "juan@example.com", "abc12345")
];

// Cambiar las contraseñas de algunos usuarios
usuarios[0].cambiarContraseña("nuevaContraseñaCarlos");
usuarios[2].cambiarContraseña("nuevaContraseñaLuis");
usuarios[4].cambiarContraseña("nuevaContraseñaJuan");

// Guardar los usuarios en el archivo JSON
Usuario.guardarEnArchivo(usuarios, 'usuarios.json');

// Mostrar el contenido del archivo JSON en consola
console.log('Usuarios guardados en usuarios.json:');
console.log(JSON.stringify(usuarios, null, 2));
