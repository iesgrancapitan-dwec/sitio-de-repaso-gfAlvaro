/**
 * @name ventanas.js
 * Programa que crea y cierra un número de ventanas pedido al usuario mediante un formulario.
 * @author Álvaro García Fuentes
 */
{
    let arrayVentanas = new Array();

    let creaVentanas = () => {
        arrayVentanas.length = document.getElementById("numeroVentanas").value;

        for( let i = 0; i < arrayVentanas.length; i++ ){
            arrayVentanas[i] = window.open("", `miVentana ${i+1}`, "height=200,width=200");
            arrayVentanas[i].document.write(`<!DOCTYPE html><html><head><title>Ventana de prueba</title></head><body><h1>Ventana ${i+1}</h1><button onclick="window.close()">Cerrar ventana</button></body></html>`);
        }
    }

    let cierraVentanas = () => {
        for( let i = 0; i < arrayVentanas.length; i++ )
            try{
                arrayVentanas[i].close();
            }catch{
                continue;
            }
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("crear").addEventListener( "click", creaVentanas );
        document.getElementById("cerrar").addEventListener( "click", cierraVentanas );
        document.getElementById("atras").addEventListener( "click", () => history.back() );
    });
}