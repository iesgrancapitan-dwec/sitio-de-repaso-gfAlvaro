/**
 * @name ejercicio2.js
 * Scrolleando. El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. Muéstralos reaccionando al evento scroll sobre window. Además, crea botones que demuestren el uso de los métodos de scroll en window. Explica en cada botón el método que usas. Por ejemplo:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * @author Álvaro García Fuentes
 */
{
    let muestraDatosScroll = function() {

        let informacion = document.getElementById("ejercicio2");
        informacion.innerHTML = `window.scrollX = ${window.scrollX} `;
        informacion.innerHTML += `window.scrollY = ${window.scrollY} `;
        informacion.innerHTML += `window.scrollbars = ${window.scrollbars.visible}`;
    }

    let bajaLinea = () => {
        scroll(scrollX, scrollY + 5);
    }

    let subeLinea = () => {
        scroll(scrollX, scrollY - 5);
    }

    let baja = () => {
        scroll(scrollX, scrollY + innerHeight);
    }

    let sube = () => {
        scroll(scrollX, scrollY - innerHeight);
    }

    let veFinal = () => {
        scroll(scrollX, scrollY + document.body.scrollHeight);
    }

    let vePrincipio = () => {
        scroll(scrollX, scrollY - document.body.scrollHeight);
    }

    document.addEventListener("DOMContentLoaded", () =>{
        document.getElementById("bajarLinea").addEventListener("click", bajaLinea);
        document.getElementById("subirLinea").addEventListener("click", subeLinea);
        document.getElementById("bajar").addEventListener("click", baja);
        document.getElementById("subir").addEventListener("click", sube);
        document.getElementById("final").addEventListener("click", veFinal);
        document.getElementById("principio").addEventListener("click", vePrincipio);
        document.addEventListener("scroll", muestraDatosScroll);

        document.getElementById("atras").addEventListener('click', () => { history.back() });
    });
}

