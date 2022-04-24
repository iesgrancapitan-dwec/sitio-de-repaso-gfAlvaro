/**
 * @name ejercicio1.js
 * Con altura. Muestra en una lista la siguiente información. 
 * Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. 
 * Explica en cada uno la diferencia con respecto a los demás.
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 * @author Álvaro García Fuentes
 */
{
    let texto1;
    let texto2;
    let texto3;
    let texto4;
    let articulo;

    let agregarLista = () => {
        
        let ol = document.createElement("ol");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");

        li1.appendChild(texto1);
        ol.appendChild(li1);
        li2.appendChild(texto2);
        ol.appendChild(li2);
        li3.appendChild(texto3);
        ol.appendChild(li3);
        li4.appendChild(texto4);
        ol.appendChild(li4);
        
        articulo.appendChild(ol);
    }

    document.addEventListener("DOMContentLoaded", () => {
        texto1 = document.createTextNode(`window.outerHeigt: ${window.outerHeight}. Devuelve la altura en píxeles de la ventana externa del navegador.`);
        texto2 = document.createTextNode(`window.innerHeight: ${window.innerHeight}. Devuelve la altura en pixeles de la ventana interna del navegador.`);
        texto3 = document.createTextNode(`window.screen.availHeight: ${window.screen.availHeight}. Devuelve el espacio vertical en la pantalla.`);
        texto4 = document.createTextNode(`window.screen.height: ${window.screen.height}. Devuelve la altura de la pantalla en píxeles.`);
        articulo = document.getElementById("ejercicio1");
        agregarLista();

        document.getElementById("atras").addEventListener('click', () => { history.back() });
    });
}

