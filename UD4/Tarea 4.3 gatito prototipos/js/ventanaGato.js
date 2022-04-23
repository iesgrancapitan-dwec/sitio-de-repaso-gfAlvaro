/**
 * @name ventanaGato
 * código para crear la ventana con los datos del gato
 * @author Álvaro García Fuentes
 */
let peso;
let mensajeAccion;
let imagen;

function juega() {
    try {
        Gatete.juega();
        actualizaMensajeAccion("¿Echamos un FIFA?", "../imagenesGato/jugar.jpg");
    } catch (e) {
        actualizaMensajeAccion(e.message, "../imagenesGato/muerto.jpg");
    }
}

function come() {
    try {
        Gatete.come();
        actualizaMensajeAccion("Cuanta hambre", "../imagenesGato/comer.jpg");
    } catch (e) {
        actualizaMensajeAccion(e.message, "../imagenesGato/muerto.jpg");
    }
}

function duerme() {
    try {
        actualizaMensajeAccion(Gatete.duerme(), "../imagenesGato/dormir.jpg");
    } catch (e) {
        actualizaMensajeAccion(e.message, "../imagenesGato/muerto.jpg");
    }
}

function actualizaMensajeAccion(mensaje, rutaimagen) {
    mensajeAccion.textContent = mensaje;
    imagen.src = rutaimagen;
    asignaPeso();
}

function asignaPeso() {
    document.getElementById("peso").textContent = "Peso: " + Gatete.peso + " kg";
}

function asignaInformacionGato() {
    document.getElementById("nombre").textContent += Gatete.nombre;
    document.getElementById("raza").textContent += Gatete.raza;
    asignaPeso();
    document.getElementById("fechaNacimiento").textContent += Gatete.getFecha();
    muestraEdad();
}

function muestraEdad() {
    mensaje = "";
    let edad = Gatete.calculaEdad();
    if (Array.isArray(edad)) {
        meses = edad[0];
        dias = edad[1];
        if (meses == 0 && dias == 0)
            mensaje = "Recien nacido";
        else if (meses == 0 && dias == 1)
            mensaje = dias + " día";
        else if (meses == 0 && dias > 1)
            mensaje = dias + " días";
        else if (meses == 1 && dias == 0)
            mensaje = mes + " mes";
        else if (meses == 1 && dias == 1)
            mensaje = meses + " mes y " + dias + " día";
        else if (meses > 1 && dias == 1)
            mensaje = meses + " meses y " + dias + " días";
        else if (meses == 1 && dias > 1)
            mensaje = meses + " mes y " + dias + " días";
        else
            mensaje = meses + " meses y " + dias + " días";
    } else {
        mensaje = (edad == 1) ? edad + " año" : edad + " años";
    }
    document.getElementById("edad").textContent += mensaje;
}

document.addEventListener("DOMContentLoaded", () => {

    peso = document.getElementById("peso");
    mensajeAccion = document.getElementById("mensajeAccion");
    imagen = document.getElementById("imagen");
    asignaInformacionGato();
    document.getElementById("jugar").addEventListener("click", juega);
    document.getElementById("comer").addEventListener("click", come);
    document.getElementById("dormir").addEventListener("click", duerme);
});