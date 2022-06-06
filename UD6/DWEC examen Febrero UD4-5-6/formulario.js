/**
 * @name formulario.js
 * validación del formulario
 * @author Álvaro García Fuentes
 */
 document.addEventListener( 'DOMContentLoaded', () => {

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let curso = document.getElementById('curso');

    let spanCurso = curso.parentNode.nextSibling;

    /**
     * valida los campos nombre y apellidos
     */
    let valida = function(){

        let campo = document.getElementById( this.id );
        let spanCampo = campo.parentNode.nextSibling;

        if( campo.value.trim() == "" ){
            spanCampo.innerHTML = "Este campo no debe estar vacío.";
            spanCampo.style.color = "red";
        } else if( spanCampo.innerHTML != "" ){
            spanCampo.innerHTML = "";
            spanCampo.removeAttribute( "style" );
        }
    }

    /**
     * valida el campo curso
     */
    let validaCurso = () => {
        if( /(1|2)(asir|daw|dam)/.test( curso.value.trim() ) ){
            if( spanCurso.innerHTML != "" ){
                spanCurso.innerHTML = "";
                spanCurso.removeAttribute( "style" );
            }
        } else {
            spanCurso.innerHTML = "Error. Opciones válidas: 1asir, 1daw, 1dam, 2asir, 2daw, 2dam";
            spanCurso.style.color = "red";
        }
    }

    /**
     * limpia los spans del formulario
     */
    let limpiaSpans = () => {
        for( const span of document.querySelectorAll('span') ){
            span.innerHTML = "";
            span.removeAttribute( "style" );
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
        for( const input of document.querySelectorAll( '.input' ) ){
            input.value = "";
        }

        limpiaSpans();
    };

    /**
     * Envía el formulario
     * @param {event} evt 
     */
    let envia = ( evt ) => {
        evt.preventDefault();
        
        // activar blur de todos los elementos
        let evento = new Event( "blur" );
        for(const iterator of document.querySelectorAll( '.input' ) ){
            iterator.dispatchEvent( evento );
        }
        
        // comprobar spans para ver errores
        // si no hay errores se muestra el alumno
        if( !Array.from( document.querySelectorAll( 'span' ) )
            .find( span => span.textContent != "" ) ){
            try{
                let alumno = new Alumno( nombre.value.trim(),
                                         apellidos.value.trim(),
                                         curso.value.trim() );
                alumno.muestra();
                resetea();
            } catch (e) {
                spanCurso.innerHTML = "Error. Opciones válidas: 1asir, 1daw, 1dam, 2asir, 2daw, 2dam";
                spanCurso.style.color = "red";
            }
        }
    }

    nombre.addEventListener( 'blur', valida );
    apellidos.addEventListener( 'blur', valida );
    curso.addEventListener( 'blur', validaCurso );
    document.getElementById('reset').addEventListener( 'click', resetea );
    document.getElementById('rellenar').addEventListener( 'click', rellena );
    document.getElementById('submit').addEventListener( 'click', envia );

    document.getElementById("atras").addEventListener( 'click', () => history.back() );
});
