/**
 * @author Álvaro García Fuentes
 */

document.addEventListener("DOMContentLoaded", () => {

    let valida = function(entrada){

        let regex = /^$/;
        let campo = "Campo";

        switch (entrada){
            case 0: // nombre
                regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
                campo = "Nombre";
                break;
            case 1: // telefono
                regex= /^\d{9}$/;
                campo = "Teléfono"; 
                break;
            case 2: // IP
                regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
                campo = "IP";
        }

        if( this.value.trim().match( regex ) )
            this.parentNode.nextSibling.innerHTML = "";
        else
            this.parentNode.nextSibling.innerHTML = campo + " no válido. ";      
    }
    
    let validaArea = function() {
        const array = [ ...this.value.trim().matchAll( /^(\d{5})|(\d{2}\.\d{3})$/ ) ];
        if(array.size > 0)
            this.parentNode.nextSibling.innerHTML = array.join(" ");
    }

    let limpiaSpan = function() { this.parentNode.nextSibling.innerHTML = ""; }

    document.getElementById("nombre").addEventListener( 'blur', this.valida(0) );
    document.getElementById("nombre").addEventListener( 'focus', this.limpiaSpan );
    document.getElementById("telefono").addEventListener( 'blur', this.valida(1) );
    document.getElementById("telefono").addEventListener( 'focus', this.limpiaSpan );
    document.getElementById("ip").addEventListener( 'blur', this.valida(2));
    document.getElementById("ip").addEventListener( 'focus', this.limpiaSpan );
    document.getElementById("area").addEventListener( 'blur', this.validaArea );
    document.getElementById("area").addEventListener( 'focus', this.limpiaSpan );

    document.getElementById("formulario").addEventListener('submit', (evt) => {
        evt.preventDefault();
        for( let i = 0; i < 3; i++ )
            valida(i);
        validaArea();
    });
    
    document.getElementById("formulario").addEventListener('reset', (evt) => {
        evt.preventDefault();
        document.reset();
    });
});