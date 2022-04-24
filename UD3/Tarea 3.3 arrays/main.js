/**
 * @name main.js
 * código para el manejo de arrays
 * @author Álvaro García Fuentes
 */
{
    // 1. Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
    console.log(`1. El método forEach consta de tres elementos:`);
    console.log(`array: es el array sobre el que va a iterar el bucle.`);
    console.log(`element: el iterador que devolverá un valor contenido en el array.`);
    console.log(`cuerpo del bucle: precedido por "=>", indica las instrucciones que lleva el bucle.`);

    var array1 = ['a','b','c','d','e'];
    console.log(array1);
    array1.forEach(element => { console.log(element) });

    // 2. Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
    console.log("2. El operador in devuelve un valor booleano que dice si un indice está en un array");
    console.log("Veamos un ejemplo: ");

    var array2 = [ 4, "hola", 3.1, 'a'];
    console.log(`Tamaño del Array: ${array2.length}`);

    for(var i in array2){
        console.log(`Elemento ${i}: ${array2[i]}`);
    }

    // 3. Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
    console.log("3. La función que comprueba si un objeto es un Array es Array.isArray() ");
    console.log("Veamos unos ejemplos de su uso: ");
    let array3 = [1, 2, 3];
    let array3Falso = "123";

    ( Array.isArray(array3) )? console.log(`El elemento ${array3} es un array.`) : null;

    ( !Array.isArray(array3Falso) )? console.log(`El elemento ${array3Falso} no es un array.`) : null;

    // 4.Crea una función que cree un array de la dimensión indicada, 
    // cuyo contenido sean los números naturales comenzando desde 0
    let arrayNatural = (dimension) => Array.from({length: dimension}, (x, i) => i);

    let dimension = 3;

    console.log(`4. Array de números naturales de dimension ${dimension}: ${arrayNatural(dimension)}`);

    // 5. Crea una función que devuelva un array con cada uno de los argumentos.
    let arrayArg = (...argumentos) => argumentos;

    console.log(`5. Array construido con argumentos pasados a la funcion: ${arrayArg(2, 's', 4.5, 'hola')}`);

    // 6.Crea  una función que devuelva un array con cada uno de los argumentos.
    // En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
    let arrayArg2 = (...argumentos) => argumentos;

    console.log(`6. Array construido con argumentos pasados a la funcion: ${arrayArg2(2, 's', 4.5, ['h','o','l','a'])}`);

    // 7. Crea una función que elimine todos los undefined de un array.
    let compactar = (arrayEntrada) => {
        for( const elemento of arrayEntrada ){
            (elemento === undefined)? arrayEntrada.splice(arrayEntrada.indexOf(elemento) , 1) : null;
        }
    }

    console.log('7. Función para eliminar undefined de un array: ');
    var array7 = ['hola', undefined, 'adios', 'Pepa', undefined, 'mar'];
    console.log(array7);
    compactar(array7);
    console.log(array7);

    /* 8. Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:
    Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()*/
    console.log('8. métodos para iterar arrays');

    console.log('forEach() itera todos los elementos del array.');
    var array8 = ["a","b","c","d"];
    array8.forEach(element => { console.log(element) });

    console.log('every() determina si todos los elementos en el array satisfacen una condición.');
    var valor = 40;
    var esMenorAlMargen = (valorActual) => valorActual < valor;

    const array82 = [1, 30, 39, 29, 10, 13];
    console.log(`¿Son todos los elementos del Array: ${array82} menores que ${valor}?`);
    console.log(array82.every(esMenorAlMargen));

    console.log('some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.');
    const array83 = [1, 2, 3, 4, 5];

    console.log(`¿Tiene el array: ${array83} algún elemento par?`)
    const esPar = (elemento) => elemento % 2 === 0;

    console.log(array83.some(esPar));

    console.log('filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.');
    const array84 = ['arbol', 'silla', 'libro', 'carruajes', 'constructor', 'palabra'];

    console.log(`Array original: ${array84}`);
    console.log(`Palabras de más de 6 letras: ${array84.filter(palabra => palabra.length > 6)}`);

    /* 9. Averigua qué método es el más eficiente para manejarse con arrays.
    Compruébalo mediante performance.now() o similares.
    1. Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
    2. Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...*/
    let anadirPush = () => {

        var arraySalida = [];

        for (var i = 0; i < 100; i++)
            arraySalida.push(i);

        return arraySalida;
    }

    let anadirUnshift = () => {

        var arraySalida = [];

        for (var i = 0; i < 100; i++)
            arraySalida.unshift(i);

        return arraySalida;
    }

    let anadirElementos = () => new Array(100);

    var t1 = performance.now();
    var array91 = anadirPush();
    t1 = performance.now() - t1;

    var t2 = performance.now();
    var array92 = anadirUnshift();
    t2 = performance.now() - t2;

    var t3 = performance.now();
    var array93 = anadirElementos();
    t3 = performance.now() - t3;


    console.log(`9.1 Insertar elementos en arrays.`);

    console.log(`Inserción mediante push: ${array91}`);
    console.log(`tiempo: ${t1}`);
    console.log(`Inserción mediante unshift: ${array92}`);
    console.log(`tiempo: ${t2}`);
    console.log(`Inicialización fijando tamaño: ${array93}`);
    console.log(`tiempo: ${t3}`);

    let eliminarPop = (arrayEntrada) => {
        while(arrayEntrada.length > 0)
            arrayEntrada.pop();
    }

    let eliminarShift = (arrayEntrada) => {
        while(arrayEntrada.length > 0)
            arrayEntrada.shift();
    }

    let eliminarElementos = (arrayEntrada) => {
        arrayEntrada.length = 0;
    }

    console.log(`9.1 Eliminar elementos en arrays.`);

    var t4 = performance.now();
    eliminarPop(array91);
    t4 = performance.now() - t4;

    var t5 = performance.now();
    eliminarShift(array92);
    t5 = performance.now() - t5;

    var t6 = performance.now();
    eliminarElementos(array93);
    t6 = performance.now() - t6;

    console.log(`Eliminación mediante pop: ${array91}`);
    console.log(`tiempo: ${t4}`);
    console.log(`Eliminación mediante shift: ${array92}`);
    console.log(`tiempo: ${t5}`);
    console.log(`Eliminación mediante cambio de longitud: ${array93}`);
    console.log(`tiempo: ${t6}`);
}