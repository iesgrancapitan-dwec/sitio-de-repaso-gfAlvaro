/**
 * @author Álvaro García Fuentes
 */

document.addEventListener("DOMContentLoaded", () => {

    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let ip = document.getElementById("ip");
    let codigoPostal = document.getElementById("codigoPostal");

    let validaNombre = () => {
        if( /^[A-Z][a-z\s]+$/.test( nombre.value.trim() ) )
            nombre.nextSibling.innerHTML = "";
        else
            nombre.nextSibling.innerHTML = "Nombre no válido. ";      
    }

    let validaTelefono = () => {
        if( /^[0-9]{9}$/.test( telefono.value.trim() ) )
            telefono.nextSibling.innerHTML = "";
        else
            telefono.nextSibling.innerHTML = "Teléfono no válido. ";      
    }

    let validaIp = () => {
        if( /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g.test( ip.value.trim() ) )
            ip.nextSibling.innerHTML = "";
        else
            ip.nextSibling.innerHTML = "Ip no válida. ";      
    }

    let validaCodigoPostal = () => {
        const array = [ ...codigoPostal.value.trim().matchAll( /[0-9]{5}|[0-9]{2}[\,|\.][0-9]{3}/g ) ];
        if( array.size != 0 )
            codigoPostal.nextSibling.innerHTML = array.join(" ");
    }

    let limpiaSpan = (entrada) => entrada.nextSibling.innerHTML = "";

    nombre.addEventListener( 'blur', validaNombre );
    telefono.addEventListener( 'blur', validaTelefono );
    ip.addEventListener( 'blur', validaIp );
    codigoPostal.addEventListener( 'blur', validaCodigoPostal );

    nombre.addEventListener( 'focus', () => limpiaSpan(this) );
    telefono.addEventListener( 'focus', () => limpiaSpan(this) );
    ip.addEventListener( 'focus', () => limpiaSpan(this) );
    codigoPostal.addEventListener( 'focus', () => limpiaSpan(this) );

    document.getElementById("formulario").addEventListener( 'submit', (evt) => {
        evt.preventDefault();
        const event = new Event('blur');
        nombre.dispatchEvent(event);
        telefono.dispatchEvent(event);
        ip.dispatchEvent(event);
    });

    document.addEventListener('reset', (evt) => {
        for( elemento of document.getElementsByClassName("input") )
            limpiaSpan(elemento);
        
    });
});