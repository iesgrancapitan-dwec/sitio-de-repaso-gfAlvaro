/**
 * @name main.js
 * Código para usar el mastermind en modo consola.
 * @author Álvaro García Fuentes
 */
{
    // array donde se guardarán los colores introducidos por el jugador.
    let linea = [];

    /**
     * Borra la partida actual e inicia una nueva
     */
    let reinicia = () => location.reload();

    /**
     * Comprueba los colores introducidos,
     * si no se ha acertado la combinación
     * ofrece pistas para resolver el mastermind.
     */ 
    let comprueba = () => {
        if(linea.length == 4){
            
            let pistas = [];
            let comprobacion = MasterMind.compruebaCombinacion(linea);

            if(comprobacion.enSuSitio == 4){
                console.log("¡Has ganado!");
            } else {
                for(let i=0; i < comprobacion.enSuSitio; i++){
                    pistas.push("negra");
                }
            
                for(let i=0; i < comprobacion.esta; i++){
                    if(pistas.length < 4){
                        pistas.push("blanca");
                    }
                }

                console.log( "Pistas: " + pistas );
            }
        }
    }

    /**
     * Introduce un color en la casilla
     * @param {Char} color 
     */
    let rellenaCasilla = (color) => {

        const colores = [ "blanca", "negra", "roja", "marron", "amarilla", "verde", "naranja", "azul" ];

        if(linea.length < 4){
            linea.push( colores[parseInt(color)] );
            console.log( "Casillas: " + linea );
        }
    }

    /**
     * Muestra la solucion del mastermind.
     * Para testeo, el jugador no debería de conocer esta información.
     */
    let muestraSolucion = () => MasterMind.muestra();

    /**
     * Asigna una acción según la tecla pulsada
     * @param {event} evt 
     */
    let asignaAccion = (evt) => {
        switch(evt.key){
            case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7":
                rellenaCasilla(evt.key);
                break;
            case "8":
                reinicia();
                break;
            case "9":
                comprueba();
                break;
            case " ":
                muestraSolucion();
        }
    }

    /**
     * Muestra el menú con las opciones disponibles.
     */
    let muestraMenuPrincipal = () => {
        console.log("Seleccione una opción: ");
        console.log("   0: color blanco");
        console.log("   1: color negro");
        console.log("   2: color rojo");
        console.log("   3: color marron");
        console.log("   4: color amarillo");
        console.log("   5: color verde");
        console.log("   6: color naranja");
        console.log("   7: color azul");
        console.log("   8: reiniciar");
        console.log("   9: comprobar");
        console.log("   espacio: ver solución");
    }

    /**
     * Evento con el que se inicia el programa.
     */
    $(document).ready( function(){
        MasterMind.init();
        $(document).keydown( asignaAccion );
        muestraMenuPrincipal();
    });
}