/**
 * @name ejercicio4.js
 * Numeritos.
 * Programa para crear una página que muestra 
 * tres listas con los siguientes arrays:
 * •Array de enteros aleatorios entre 0 y 10
 * •Array de los números pares extraídos del anterior
 * •Array con la media del array de pares
 * 
 *  Para mostrar las listas se define la función muestra()
 *  Se utilizan funciones arrow lo más simplificadas posibles
 * @author Álvaro García Fuentes
 */
{
    let muestra = (entrada) => `<ul><li>${entrada.join('</li><li>')}</li></ul>`;

    document.addEventListener("DOMContentLoaded", () => {
        // Título
        let titulo = document.createElement("h2");
        let texto = document.createTextNode("Numeritos a tutiplén desde cero");
        titulo.appendChild(texto);
        document.body.appendChild(titulo);

        // enlace atrás
        let atras = document.createElement("a");
        atras.href = "javascript: history.back()";
        let textoAtras = document.createTextNode("Atrás");
        atras.appendChild(textoAtras);
        document.body.appendChild(atras);

        // texto para respuestas
        let areaRespuesta = document.createElement("p");
        areaRespuesta.id = "respuesta";
        document.body.appendChild(areaRespuesta);
        let respuesta = document.getElementById("respuesta");

        // aleatorios
        let aleatorios = Array.from( Array(10) ).map( () => Math.floor(Math.random() * 10) );
        respuesta.innerHTML += "<p>10 enteros aleatorios:</p>";
        respuesta.innerHTML += muestra(aleatorios);

        // pares extraidos de la lista de aleatorios
        let pares = aleatorios.filter( numero => (numero%2 == 0) );
        respuesta.innerHTML += "<p>Pares extraídos del anterior:</p>";
        respuesta.innerHTML += muestra(pares);

        // media de los pares
        let media = new Array();
        media.push( Math.round(100*pares.reduce( (a, b) => parseFloat(a) + parseFloat(b) ) / pares.length)/100 );
        respuesta.innerHTML += `<p>Media de los aleatorios:</p>`;
        respuesta.innerHTML += muestra(media);
    });
}