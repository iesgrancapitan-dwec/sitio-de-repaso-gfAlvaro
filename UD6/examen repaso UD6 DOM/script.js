/**
 * @author Álvaro García Fuentes
 */
document.addEventListener('DOMContentLoaded', () => {

    // crear párrafos
    document.getElementById("creaFinal1").addEventListener( 'click', () => {
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = document.getElementById("entradaCreaFinal").value;
        nuevoParrafo.className = "creado 1";
        let parrafoUno = document.getElementById("uno");
        parrafoUno.insertBefore(nuevoParrafo, parrafoUno.lastChild);
    });

    document.getElementById("creaFinal2").addEventListener( 'click', () => {
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = document.getElementById("entradaCreaFinal").value;
        nuevoParrafo.className = "creado 2";
        let parrafoDos = document.getElementById("dos");
        parrafoDos.insertBefore( nuevoParrafo, parrafoDos.lastChild );
    });

    document.getElementById("creaPrincipio1").addEventListener( 'click', () => {
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = document.getElementById("entradaCreaPrincipio").value;
        nuevoParrafo.className = "creado 1";
        let parrafoUno = document.getElementById( "uno" );
        parrafoUno.insertBefore( nuevoParrafo, parrafoUno.firstChild );
    });

    document.getElementById("creaPrincipio2").addEventListener( 'click', () => {
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = document.getElementById("entradaCreaPrincipio").value;
        nuevoParrafo.className = "creado 2";
        let parrafoDos = document.getElementById( "dos" );
        parrafoDos.insertBefore( nuevoParrafo, parrafoDos.firstChild );
    });

    // Eliminar párrafos
    document.getElementById("eliminaFinal1").addEventListener( 'click', () => {
        document.getElementById("uno")
        .lastChild.remove();
    });

    document.getElementById("eliminaFinal2").addEventListener( 'click', () => {
        document.getElementById("dos")
        .lastChild.remove();
    });

    document.getElementById("eliminaPrincipio1").addEventListener( 'click', () => {
        document.getElementById("uno")
        .firstChild.remove();
    });

    document.getElementById("eliminaPrincipio2").addEventListener( 'click', () => {
        document.getElementById("dos")
        .firstChild.remove();
    });

    // Duplicar sección 1
    document.getElementById("duplicaSeccion1").addEventListener('click', () => {
        
        let seccion1 = document.getElementById("uno");
        seccion1.parentNode.insertBefore( seccion1.cloneNode(true), seccion1);

    });

    // Eliminar sección 1
    document.getElementById("eliminaSeccion1").addEventListener('click', () => {
       document.getElementById("uno").remove(); 
    });

    // Cambiar color en seccion Eliminar Parrafos
    document.getElementById("color1").addEventListener('click', () => {
        document.getElementById("eliminarParrafos")
        .style.color = document.getElementById("color").value; 
    });
    // Cambiar fondo en sección Eliminar Párrafos
    document.getElementById("fondo2").addEventListener('click', () => {
        document.getElementById("eliminarParrafos")
        .style.backgroundColor = document.querySelector('input[name=fondo]:checked').value; 
     });

    // cambiar clases css en Crear Párrafos
    Array.from( document.querySelectorAll('input[type=checkbox]') ).forEach( element => function(){
        console.log(element);
        element.addEventListener('change', function() {
            document.getElementById("crearParrafos").setAttribute( "class", element.value );
        });
    });

    document.getElementById("toggle").addEventListener('click', function(){
        Array.from( document.querySelectorAll('h2') ).forEach(elemento => {
            elemento.className = document.getElementById('toggleInput').value;
        });
    });
});