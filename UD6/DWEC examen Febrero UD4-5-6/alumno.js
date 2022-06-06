/**
 * @name alumno.js
 * definicion de la clase alumno
 * @author Álvaro García Fuentes
 */
class Alumno {
    #nombre;
    #apellidos;
    #curso;

    constructor( nombre, apellidos, curso ){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }

    // setters
    set nombre( nombre ){ this.#nombre = nombre; }
    set apellidos( apellidos ){ this.#apellidos = apellidos; }
    set curso( curso ){
        this.#curso = /(1|2)(asir|daw|dam)/.test( curso )? curso
                    : () => { throw new Error( "cursoError" ) };
    }

    muestra(){
        console.log( "nombre: " + this.#nombre );
        console.log( "apellidos: " + this.#apellidos );
        console.log( "curso: " + this.#curso );
    }
};
