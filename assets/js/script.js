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





function reservarHora(){
    let nombre =  prompt("¿Para quién es la hora?");
    alert("El nombre que hemos guardado es" + nombre)
    console.log("Nombre:", nombre);

    let correo =   prompt("¿Cuál es tu correo de respaldo");
    alert("El nombre que hemos guardado es" + correo)
    console.log("Correo:", correo);

    let telefono =  prompt("¿Cuál es tu teléfono?");
    alert("El nombre que hemos guardado es" + telefono)
    console.log("Teléfono", telefono);


}

