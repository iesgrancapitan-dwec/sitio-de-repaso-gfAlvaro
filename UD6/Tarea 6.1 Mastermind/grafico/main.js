/**
 * @name main.js
 * código para usar el mastermind en modo gráfico
 * @author Álvaro García Fuentes
 */
{
    let puntero;   
    let casillas;
    let casillasPistas;
    let num_lineas;

    /**
     * Pinta una casilla de un color según el id introducido por parámetro.
     * @param  id
     */
    let pintarCasilla = (id) => {
        for( let i = 0; i < casillas.length; i++ ){            
            if( casillas[i].style.backgroundColor == "transparent" || casillas[i].style.backgroundColor == "" ){
                switch (id) {
                    case "blanca":
                        casillas[i].style = "background-color: white;";
                        break;
                    case "negra":
                        casillas[i].style = "background-color: black;";
                        break;
                    case "roja":
                        casillas[i].style = "background-color: red;";
                        break;
                    case "marron":
                        casillas[i].style = "background-color: brown;";
                        break;
                    case "amarilla":
                        casillas[i].style = "background-color: yellow;";
                        break;
                    case "verde":
                        casillas[i].style = "background-color: green;";
                        break;
                    case "naranja":
                        casillas[i].style = "background-color: orange;";
                        break;
                    case "azul":
                        casillas[i].style = "background-color: blue;";
                }

                casillas[i].addEventListener("click", limpiaFicha);
                break;
            }
        }

        if( puntero < 4 ){
        	puntero++;
        }
    }

    /**
     * Reinicia y modifica los valores necesarios para iniciar un nuevo turno
     */
    let nuevoTurno = () => {
        puntero = 0;
        casillas = document.getElementsByClassName("casilla" + num_lineas);
        casillasPistas = document.getElementsByClassName("casillaPista" + num_lineas);
        num_lineas++;
        window.scrollTo(0, 0);
    }

    /**
     * Crea una nueva fila de casillas a rellenar y de casillas para pistas.
     */
    let creaFila = () => {
        
        eliminaEventos();

        let casilla;
        let casillaPista;
        let fila = document.createElement("div");
        let filaCasillas = document.createElement("div");
        let filaPistas = document.createElement("div");

        // Añadimos los correspondientes ids
        fila.id = "fila";       
        filaCasillas.id = "casillas";       
        filaPistas.id = "pistas";      

        // Generamos las casillas y las casillas de pistas
        for (let i = 0; i < 4; i++) {
            // casillas
            casilla = document.createElement("div");
            casilla.classList.add("casilla");
            casilla.classList.add("casilla" + num_lineas);
            filaCasillas.appendChild(casilla);
 
            // casillas de pistas
            casillaPista = document.createElement("div");
            casillaPista.classList.add("casillaPista");
            casillaPista.classList.add("casillaPista" + num_lineas);
            filaPistas.appendChild(casillaPista);
        }

        fila.appendChild(filaCasillas);
        fila.appendChild(filaPistas);
        document.getElementById("tablero").appendChild(fila);

        nuevoTurno();
    }

    /**
     * Comprueba si la combinación introducida por el usuario es correcta
     */
    let comprueba = (evt) => {
        let coloresUsuario = [];       
        let punteroComprobacion = 0;

        Array.prototype.forEach.call( casillas, (casilla) => {
            switch (casilla.style.backgroundColor){
                case "red":
                    coloresUsuario.push("roja");
                    break;
                case "white":
                    coloresUsuario.push("blanca");
                    break;
                case "black":
                    coloresUsuario.push("negra");
                    break;
                case "green":
                    coloresUsuario.push("verde");
                    break;
                case "blue":
                    coloresUsuario.push("azul");
                    break;
                case "yellow":
                    coloresUsuario.push("amarilla");
                    break;
                case "brown":
                    coloresUsuario.push("marron");
                    break;
                case "orange":
                    coloresUsuario.push("naranja");
            }
        });

        if (puntero >= 4) {
            let mastermind = MasterMind.compruebaCombinacion(coloresUsuario);

            if (mastermind.enSuSitio > 0) {
                while (punteroComprobacion < mastermind.enSuSitio) {
                    casillasPistas[punteroComprobacion].style = "background-color: black;";
                    punteroComprobacion++;
                }
            }

            let ganado = false;
            if (punteroComprobacion == 4) {
                ganado = true;
                document.getElementById("ganador").style = "display: block;";
                document.getElementById(evt.target.id).setAttribute("disabled", "true");
            }

            if (mastermind.esta > 0) {
                for (let i = 0; i < mastermind.esta; i++) {
                    casillasPistas[punteroComprobacion].style = "background-color: white;";
                    punteroComprobacion++;
                }
                punteroComprobacion = 0;
            }
            
            if(!ganado){
                creaFila();
            }
        }
    }
    
    /**
     * Quita el color de un círculo.
     */
    let limpiaFicha = (event) => {
        event.target.style = "background-color: transparent;";
        event.target.removeEventListener("click", limpiaFicha);
        puntero--;
    }

    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar.
     */
    let eliminaEventos = () => 
        Array.prototype.forEach.call(casillas, (elemento) => elemento.removeEventListener("click", limpiaFicha));

    /**
    * Inicia el juego con todos sus elementos.
    */
    document.addEventListener( "DOMContentLoaded", () => { 
 
        MasterMind.init();
        MasterMind.muestra();
        num_lineas = 0;
        casillas = document.getElementsByClassName("casilla");
        casillasPistas = document.getElementsByClassName("casillaPista");

        // eventos
        document.getElementById("comprobar").addEventListener("click", comprueba);
        document.getElementById("reset").addEventListener("click", () => location.reload());
        document.getElementById("exit").addEventListener("click", () => window.close() );
        Array.prototype.forEach.call( document.getElementsByClassName("ficha"), (elemento) =>
            elemento.addEventListener( "click", pintarCasilla.bind(null, elemento.id) ) );

        creaFila();
    });
}