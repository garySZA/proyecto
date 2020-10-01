let mainPosition = window.pageYOffset;
let nav = document.getElementsByClassName("nav")[0];

const displayMenuBar = () => {
    let currentPosition = window.pageYOffset;

    if(mainPosition >= currentPosition){
        nav.style.top = "0px";
    }else{
        nav.style.top = "-100px";
    }

    mainPosition = currentPosition;
}

window.addEventListener("scroll", displayMenuBar);

let mainPosition2 = window.pageYOffset;
let socials2 = document.getElementsByClassName("socials2")[0];

const displayMenuBar2 = () => {
    let currentPosition = window.pageYOffset;

    if(mainPosition2 >= currentPosition){
        socials2.style.bottom = "0px";
    }else{
        socials2.style.bottom = "-100px";
    }
    mainPosition2 = currentPosition;
}

window.addEventListener("scroll", displayMenuBar2);


/***** */
let links = document.querySelector(".contenedor-links");
let menuButtom = document.querySelector("#hamburguer");
let flag = true;

const displayMenu = () => {
    if(flag){
        menuButtom.style.color = "silver";
        flag = false
    }else{
        menuButtom.style.color = "silver";
        flag = true;
    }

    links.classList.toggle("menu-effect");

}

menuButtom.addEventListener("click",displayMenu);

/*  formulario */

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,8}$/, // 7 a 8 numeros.
  };

  const campos = {
    nombre: false,
    correo: false,
    telefono: false,
  }

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre" :
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "correo" :
            validarCampo(expresiones.correo, e.target, "correo");
            break;
        case "telefono" :
            validarCampo(expresiones.telefono, e.target, "telefono")
    }
}

const validarCampo = (expresiones, input, campo) => {
    if(expresiones.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");

        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");

        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");

        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");

         campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const terminos = document.getElementById("terminos");
  if (campos.nombre && campos.correo && campos.telefono) {
    formulario.reset();

    document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");

    document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");

    setTimeout(() => {
      document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
      icono.classList.remove("formulario__grupo-correcto");
    })
  } else {
    console.log('else');
    document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
  }
})

/*     Aparicion de formulario*/

let btn = document.getElementsByClassName("caja-link")[0];
let form = document.getElementsByClassName("cont-main")[0]
let tam = window.outerWidth;

const mostrarForm = () => {
    form.classList.add("main2");
}

btn.addEventListener("click",mostrarForm);


/**
 * salir de formulario
 */
let btnSalir = document.getElementsByClassName("salir")[0];
let forms = document.getElementsByClassName("cont-main")[0];

const salirForm = () => {
    forms.classList.remove("main2");
}

btnSalir.addEventListener("click", salirForm);

ScrollReveal().reveal('.headline');