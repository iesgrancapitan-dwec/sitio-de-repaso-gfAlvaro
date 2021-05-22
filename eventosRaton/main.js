/**
 * @name main.js
 * Código para trabajar con los eventos de ratón
 * @author Álvaro García Fuentes
 */
{    
    let colores = [ "red", "green", "blue", "yellow", "pink",
                    "orange", "violet", "brown", "cyan", "yellowgreen"];

    let sacaColorAleatorio = () => Math.floor( Math.random() * colores.length );

    function dibujaCanvas( canvas, color, x, y, button, buttons ) {

        if( canvas.getContext ) {
            let contextoCanvas = canvas.getContext( '2d', { alpha: false } );

            (arguments.length === 1)? contextoCanvas.fillStyle = colores[sacaColorAleatorio()]
                                    : contextoCanvas.fillStyle = colores[color];

            contextoCanvas.fillRect(0, 0, 400, 400);
            contextoCanvas.fillStyle = "black";
            contextoCanvas.fillText( canvas.getAttribute("id").toUpperCase(), 50, 30 );
            if( arguments.length > 1 ) {
                contextoCanvas.fillText("x = " + x, 210, 40);
                contextoCanvas.fillText("y = " + y, 210, 70);
                contextoCanvas.fillText("button = " + button, 190, 100);
                contextoCanvas.fillText("buttons = " + buttons, 190, 130);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", () => {

        let arrayCanvas = Array.from( document.getElementsByTagName("canvas") );

        arrayCanvas.forEach( (elemento) => {
            elemento.addEventListener(elemento.getAttribute("id"), function(event) {
                dibujaCanvas( elemento, sacaColorAleatorio(), event.offsetX, event.offsetY, event.button, event.buttons );
            });
            dibujaCanvas(elemento);
        });

        document.getElementById("atras").addEventListener("click", () => history.back() );
    });
}