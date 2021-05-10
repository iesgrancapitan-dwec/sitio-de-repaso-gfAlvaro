/**
 * @name comportamiento.js
 * Archivo para gestionar el comportamiento del buscaminas.
 * @author Álvaro García Fuentes
 */
{
    let cronoIniciado = false;

    let incrementaCrono = (entrada) => {
        document.getElementById("crono").textContent += entrada
    };

    let iniciaCrono = () => {

        if(cronoIniciado) return;
        
        cronoIniciado = true;
        setTimeout( incrementaCrono(1), 1000);
    }

    let reseteaCrono = () => {

        if(!cronoIniciado) return;
        
        cronoIniciado = false;
        document.getElementById("crono").textContent = "000";
    }

    let reseteaTablero = () => {
        reseteaCrono();
        //
    }

    let colocaMinas = () => {
        iniciaCrono();
        //
        abreCasilla();
    }

    let abreCasilla = () => {
        //
    }

    document.addEventListener( "DOMContentLoaded", () => { 

        document.getElementById("start").addEventListener( "click", reseteaTablero() );

        document.getElementsByClassName("casilla")[0].addEventListener( "click", () => {
            
            cronoIniciado? abreCasilla() : colocaMinas();
        });

        document.getElementById("atras").addEventListener( "click", () => history.back() );
    });
}
