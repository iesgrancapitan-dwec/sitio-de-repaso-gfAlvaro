/**
 * @name main.js
 * @author Álvaro García Fuentes
 */

import Validar from validar.js;

    let objetoInputs = {
        textoObligatorio: {
            elemento: textoObligatorio,
            callback: () => textoObligatorio.nextElementSibling.innerHTML = Validar.textoObligatorio.value
        },

        checkboxObligatorio: {
            elemento: checkboxObligatorio,
            callback: () => checkboxObligatorio.nextElementSibling.innerHTML = Validar.compruebaCheckbox(checkboxObligatorio)
        },

        genero: {
            elemento: genero[0],
            callback: () => genero[1].parentElement.nextElementSibling.innerHTML = Validar.compruebaSiChequeado(genero)
        },

        genero2: {
            elemento: genero[1],
            callback: () => genero[1].parentElement.nextElementSibling.innerHTML = Validar.compruebaSiChequeado(genero)
        },

        seleccionado: {
            elemento: seleccionado,
            callback: () => seleccionado.nextElementSibling.innerHTML = Validar.compruebaSeleccionado(seleccionado)
        },

        fecha: {
            elemento: fecha,
            callback: () => fecha.nextElementSibling.innerHTML = Validar.compruebaFecha(fecha)
        },

        entero: {
            elemento: entero,
            callback: () => entero.nextElementSibling.innerHTML = Validar.compruebaEntero(entero)
        },

        decimal: {
            elemento: decimal,
            callback: () => decimal.nextElementSibling.innerHTML = Validar.compruebaDecimal(decimal)
        },

        correo: {
            elemento: correo,
            callback: () => correo.nextElementSibling.innerHTML = Validar.compruebaCorreo(correo)
        },

        URL: {
            elemento: URL,
            callback: () => URL.nextElementSibling.innerHTML = Validar.compruebaURL(URL)
        },

        fechaDeTexto: {
            elemento: fechaDeTexto,
            callback: () => fechaDeTexto.nextElementSibling.innerHTML = Validar.compruebaFechaDeTexto(fechaDeTexto)
        },

        DNI: {
            elemento: DNI,
            callback: () => DNI.nextElementSibling.innerHTML = Validar.compruebaDNI(DNI)
        },

        telefono: {
            elemento: telefono,
            callback: () => telefono.nextElementSibling.innerHTML = Validar.compruebaTelefono(telefono)
        }

    };

    // evento inicial
    document.addEventListener("DOMContentLoaded", function(){

        let f = function () {
            for(let clave in objetoInputs){
                objetoInputs[clave].elemento.addEventListener("blur", objetoInputs[clave].callback);
            }

            objetoInputs["checkboxObligatorio"].elemento.addEventListener("click", objetoInputs["checkboxObligatorio"].callback);

        };

        // limpiar
        document.getElementsByTagName("button")[0].addEventListener("click", function(event){

            event.preventDefault();

            let spans = document.querySelectorAll("span");

            for(const elemento of spans){
                elemento.value = "";
            }

            console.log("Formulario limpiado");
        });

        let accesoInputs = document.querySelectorAll("input");

        // rellenar
        document.getElementsByTagName("button")[2].addEventListener("click", function(event){
            
            event.preventDefault();

            let arrayInputs = ["hola", "Álvaro García", false, "0", "1989-02-02", "7", "0.4",
            "miCorreo@gmail.com", "http://www.google.com", "02/02/1989", "30993717K", "123456789"];

            document.getElementsByName("checkbox")[0].checked = true;

            let i = 0;
            for( const iterator of accesoInputs ){
                iterator.value = arrayInputs[i];
                i++;
            }

            console.log("formulario relleno");
        });

        // enviar
        document.getElementsByTagName("button")[1].addEventListener("click", function(event){

            event.preventDefault();



        });

        // enlace atrás
        document.getElementById("atras").addEventListener( "click", () => history.back() );
    });
