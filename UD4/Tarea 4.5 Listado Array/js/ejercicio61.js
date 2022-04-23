/**
 * @name ejercicio6.js
 * ejercicio 6 del listado Arrays
 * @author Álvaro García Fuentes
 */
let ejercicio61 = () =>{

    array = ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];
    document.getElementById("ejercicio61").innerHTML = `<p>Array desordenado: ${JSON.stringify(array)}</p>`;
    array.sort();
    document.getElementById("ejercicio61").innerHTML += `<p>Array ordenado: ${JSON.stringify(array)}</p>`;
}