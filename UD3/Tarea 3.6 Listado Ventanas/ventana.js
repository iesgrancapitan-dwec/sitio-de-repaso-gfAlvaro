/**
 * @name ventana.js
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * @author Álvaro García Fuentes
 */
{
    let creaVentana = () => {
        const ALTURA = 200;
        const ANCHO = 300;
        const TOP = 0;
        const LEFT = 0;

        let miVentana = window.open("", "ventana", `width=${ALTURA},height=${ANCHO},top=${TOP},left=${LEFT}`);
        miVentana.document.write(
            `<!DOCTYPE html>
                <head>
                    <meta charset="utf-8">
                    <meta name='author' content='Álvaro García Fuentes'>
                    <link rel="stylesheet" href="../../css/normalize.css">
                    <link rel="stylesheet" href="../../css/estilos.css"> 
                    <title>Ventana de Prueba</title>
                </head>
                <body>
                    <p>Propiedades usadas:<ul><li>height=${ALTURA}</li><li>width=${ANCHO}</li></ul></p>
                    <footer>
                        <p>Autor: Álvaro García Fuentes</p>
                        <button id="cerrar" onclick='window.close()'>Cerrar</button>
                </footer>
                </body>
            </html>`
        );
        miVentana.document.close();
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("abrirventana").addEventListener('click', creaVentana);
        document.getElementById("atras").addEventListener('click', () => { history.back() });
    });
}

