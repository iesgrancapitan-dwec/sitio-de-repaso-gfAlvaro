/**
 * @name DOMCalculadora.js
 * Crea una calculadora añadiendo elementos al árbol DOM
 * @author Álvaro García Fuentes
 */
{
    // se construye cada botón
    let construyeBoton = (entrada) => {

        let celda = document.createElement("div");
        celda.className = "celda";

        // estilos
        celda.style.width = "25%";
        celda.style.height = "100%";

        let boton = document.createElement("input");
        boton.type = "button";
        boton.className = "boton";
        boton.value = entrada;

        // estilos
        boton.style.width = "90%";
        boton.style.height = "90%";
        boton.style.fontSize = "20px";

        celda.appendChild(boton);

        return celda;
    }

    // se construye una fila de botones
    let construyeFila = (entrada) => {

        let fila = document.createElement("div");
        fila.className = "fila";

        // estilos
        fila.style.display = "inline-flex";
        fila.style.height = "16.66%";
        fila.style.width = "100%";


        entrada.forEach( elemento => fila.appendChild( construyeBoton(elemento) ) );

        return fila;
    }

    // se construye la pantalla
    let construyePantalla = () => {

        let fila = document.createElement("div");
        fila.className = "fila";

        // estilos
        fila.style.display = "inline-flex";
        fila.style.height = "16.66%";
        fila.style.width = "100%";

        let celda = document.createElement("div");
        celda.className = "celda_pantalla";

        // estilos
        celda.style.width = "100%";
        celda.style.height = "100%";
        celda.style.alignContent = "center";

        let pantalla = document.createElement("input");
        pantalla.className = "pantalla";
        pantalla.name = "pantalla";
        pantalla.id = "pantalla";
        pantalla.type = "text";
        pantalla.setAttribute("readonly", "readonly");

        pantalla.value = 0;

        // estilos
        pantalla.style.width = "94%";
        pantalla.style.height = "55%";
        pantalla.style.textAlign = "right";

        celda.appendChild(pantalla);
        fila.appendChild(celda);

        return fila;
    }

    // se construye la calculadora al abrir la página
    let construyeCalculadora = () => {

        // crear tabla que contendrá la calculadora
        let tabla = document.createElement("div");
        tabla.className = 'calculator';
        tabla.id = 'calc';

        // estilos
        tabla.style.display = "block";
        tabla.style.width = "30em";
        tabla.style.height = "25em";
        tabla.style.backgroundColor = "#eeeeee";
        tabla.style.border = "2px solid #CCCCCC";
        tabla.style.margin = "auto";
        tabla.style.paddingLeft = "1%";
        tabla.style.paddingTop = "1%";
        tabla.style.paddingBottom = "1%";

        // fila 1 (pantalla)
        tabla.appendChild( construyePantalla() );

        // resto de filas
        const filas = [["CE", "\u2190", "%", "+"],
                       ["7",  "8",      "9", "-"],
                       ["4",  "5",      "6", "x"],
                       ["1",  "2",      "3", "\u00F7"],
                       ["0",  "\u00B1", ",", "="]];

        filas.forEach( fila => tabla.appendChild( construyeFila(fila) ) );

        // insertar la tabla en el documento HTML
        document.getElementsByTagName("main")[0].appendChild(tabla);
    }

    document.addEventListener('DOMContentLoaded', () => {
        construyeCalculadora();

    });
}