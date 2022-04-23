/**
 * @name ejercicio5.js
 * ejercicio 5 del listado Array
 * @author Álvaro García Fuentes
 */
let ejercicio5 = () => {

    let cadena = "Zenda Menchú";
    [nombre, apellido] = cadena.split(" ");
    document.getElementById("ejercicio5").innerHTML = `<p>Cadena original: ${cadena}</p>`;
    document.getElementById("ejercicio5").innerHTML += `<p>Nombre: ${nombre}</p>`;
    document.getElementById("ejercicio5").innerHTML += `<p>Apellido: ${apellido}</p>`;
}