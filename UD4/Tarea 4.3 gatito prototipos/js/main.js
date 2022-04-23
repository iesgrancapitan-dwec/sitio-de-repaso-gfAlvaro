/**
 * @name main.js
 * 
 * @author Álvaro García Fuentes
 */

 let error;

 function inicia() {
     document.getElementById("crearGato").addEventListener("click", creaGato);
     error = document.getElementById("error");
 }
 
 function creaGato() {
     let nombre = document.getElementById("nombre").value;
     let raza = document.getElementById("raza").value;
     let peso = document.getElementById("peso").value;
     let fecha = document.getElementById("fechaNacimiento").value;
 
     console.log(fecha);
     try {
         creaVentana(new Gato(nombre, raza, peso, fecha))
     } catch (e) {
         error.textContent = e.message;
     }
 }
 
 function creaVentana(miGato) {
     let ventana = window.open("", "", "width=600, height=500");
     let pagina =
        `<!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta name="author" content="Álvaro García Fuentes" />
                    <meta charset="UTF-8" />
                    <title>Gatito</title>
                    <link rel="stylesheet" type="text/css" href="estilosGato.css">
                    <script type="text/javascript" src="js/Gato.js"></script>
                    <script type="text/javascript" src="js/ventanaGato.js"></script>
                </head>
                <body>
                    <noscript>Para ver correctamente esta página es necesario Javascript.</noscript>
                    <main>
                        <div id="infoGato">
                            <ul>
                                <li id="nombre"><p>Nombre del gato: </p></li>
                                <li id="raza"><p>Raza: </p></li>
                                <li id="peso"><p>Peso: </p></li>
                                <li id="fechaNacimiento"><p>Fecha de nacimiento: </p></li>
                                <li id="edad"><p>Edad: </p></li>
                            </ul>
                            
                            <ul>
                                <li><button id="jugar">Jugar</button></li>
                                <li><button id="comer">Comer</button></li>
                                <li><button id="dormir">Dormir</button></li>
                            </ul>
                            </br>
                            <img id="imagen" src="imagenes/gato.jpg"><br/>
                        </div>
                        <p id="mensajeAccion"><p>
                    </main>
                    <footer>
                        <p>Autor: Álvaro García Fuentes</p>
                        <button id='cerrar' onclick='window.close()'>Cerrar</button>
                    </footer>
                </body>
            </html>`;
     ventana.document.open();
     ventana.document.write(pagina);
     ventana.Gatete = miGato;
     ventana.document.close();
 }
 
 window.addEventListener("DOMContentLoaded", inicia);