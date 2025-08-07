/* Página desarrollada y mejorada por:
    ° Adriana María Salgado Madariaga
    ° Angel Johana Hernandez
    ° Diana Carolina Florez Rodríguez
    ° Donovan Jahir Bohórquez Espinosa
    ° Jhon Parra
    ° Idelber Alexander Morales Rubio
    ° Nicolás Triviño Lopez
    ° Laura Camila Romero Salgado
    ° Yesica Lorena Martinez Camacho
    ° Ricardo Corzo */


let nombre= prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido")
alert("Bienvenido "+ nombre +" "+ apellido + " a nuestro proyecto del equipo 2")


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".cabecera");
    if (header){
        window.addEventListener("scroll", function(){
            header.classList.toggle("abajo", window.scrollY > 0);
    });
    header.classList.toggle("abajo", window.scrollY > 0);
    }
});
