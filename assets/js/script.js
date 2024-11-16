function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show-menu');
}

document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active"); 
    });
});

// function reservarHora(){
//     let nombre =  prompt("¿Para quién es la hora?");
//     alert("El nombre que hemos guardado es" + nombre)
//     console.log("Nombre:", nombre);

//     let correo =   prompt("¿Cuál es tu correo de respaldo");
//     alert("El nombre que hemos guardado es" + correo)
//     console.log("Correo:", correo);

//     let telefono =  prompt("¿Cuál es tu teléfono?");
//     alert("El nombre que hemos guardado es" + telefono)
//     console.log("Teléfono", telefono);
// }

// Función para validar el nombre (no vacío y sin caracteres especiales)
function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    return regex.test(nombre) && nombre.trim() !== ""; // Asegura que no esté vacío
}

// Función para validar el correo
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo estándar
    return regex.test(correo);
}

// Función para validar el teléfono (solo números y entre 7 y 15 dígitos)
function validarTelefono(telefono) {
    const regex = /^\d{7,15}$/; // Solo números de 7 a 15 dígitos
    return regex.test(telefono);
}

// Función genérica para pedir un dato y validarlo
function pedirDato(mensaje, funcionValidar) {
    let dato; // Variable para guardar el dato
    do {
        dato = prompt(mensaje); // Pedir el dato al usuario
        if (!funcionValidar(dato)) {
            alert("El dato ingresado no es válido. Por favor, inténtalo de nuevo.");
        }
    } while (!funcionValidar(dato)); // Repetir mientras el dato no sea válido
    return dato; // Retornar el dato válido
}

// Seleccionar el botón y agregar el evento
const botonReserva = document.getElementById("reserva");
botonReserva.addEventListener("click", function () {
    // Pedir y validar los datos
    const nombre = pedirDato("Por favor, ingresa tu nombre:", validarNombre);
    const correo = pedirDato("Por favor, ingresa tu correo electrónico:", validarCorreo);
    const telefono = pedirDato("Por favor, ingresa tu número de teléfono:", validarTelefono);

    // Mostrar los datos si todo es válido
    console.log("Nombre válido:", nombre);
    console.log("Correo válido:", correo);
    console.log("Teléfono válido:", telefono);

    alert(`Datos válidos:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
});
