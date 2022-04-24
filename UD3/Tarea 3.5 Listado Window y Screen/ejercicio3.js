/**
 * @name ejercicio3.js
 * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * @author Álvaro García Fuentes
 */
{
    document.addEventListener("DOMContentLoaded", () => {
        let informacion = document.getElementById("ejercicio3");
        informacion.innerHTML = `<p>URL: ${location.href}</p>`;
        informacion.innerHTML += `<p>Hostname: ${location.hostname}</p>`;
        informacion.innerHTML += `<p>Host: ${location.host}</p>`;
        informacion.innerHTML += `<p>Pathname: ${location.pathname}</p>`;
        informacion.innerHTML += `<p>Protocolo: ${location.protocol}</p>`;
        informacion.innerHTML += `<p>Puerto: ${location.port}</p>`;
        informacion.innerHTML += `<p>Hash: ${location.hash}</p></br>`;

        document.getElementById("atras").addEventListener('click', () => { history.back() });
    });
}

