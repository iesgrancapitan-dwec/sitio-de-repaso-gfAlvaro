/**
 * @name main.js
 * código principal del formulario
 * @author Álvaro García Fuentes
 */
{
    let textoObligatorio = function() {
        this.nextElementSibling.innerHTML = Validar.compruebaValor(this.value, "textoObligatorio");
    }

    let checkboxObligatorio = function() {
        this.nextElementSibling.textContent = Validar.compruebaCheck(this.checked);
    }

    let sexo = function() {
        this.parentElement.parentElement.lastElementChild.textContent = Validar.compruebaRadio( document.getElementsByName("sexo") );
    }

    let seleccionado = function() {
        this.nextElementSibling.textContent = Validar.compruebaSelect(this);
    }

    let fecha = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "date");
    }

    let entero = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "entero");
    }

    let decimal = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "decimal");
    }

    let correo = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "email");
    } 

    let url = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "url");
    }

    let fecha2 = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "fecha");
    }

    let DNI = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value, "dni");
    }

    let telefono = function() {
        this.nextElementSibling.textContent = Validar.compruebaValor(this.value.trim(), "number");
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
        DNI: DNI,
        telefono: telefono
    }

    // documento cargado
    document.addEventListener('DOMContentLoaded', function() {
       
        let inputs = Array.from( document.getElementsByTagName("input") );

        for( input of inputs ){
            input.addEventListener("blur", funciones[input.name]);
        }

        // validar y enviar formulario
        document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
            event.preventDefault();

            // activar blur de todos los elementos
            let evento = new Event("blur");
            document.getElementsByTagName("input").dispatchEvent(evento);

            // comprobar spans
            let spans = Array.from(document.getElementsByTagName("span"));
            let span = spans.find(element => element.textContent != "");

            if (span) {
                span.parentElement.firstElementChild.focus();
            } else {
                alert("Formulario enviado!");
            }
        });
        
        //rellenar formulario
        document.getElementsByName('rellenar')[0].addEventListener( 'click', function(event) {
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
        });
 
        // enlace atrás
        document.getElementsByName('atras')[0].addEventListener( 'click', () => { history.back() });
    });
}