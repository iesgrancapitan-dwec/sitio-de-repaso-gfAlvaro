/**
 * @name main.js
 * Código para trabajar con los eventos de ratón
 * @author Álvaro García Fuentes
 */
{
    const ANCHO=200;
    const LARGO=200;

    let sacaColorAleatorio = () =>{

        let colores = [ "red",    "green",  "blue",  "yellow", "pink",
                        "orange", "violet", "brown", "cyan",   "yellowgreen"];

        return colores[Math.floor( Math.random() * colores.length )]
    };

    function dibujaCanvas( canvas, color, x, y, button, buttons ) {

        if( canvas.getContext ) {
            let contextoCanvas = canvas.getContext( '2d', { alpha: false } );

            (arguments.length === 1)? contextoCanvas.fillStyle = sacaColorAleatorio()
                                    : contextoCanvas.fillStyle = color;

            contextoCanvas.fillRect( 0, 0, ANCHO, LARGO );
            contextoCanvas.fillStyle = "black";
            contextoCanvas.fillText( canvas.getAttribute("id"), 50, 30 );
            
            if( arguments.length > 1 ) {
                contextoCanvas.fillText( `(${x}, ${y})`, 50, 50 );
                contextoCanvas.fillText( `(${button}, ${buttons})`, 50, 70 );
            }
        }
    }

    document.addEventListener("DOMContentLoaded", () => {

        let arrayCanvas = Array.from( document.getElementsByTagName("canvas") );

        arrayCanvas.forEach( (elemento) => {

            elemento.width = ANCHO;
            elemento.height = LARGO;

            elemento.addEventListener(elemento.getAttribute("id"), function(event) {
                dibujaCanvas( elemento, sacaColorAleatorio(), event.offsetX, event.offsetY, event.button, event.buttons );
            });
            dibujaCanvas(elemento);
        });
    });
}