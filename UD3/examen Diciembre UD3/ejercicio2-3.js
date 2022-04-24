/**
 * @name ejercicio2-3.js
 * ejercicio 2: Programa que extrae el nombre y los apellidos introducidos en la caja de texto
 * Se introducen los apellidos y el nombre separados por coma.
 * -Al perder el foco (evento blur) se limpia la caja de texto y aparecen en los div indicados.
 * -En caso de no cumplirse el formato se captura la excepción y se muestra el mensaje indicado en el span.
 * -En tal caso se muestra el mensaje de error: “Error. Formato correcto: Cuadrado Perfecto, Anacleto”
 * -Se extraen nombre y apellidos mediante los grupos de las expresiones regulares y el destructuring.
 * -Se usa el destructuring también al devolver los valores.
 * 
 * ejercicio 3: También se añade un Set para controlar los nombres repetidos.
 * @author Álvaro García Fuentes
 */
{
    let setNombres = new Set();

    document.addEventListener( "DOMContentLoaded", () => {
        document.getElementById("texto").addEventListener( 'blur', () => {

            let entrada = document.getElementById("texto").value;

            let regex = /^([a-z\sáéíóúñ]{1,}),([a-z\sáéíóúñ]{1,}$)/i;

            try {
                regex.test(entrada);
                [cadena, ape, nom] = entrada.trim().match(regex);

                setNombres.has(cadena)? document.getElementById("errores").innerHTML = "REPETIDO"
                                      : (document.getElementById("errores").innerHTML = "", setNombres.add(cadena));

                document.getElementById("apellidos").innerHTML = `Apellidos: ${ape}`;
                document.getElementById("nombre").innerHTML = `Nombre: ${nom}`;
                document.getElementById("texto").value = "";
            } catch (e) {
                document.getElementById("apellidos").innerHTML = `Apellidos:`;
                document.getElementById("nombre").innerHTML = `Nombre:`;

                (e instanceof TypeError)? document.getElementById("errores").innerHTML = "Error. Formato correcto: Cuadrado Perfecto, Anacleto"
                                        : document.getElementById("errores").innerHTML = "Error desconocido.";
            }
        } );
    
        document.getElementById("atras").addEventListener('click', () => { history.back() } );
    } );
}