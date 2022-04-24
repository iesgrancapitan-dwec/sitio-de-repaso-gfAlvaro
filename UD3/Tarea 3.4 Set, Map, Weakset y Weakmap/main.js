/**
 * @name main.js
 * código para la Tarea 3.5 Listado Set, Map, WeakSet y WeakMap
 * @author Álvaro García Fuentes
 */
{
    // ejercicio 1
    crearSet = (entrada = [1,2,3,4,4]) => new Set(entrada);

    console.log("Ejercicio 1")
    console.log(crearSet());

    // ejercicio 3
    console.log("Ejercicio 3")
    console.log( new Set().add(11).add(22) );

    // ejercicio 5
    let alumnosAusentes = () => {
        return new Set().add("Pepe")
                        .add("María")
                        .add("Sara")
                        .add("María");
    }

    console.log("Ejercicio 5")
    console.log(alumnosAusentes());

    // ejercicio 6
    let array6 = [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd'], [4, 'e']];

    console.log("Ejercicio 6");
    console.log(array6);

    let map6 = new Map(array6);

    console.log(map6);

    let claves = new Array();
    let valores = new Array();
    let objetos = new Array();

    for(let [key, value] of map6){
        claves.push(key);
        valores.push(value);
        objetos.push([key, value]);
    }

    console.log(claves);
    console.log(valores);
    console.log(objetos);

    // ejercicio 7
    let mapa7 = new Map();

    mapa7.set("hola", 1);
    mapa7.set(null, 2);
    mapa7.set(NaN, 3);
    mapa7.set( mapaLleno = (mapa7) => mapa7.length>0, 4);

    console.log(mapa7);

    // ejercicio 8
    ausentesMapa = () => 
        new Map().set(1, "Pepe")
                 .set(2, "María")
                 .set(3, "Sara")
                 .set(4, "María");

    console.log("Ejercicio 8");
    console.log(ausentesMapa());

    // ejercicio 9
    quitaLosRepes = (entrada) => Array.from(new Set(entrada));

    let array9 = [1,2,2,3,4,3,5,6,7,7];

    console.log("Ejercicio 9")
    console.log(array9);
    console.log(quitaLosRepes(array9));

    // ejercicio 10
    console.log("Ejercicio 10");

    let debilSet10 = new WeakSet();

    try{
        debilSet10.add([1,2,3])
                  .add("123");
    }catch{
        console.log("No se pudo añadir el valor primitivo al WeakSet.");
    }

    console.log(debilSet10);

    // ejercicio 11
    console.log("Ejercicio 11");

    let setDebil11 = new WeakSet().add([1, 2])
                                  .add([3, 4])
                                  .add([5, 6]);

    let mapDebil11 = new WeakMap().set([1], 2)
                                  .set([3], 4)
                                  .set([5], 6);

    try{
        for (const iterator of setDebil11) {
            console.log(iterator);   
        }
    }catch{
        console.log("Error: el WeakSet no es iterable.");
    }
    console.log(setDebil11);

    try{
        for (const iterator of mapDebil11) {
            console.log(iterator);   
        }
    }catch{
        console.log("Error: el WeakMap no es iterable.");
    }
    console.log(mapDebil11);
}