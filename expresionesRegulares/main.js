/**
 * @name main.js
 * código principal del cuestionaro de expresiones regulares
 * @author Álvaro García Fuentes
 */
{
    let youtube = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor( this.value, "youtube" );
    }

    let correo = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor( this.value, "correo" );
    } 

    let web = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor( this.value, "web" );
    }

    let fecha = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor( this.value, "fecha" );
    }

    let hora = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor( this.value, "hora" );
    }

    let funciones = {
        youtube: youtube,
        correo: correo,
        web: web,
        fecha: fecha,
        hora: hora
    };

    let muestraInfo = function() {

        let inputs = document.getElementsByTagName("input");

        let cajaTexto = document.getElementById("caja");

        
        cajaTexto.innerHTML += inputs[0];

        cajaTexto.innerHTML += inputs[1];            
        
        cajaTexto.innerHTML += inputs[2];            
        
        cajaTexto.innerHTML += inputs[3];            
        
        cajaTexto.innerHTML += inputs[4];
    };

    document.addEventListener("DOMContentLoaded", function() {

        // dar a todos los inputs el evento blur
        let inputs = Array.from( document.getElementsByTagName("input") );

        for( input of inputs ){
            input.addEventListener("blur", funciones[input.id]);
        }

        // validar y enviar formulario
        document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
            event.preventDefault();

            // activar blur de todos los elementos
            let evento = new Event("blur");
            let inputs = document.getElementsByTagName("input");

            for (const iterator of inputs ){
                iterator.dispatchEvent(evento);
            }

            // comprobar spans
            let spans = Array.from( document.getElementsByTagName("span") );
            let span = spans.find( element => element.textContent != "" );

            if(span) {
                span.previousSibling.focus();
            } else {
                console.log("enviado");
                alert("Formulario enviado!");
                muestraInfo();
            }
        });

        // Botón reset
        document.getElementById("reset").addEventListener("click", (event) => { 
            event.preventDefault();
            document.getElementsByTagName("form")[0].reset();

            let spans = document.getElementsByTagName("span");

            let caja = document.getElementById("caja");

            for(element of spans ) {
                element.innerHTML = "";
                caja.innerHTML = "";
            };
        });

        // Botón atrás
        document.getElementById("atras").addEventListener("click", () => { history.back() });
    } );
}