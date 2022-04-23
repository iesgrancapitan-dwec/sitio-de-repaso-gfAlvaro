/**
 * @name ejercicio4.js
 * codigo para el ejercicio 4 de listado Arrays
 * @author Álvaro García Fuentes
 */
 let ejercicio4 = () => {

    // función recursiva que imprime objetos en una cadena
    let imprimeObjetos = (objeto) => {

        let cadena = "{";

        Object.entries( objeto ).forEach( ( [clave, valor], j, arr ) => {
            
            if( valor instanceof Object){
                cadena += imprimeObjetos( valor );
            }else{
                cadena += `${clave}:${valor}`;
            }

            if( j < arr.length - 1 ){
                cadena += ", ";
            }
        });

        cadena += "}";

        return cadena;
    }


    // Lee un array y lo transforma en cadena,
    // teniendo en cuenta elementos que puedan ser objetos
    let imprimeArray = (array) => {

        let cadena = "[";

        array.forEach( (elemento, i) => {
            if( elemento instanceof Object ){
                cadena += imprimeObjetos(elemento);
            } else {
                cadena += elemento;
            }
            if( i < array.length - 1 ){                
                cadena += ", ";
            }
        });
        cadena += "]";

        return cadena;
    }

        //ejercicio 4
        a = [1, 2, {3:3, 5:5}];
        let c1 = JSON.stringify(a);
        let c2 = JSON.parse(c1);

        // mostramos por pantalla el array inicial y las variables
        document.getElementById("ejercicio4").innerHTML = "<p>Array a = " + imprimeArray(a) + "</p>";
        document.getElementById("ejercicio4").innerHTML += `<p>JSON.stringify, variable c1: ${c1}</p>`;
        document.getElementById("ejercicio4").innerHTML += `<p>JSON.parse, variable c2: ${imprimeObjetos(c2)}</p>`;

        // ahora cambiamos un elemento del array y mostramos los resultados
        a[2][5] = 55;
        document.getElementById("ejercicio4").innerHTML += `<p>Ahora cambiamos un elemento del array inicial. a[2][5] = 55</p<`;
        document.getElementById("ejercicio4").innerHTML += "<p>Array a = " + imprimeArray(a) + "</p>";
        document.getElementById("ejercicio4").innerHTML += `<p>JSON.stringify, variable c1: ${c1}</p>`;
        document.getElementById("ejercicio4").innerHTML += `<p>JSON.parse, variable c2: ${imprimeObjetos(c2)}</p>`;
    }
