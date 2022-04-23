/**
 * @name main.js
 * código principal del formulario
 * @author Álvaro García Fuentes
 */
{
    let textoObligatorio = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "textoObligatorio" );
    }

    let checkboxObligatorio = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaCheck( this.checked );
    }

    let sexo = function() {
        this.parentNode.parentNode.nextElementSibling.textContent = Validar.compruebaRadio( document.getElementsByName("sexo") );
    }

    let seleccionado = function() {
        this.parentNode.parentNode.nextElementSibling.textContent = Validar.compruebaSelect( this );
    }

    let fecha = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "fecha" );
    }

    let entero = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "entero" );
    }

    let decimal = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "decimal" );
    }

    let correo = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "email" );
    } 

    let url = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "url" );
    }

    let DNI = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value, "dni" );
    }

    let telefono = function() {
        this.parentNode.nextElementSibling.textContent = Validar.compruebaValor( this.value.trim(), "telefono" );
    }

    let funciones = {
        textoObligatorio: textoObligatorio,
        checkboxObligatorio: checkboxObligatorio,
        sexo: sexo,
        seleccionado: seleccionado,
        fecha: fecha,
        entero: entero,
        decimal: decimal,
        correo: correo,
        url: url,
        fecha2: fecha,
        dni: DNI,
        telefono: telefono
    }

    // documento cargado
    document.addEventListener('DOMContentLoaded', function() {

        // dar a todos los inputs el evento blur
        for( input of Array.from( document.getElementsByTagName("input") ) ){
            input.addEventListener("blur", funciones[input.name]);
        }

        // validar y enviar formulario
        document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
            event.preventDefault();

            // activar blur de todos los elementos
            let evento = new Event("blur");
            for (const iterator of document.getElementsByTagName("input") ){
                iterator.dispatchEvent(evento);
            }

            // comprobar spans
            let span = Array.from( document.getElementsByTagName("span") )
                       .find( element => element.textContent != "" );

            span? span.previousSibling.focus() : alert("Formulario enviado!");
        });
        
        //rellenar formulario
        document.getElementsByName('rellenar')[0].addEventListener( 'click', (event) => {
            event.preventDefault();
            document.getElementsByName("textoObligatorio")[0].value = "Paco";
            document.getElementsByName("checkboxObligatorio")[0].checked = true;
            document.getElementsByName("sexo")[0].checked = true;
            document.getElementsByName("seleccionado")[0].value = "0";
            document.getElementsByName("fecha")[0].value = "20/10/2020";
            document.getElementsByName("entero")[0].value = "77";
            document.getElementsByName("decimal")[0].value = "30.33";
            document.getElementsByName("correo")[0].value ="prueba@gmail.com"; 
            document.getElementsByName("url")[0].value = "http://www.google.es";
            document.getElementsByName("fecha2")[0].value = "15/10/1999";
            document.getElementsByName("dni")[0].value = "12345678Z";
            document.getElementsByName("telefono")[0].value = "111222333";
        });

        // limpiar formulario
        document.getElementsByName('limpiar')[0].addEventListener( 'click',  function(event) {
            event.preventDefault();
            document.getElementsByTagName("form")[0].reset();
            for(element of document.getElementsByTagName("span") ) {
                element.innerHTML = "";
            };
        }); 
    });
}