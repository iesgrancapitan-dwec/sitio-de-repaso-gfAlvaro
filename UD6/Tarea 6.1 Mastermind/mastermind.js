/**
 * @name mastermind.js
 * definición de la clase MasterMind
 * @author Álvaro García Fuentes
 */
MasterMind = ( () => {

    let linea;

    /**
    * Crea la comnibación de colores a adivinar.
    */
    let creaLinea = () => {

        const colores = ["amarilla", "verde", "naranja", "azul", "blanca", "negra", "roja", "marron" ];

        for( let i = 0; i < 4; i++ ){
            linea.push( colores[ Math.floor((Math.random() * colores.length)) ] );
        }
    }

    /**
     * Muestra los colores a adivinar en consola
     * chivato: esta función está por motivos de testeo, 
     * pero la información que se muestra no debería de ser visible para el jugador.
     */
    let muestra = () => console.log(linea);

    /**
     * Comprueba si la combinación coincide y envia una pista
     * @param {Array}  array 
     */
    let compruebaCombinacion = (array) => {
        let arrayLinea = linea.slice();
        let esta = 0;
        let enSuSitio = 0;

        array.forEach( (element, index) => {
            if (element == arrayLinea[index]) {
                arrayLinea[index] = undefined;
                array[index] = 1;
                enSuSitio++;
            }
        });

        array.forEach( (element, index) => {
            if (arrayLinea.indexOf(array[index]) != -1) {
                arrayLinea[ arrayLinea.indexOf(element) ] = 0;
                esta++;
            }
        });

        return {           
            enSuSitio: enSuSitio,
            esta: esta,
        }
    }

    /**
     * Comienza la partida inicializando la linea y generando una nueva combinación de colores a adivinar.
     */
    let init = () => {
        linea = [];
        creaLinea();
    }

    return {
        init: init,
        muestra: muestra,
        compruebaCombinacion: compruebaCombinacion
    };
})();