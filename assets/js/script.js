function toggleMenu() {
    try {
        const navLinks = document.getElementById('navLinks');
        if (!navLinks) throw new Error("Elemento 'navLinks' no encontrado.");
        navLinks.classList.toggle('show-menu');
        debugger; // Inspecciona el estado del elemento 'navLinks'
    } catch (error) {
        console.error("Error en toggleMenu:", error);
        alert("Ocurrió un problema al alternar el menú.");
    }
}


try {
    document.querySelectorAll('.navbar__links a').forEach(link => {
        link.addEventListener('click', () => {
            try {
                const navLinks = document.getElementById("navLinks");
                if (!navLinks) throw new Error("Elemento 'navLinks' no encontrado.");
                navLinks.classList.remove("active");
            } catch (error) {
                console.error("Error al manejar el clic en un enlace:", error);
            }
        });
    });
} catch (error) {
    console.error("Error al agregar eventos a los enlaces:", error);
}

function validarNombre(nombre) {
    debugger; // Inspecciona el valor de 'nombre'
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre) && nombre.trim() !== "";
}

function validarCorreo(correo) {
    debugger; // Inspecciona el valor de 'correo'
    if (!correo.includes("@")) {
        return false;
    } else {
        return true;
    }
}

function validarTelefono(telefono) {
    debugger; // Inspecciona el valor de 'telefono'
    const regex = /^\d{7,15}$/;
    return regex.test(telefono);
}


function pedirDato(mensaje, funcionValidar) {
    let dato;
    do {
        try {
            dato = prompt(mensaje); 
            if (!funcionValidar(dato)) {
                throw new Error("El dato ingresado no es válido.");
            }
        } catch (error) {
            console.error("Error al pedir dato:", error);
            alert("Error: " + error.message);
        }
    } while (!funcionValidar(dato));
    return dato;
}

// Seleccionar el botón y agregar el evento
try {
    const botonReserva = document.getElementById("reserva");
    if (!botonReserva) throw new Error("Botón de reserva no encontrado.");

    botonReserva.addEventListener("click", function () {
        try {
            debugger; // Detener la ejecución antes de pedir datos
            const nombre = pedirDato("Por favor, ingresa tu nombre:", validarNombre);
            const correo = pedirDato("Por favor, ingresa tu correo electrónico:", validarCorreo);
            const telefono = pedirDato("Por favor, ingresa tu número de teléfono:", validarTelefono);

            console.log("Nombre válido:", nombre);
            console.log("Correo válido:", correo);
            console.log("Teléfono válido:", telefono);

            alert(`Datos válidos:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
        } catch (error) {
            console.error("Error al manejar el clic en el botón de reserva:", error);
            alert("Ocurrió un problema al procesar tu reserva.");
        }
    });
} catch (error) {
    console.error("Error al inicializar el botón de reserva:", error);
}

// Datos de las personas para las cards
const personas = [
    {
        nombre: "Dr. Yoda Jedi",
        especialidad: "Otorrinolaringología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--yoda.png"
    },
    {
        nombre: "Dr. César Tapia",
        especialidad: "Dermatología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--c3po.png"
    },
    {
        nombre: "Dr. Chew Bacca",
        especialidad: "Cardiología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--chewie.png"
    },
    {
        nombre: "Dr. Darth Vader",
        especialidad: "Cirujía General",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--vader.png"
    }
];

// Seleccionar el contenedor de las cards
try {
    const contenedor = document.querySelector(".cards__container--equipo");
    if (!contenedor) throw new Error("Contenedor de tarjetas no encontrado.");

    personas.forEach(persona => {
        try {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${persona.foto}" class="card__img" alt="Foto de ${persona.nombre}">
                <ul>
                    <li class="card__text--nombre">${persona.nombre}</li>
                    <li class="card__text--especialidad">${persona.especialidad}</li>
                    <li class="card__text--resena">${persona.resena}</li>
                </ul>
            `;

            contenedor.appendChild(card);
        } catch (error) {
            console.error("Error al crear una tarjeta:", error);
        }
    });
} catch (error) {
    console.error("Error al inicializar las tarjetas:", error);
}
