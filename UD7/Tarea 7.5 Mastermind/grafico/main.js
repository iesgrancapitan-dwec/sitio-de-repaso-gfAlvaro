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
    let pintaCasilla = function(id) {
        if( (puntero < 4)
         && (casillas[puntero].style.backgroundColor == "transparent" || casillas[puntero].style.backgroundColor == "") ){
            switch (id) {
                case "blanca":
                    casillas[puntero].style.backgroundColor = "white";
                    break;
                case "negra":
                    casillas[puntero].style.backgroundColor = "black";
                    break;
                case "roja":
                    casillas[puntero].style.backgroundColor = "red";
                    break;
                case "marron":
                    casillas[puntero].style.backgroundColor = "brown";
                    break;
                case "amarilla":
                    casillas[puntero].style.backgroundColor = "yellow";
                    break;
                case "verde":
                    casillas[puntero].style.backgroundColor = "green";
                    break;
                case "naranja":
                    casillas[puntero].style.backgroundColor = "orange";
                    break;
                case "azul":
                    casillas[puntero].style.backgroundColor = "blue";
            }

            $(casillas[puntero]).on('click', limpiaFicha);

            if( puntero < 4 ){
        	    puntero++;
            }
        }
    }

    /**
     * Reinicia y modifica los valores necesarios para iniciar un nuevo turno
     */
    let nuevoTurno = () => {
        puntero = 0;
        casillas = $(".casilla" + num_lineas);
        casillasPistas = $(".casillaPista" + num_lineas);
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
        $("#tablero").append(fila);

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

        if (puntero == 4) {
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
                $("#ganador").css("display", "block");
                $(evt.target.id).attr("disabled", "true");
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
        $(event.target).off('click', limpiaFicha);
        puntero--;
    }

    /**
     * Elimina el detector de evento de las casillas de la linea anterior para que el usuario no pueda clickar.
     */
    let eliminaEventos = () => 
        Array.from(casillas).forEach( element => $(element).off('click', limpiaFicha) );

    /**
     * Resetea el mastermind
     */
    let resetea = () => location.reload();

    /**
     * sale de la ventana
     */
    let sale = () => window.close();

    /**
    * Inicia el juego con todos sus elementos.
    */
    $(document).ready( () => { 
 
        MasterMind.init();
        MasterMind.muestra();
        num_lineas = 0;
        casillas = $(".casilla");
        casillasPistas = $(".casillaPista");

        // eventos
        $("#comprobar").click(comprueba);
        $("#reset").click(resetea);
        $("#exit").click(sale);
        $(".ficha").click( function(){ pintaCasilla( $(this).attr('id')) } );

        creaFila();
    });
}