/** 
 * @name ventanaMultiple.js
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * miVentana.document.close();
 * @author Álvaro García Fuentes
 */
{
    let misVentanas = new Array(5);

    let muestraVentanas = () => {
        for(let i = 0; i < misVentanas.length; i++) {
            misVentanas[i] = window.open("", `miVentana ${i+1}`, "height=200,width=200");
            misVentanas[i].document.write(
                `<!DOCTYPE html>
                <html>
                    <head>
                        <link rel="stylesheet" href="../../css/normalize.css">
                        <link rel="stylesheet" href="../../css/estilos.css">
                        <title>Ventana de prueba</title>
                    </head>
                    <body>
                        <header><h1>Ventana ${i+1}</h1></header>
                        <main></main>
                    </body>
                </html>`
            );
        }
    }

    let cierraVentanas = () => {
        for( const iterator of misVentanas )
            iterator.close();
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("abrir").addEventListener('click', muestraVentanas);
        document.getElementById("cerrar").addEventListener('click', cierraVentanas);
        document.getElementById("atras").addEventListener('click', () => { history.back() });
    });
}

