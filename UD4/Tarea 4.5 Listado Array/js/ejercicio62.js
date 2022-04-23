/**
 * @name ejercicio62
 * Ejercicio 6-2 del listado Arrays
 * @author Álvaro García Fuentes
 */
let ejercicio62 = () => {
    let alumnas = [ { nombre: 'Anacleta', apellido: 'Cándida' },
                    { nombre: 'Manola',   apellido: 'CÁNTICO' },
                    { nombre: 'Simona',   apellido: 'Carola'  } ];

    document.getElementById("ejercicio62").innerHTML = `<p>Lista desordenada: ${JSON.stringify(alumnas)}</p>`;
    alumnas.sort( ( a, b ) => b.apellido.localeCompare(a.apellido) );
    document.getElementById("ejercicio62").innerHTML += `<p>Lita ordenada: ${JSON.stringify(alumnas)}</p>`;
    }