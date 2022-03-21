/**
 * @name formulario.js
 * validación del formulario
 * @author Álvaro García Fuentes
 */
{
    let nombre;
    let apellidos;
    let curso;

    /**
     * valida los campos nombre y apellidos
     */
    let valida = function(){

        let campo = document.getElementById(this.id);

        if( campo.value.trim() == "" ){
            campo.parentNode.nextSibling.innerHTML = "Este campo no debe estar vacío.";
            campo.parentNode.nextSibling.style.color = "red";
        } else if( campo.parentNode.nextSibling.innerHTML != "" ){
            campo.parentNode.nextSibling.innerHTML = "";
            campo.parentNode.nextSibling.removeAttribute("style");
        }        
    }

    /**
     * valida el campo curso
     */
    let validaCurso = () => {
        if( /(1|2)(asir|daw|dam)/.test(curso.value.trim()) ){
            if(curso.parentNode.nextSibling.innerHTML != ""){
                curso.parentNode.nextSibling.innerHTML = "";
                curso.parentNode.nextSibling.removeAttribute("style");
            }
        } else {
            curso.parentNode.nextSibling.innerHTML = "Error. Opciones válidas: 1asir, 1daw, 1dam, 2asir, 2daw, 2dam";
            curso.parentNode.nextSibling.style.color = "red";
        }
    }

    /**
     * limpia los spans del formulario
     */
    let limpiaSpans = () => {
        for(const span of document.querySelectorAll('span')){
            span.innerHTML = "";
            span.removeAttribute("style");
        };
    }

    /**
     * rellena el formulario con datos válidos
     * @param {event} evt 
     */
    let rellena = (evt) =>{
        evt.preventDefault();
        nombre.value = "Álvaro";
        apellidos.value = "García Fuentes";
        curso.value = "2daw";
        limpiaSpans();
    }

    /**
     * borra todos los datos del formulario
     */
    let resetea = () => {
        for(const input of document.querySelectorAll('.input')){
            input.value = "";
        }
        limpiaSpans();
    };

    /**
     * Envía el formulario
     * @param {event} evt 
     */
    let envia = (evt) => {
        evt.preventDefault();
        
        // activar blur de todos los elementos
        let evento = new Event("blur");
        for(const iterator of document.querySelectorAll('.input') ){
            iterator.dispatchEvent(evento);
        }
        
        // comprobar spans para ver errores
        let spans = Array.from(document.querySelectorAll('span'))
                        .find( span => span.textContent != "" );
        
        // si no hay errores se muestra el alumno
        if(!spans){
            try{
                let alumno = new Alumno(nombre.value.trim(),
                                        apellidos.value.trim(),
                                        curso.value.trim());
                alumno.muestra();
                resetea();
            } catch (e) {
                curso.parentNode.nextSibling.innerHTML = "Error. Opciones válidas: 1asir, 1daw, 1dam, 2asir, 2daw, 2dam";
                curso.parentNode.nextSibling.style.color = "red";
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        nombre = document.getElementById('nombre');
        apellidos = document.getElementById('apellidos');
        curso = document.getElementById('curso');

        nombre.addEventListener('blur', valida);
        apellidos.addEventListener('blur', valida);
        curso.addEventListener('blur', validaCurso);
        document.getElementById('reset').addEventListener('click', resetea);
        document.getElementById('rellenar').addEventListener('click', rellena);
        document.getElementById('submit').addEventListener('click', envia);

        document.getElementById("atras").addEventListener('click', () => history.back());
    });
}