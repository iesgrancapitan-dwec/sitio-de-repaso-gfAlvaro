/**
 * @name ejercicio1.js
 * Contador.
 * Programa que contabiliza el número de veces que se entra en esa página.
 * • Se utilizan las plantillas de cadena de texto en la función generaMensaje,
 *     que devuelve una cadena e incrusta el contador almacenado en el storage de la ventana.
 * • El mensaje varía en función del argumento recibido
 * • A partir de la tercera visita sólo cambia el número
 * @author Álvaro García Fuentes
 */
{
    let reseteaContador = () => {
        sessionStorage.setItem( "cuenta", 0 );
        document.getElementById("mensaje").innerHTML = generaMensaje();
    }

    let generaMensaje = () =>
        sessionStorage.getItem( "cuenta" ) == 0 ? `RESETEADO`
      : sessionStorage.getItem( "cuenta" ) == 1 ? `Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas.` 
      : sessionStorage.getItem( "cuenta" ) == 2 ? `Hola de nuevo. Ya estás aquí por segunda vez. ¿Volveremos a vernos?`
      : `Ya empiezas a ser pesado. Esta es la vez nuḿero ${sessionStorage.getItem("cuenta")} que entras. Sigue con tus cosas.`;

    let actualizaContador = () =>
        sessionStorage.getItem("cuenta") == null ?
            sessionStorage.setItem( "cuenta", 1 ) : 
            sessionStorage.setItem( "cuenta", parseInt( sessionStorage.getItem("cuenta") ) + parseInt(1) );

    document.addEventListener( "DOMContentLoaded", () => {
        document.getElementById("reset").addEventListener( 'click', reseteaContador ); 
        actualizaContador();
        document.getElementById("mensaje").innerHTML = generaMensaje();

        document.getElementById("atras").addEventListener('click', () => { history.back() } );
    });
}