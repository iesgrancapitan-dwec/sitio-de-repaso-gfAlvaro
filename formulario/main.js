/**
 * @name main.js
 * código principal del formulario
 * @author Álvaro García Fuentes
 */
{
    import Validar from 'validar.js';

    let ObjetoInputs = {
        textoObligatorio: {
            elemento: textoObligatorio,
            callback: () => textoObligatorio.nextElementSibling.innerHTML = Validar.compruebaValor(textoObligatorio.value, textoObligatorio.type),
        },

        radio: {
            elemento: radio,
            callback: () => radio.nextElementSibling.innerHTML = Validar.compruebaRadio(radio),
        },

        checkboxObligatorio: {
            elemento: checkboxObligatorio,
            callback: () => checkboxObligatorio.nextElementSibling.innerHTML = Validar.compruebaCheck(checkboxObligatorio),
        },
        seleccionado: {
            elemento: seleccionado,
            callback: () => seleccionado.nextElementSibling.innerHTML = Validar.compruebaSelect(seleccionado),
        },
        fechaObligatoria: {
            elemento: fecha,
            callback: () => fecha.nextElementSibling.innerHTML = Validar.compruebaValor(fecha.value, fecha.type),
        },

        entero: {
            elemento: entero,
            callback: () => entero.nextElementSibling.innerHTML = Validar.compruebaValor(entero.value, entero.name),
        },

        decimal: {
            elemento: decimal,
            callback: () => decimal.nextElementSibling.innerHTML = Validar.compruebaValor(decimal.value, decimal.name),
        },

        correo: {
            elemento: correo,
            callback: () => correo.nextElementSibling.innerHTML = Validar.compruebaValor(correo.value, correo.type),
        },

        url: {
            elemento: url,
            callback: () => url.nextElementSibling.innerHTML = Validar.compruebaValor(url.value, url.type),
        },

        fecha2: {
            elemento: fecha2,
            callback: () => fecha2.nextElementSibling.textContent = Validar.compruebaValor(fecha2.value, fecha2.type),
        },

        dni: {
            elemento: dni,
            callback: () => dni.nextElementSibling.innerHTML = Validar.compruebaValor(dni.value, dni.name),
        },

        telefono: {
            elemento: telefono,
            callback: () => telefono.nextElementSibling.innerHTML = Validar.compruebaValor(telefono.value, telefono.name),
        }
    }();

    let rellenaCampos = function(event) {
        event.preventDefault();

        const arrayRellena = ['Paco', true, true, false, '15/05/1990', '30',
         '101.23', 'prueba@gmail.com', 'https://www.google.es', '02/02/2020', '12345678Z', '111222333'];

        document.getElementsByTagName('input').value = arrayRellena.slice();
    }

    let limpiaCampos = function(event) {
        event.preventDefault();
        document.querySelectorAll('span').forEach( elemento => elemento.innerHTML = "" );
    }

    let envia = function(event) {
        event.preventDefault();

        let eventoBlur = new Event('blur');

        for(let clave in ObjetoInputs) {
            ObjetoInputs[clave].elemento.dispatchEvent(eventoBlur);
        }

        let arraySpans = Array.from(document.getElementsByTagName('span'));

        let spanRelleno = arraySpans.find( span => span.innerHTML.length !== 0 );

        if(spanRelleno !== undefined) {
            spanRelleno.previousSibling.focus();
        } else {
            alert('EUREKA');
        }
    }

    // documento cargado
    document.addEventListener('DOMContentLoaded', function() {              
        document.getElementsByName('limpiar')[0].addEventListener( 'click', limpiaCampos );
        document.getElementsByTagName('form')[0].addEventListener( 'submit', envia );
        document.getElementsByName('rellenar')[0].addEventListener( 'click', rellenaCampos );
        document.getElementsByName('atras')[0].addEventListener( 'click', function(){ history.back(); } );
    });
}