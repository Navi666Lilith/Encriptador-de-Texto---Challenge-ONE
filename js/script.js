// Variables DOM

let area = document.querySelector(".area");
let botonEncriptar = document.querySelector(".encrip-btn");
let botonDesencriptar = document.querySelector(".desencrip-btn");
let botonCopiar = document.querySelector(".copiar-btn");
let imagen = document.querySelector(".content-imagen");
let h3 = document.querySelector(".content-h3");
let parrafo = document.querySelector(".content-parrafo");
let contenidoResultado = document.querySelector(".content-resultado");
let titulo = document.querySelector("#titulo-resultado");
let resultado = document.querySelector("#texto-encriptado");
let error = document.querySelector(".error")

// Botones

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


// Selección de Texto

function encriptar(){
    ocultarPresentacion();
    resultado.textContent = encriptarTexto(escribirTexto());
    return true; 
}

function desencriptar(){
    ocultarPresentacion();
    resultado.textContent = desencriptarTexto(escribirTexto()); 
    return true;
}

function copiar(){
    let textoCopiado = resultado;
    navigator.clipboard.writeText(textoCopiado.textContent);
    swal({
        title: "¡Texto Copiado!",
        text: "",
        icon: "success",
        button: "¡Listo!",   
    });  
}

function comprobarTexto(mensaje){
    if (!validarMinuscula(mensaje)) {
        titulo.textContent = "¡ERROR!";
        resultado.classList.add("ocultar");
        botonCopiar.classList.add("ocultar");
        error.classList.remove("ocultar");
        swal({
            title: 'Oops!',
            text: 'Solo minúsculas. Intente de nuevo...',
            icon: 'warning',
            timer: 2000, 
        });
    } else {
        return mensaje;
    }
}

function escribirTexto (){
    return comprobarTexto(area.value);
}

function ocultarPresentacion(){
    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}


//Encriptar - Desencriptar

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoEncript = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncript = textoEncript + "ai";
        }
        else if(texto[i] == "e"){
            textoEncript = textoEncript + "enter";
        }
        else if(texto[i] == "i"){
            textoEncript = textoEncript + "imes";
        }
        else if(texto[i] == "o"){
            textoEncript = textoEncript + "ober";
        }
        else if(texto[i] == "u"){
            textoEncript = textoEncript + "ufat";
        }
        else {
            textoEncript = textoEncript + texto[i];
        }
    }
    return textoEncript;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoDesencript = "";
    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoDesencript = textoDesencript + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoDesencript = textoDesencript + "e";
                i = i+4;
        }
        else if(texto[i] == "i"){
                textoDesencript = textoDesencript + "i";
                i = i+3;
        }
        else if(texto[i] == "o"){
                textoDesencript = textoDesencript + "o";
                i = i+3;
        }
        else if(texto[i] == "u"){
                textoDesencript = textoDesencript + "u";
                i = i+3;
        }
        else {
            textoDesencript = textoDesencript + texto[i];
        }
    }
    return textoDesencript;
}


// Limitar Caracteres

function validarMinuscula(mensaje) {
    const regex = /^[a-z\s]+$/;
    return regex.test(mensaje);
}
