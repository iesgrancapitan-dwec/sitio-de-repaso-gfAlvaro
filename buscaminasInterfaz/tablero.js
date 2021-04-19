/**
 * @name tablero.js
 * Código javascript para la construcción del tablero del buscaminas
 * basándose en el nivel de dificultad.
 * @author Álvaro García Fuentes
 */
{
    let n;

    let creaMarcadores = () => {

        let salida = document.createElement("div");
        salida.id = "marcadores";

        // indicador de banderas
        let flag = document.createElement("div");
        flag.id = "flags"; 
        flag.textContent = "010";
        salida.appendChild(flag);

        // botón para comenzar partida
        let start = document.createElement("button");
        start.id = "start";
        start.textContent = "comenzar";
        salida.appendChild(start);

        // indicador del cronómetro
        let crono = document.createElement("div");
        crono.id = "crono";
        crono.textContent = "000";
        salida.appendChild(crono);

        document.getElementById("tablero").appendChild(salida);
    }

    let creaTablero = () => {
        const dimensiones = ["8","16","30"];

        // si ya existe un tablero, lo borramos previamente
        let eliminar;
        document.getElementById(n)?
            ( eliminar = document.getElementById(n),
            eliminar.parentNode.removeChild(eliminar) ) : null;

        // asignamos las dimensiones del nuevo tablero
        let dif = document.getElementById("nivel").value;
        let filas;
        let columnas;
        let banderas;
        dif == "0"? (filas = dimensiones[0], columnas = dimensiones[0], banderas = "010", n="facil") :
        dif == "1"? (filas = dimensiones[1], columnas = dimensiones[1], banderas = "040", n="normal") :
        dif == "2"? (filas = dimensiones[1], columnas = dimensiones[2], banderas = "099", n="dificil") :
                    (filas = dimensiones[0], columnas = dimensiones[0], banderas = "010", n="facil");

        // Escribimos en el marcador el número de banderas,
        // que será igual al número de minas al inicio de la partida.
        document.getElementById("flags").textContent = banderas;

        // creamos el nuevo tablero según las dimensiones
        let nivelTablero = document.createElement("div");
        nivelTablero.id = n;
        let casilla;
        for( let i = 0; i < (filas*columnas); i++ ){
            casilla = document.createElement("div");
            casilla.id = `${i}`;
            casilla.className = "casilla";
            nivelTablero.appendChild(casilla);
        }
        
        document.getElementById("tablero").appendChild(nivelTablero);
    }

    document.addEventListener("DOMContentLoaded", () => {

        creaMarcadores();
        creaTablero();

        document.getElementById("nivel").addEventListener("change", () => {
            creaTablero();
        });
    });
}