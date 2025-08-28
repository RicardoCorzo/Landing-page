let nombre= prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido")
alert("Bienvenido "+ nombre +" "+ apellido + " a mi página")


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".cabecera");
    if (header){
        window.addEventListener("scroll", function(){
            header.classList.toggle("abajo", window.scrollY > 0);
    });
    header.classList.toggle("abajo", window.scrollY > 0);
    }
});
