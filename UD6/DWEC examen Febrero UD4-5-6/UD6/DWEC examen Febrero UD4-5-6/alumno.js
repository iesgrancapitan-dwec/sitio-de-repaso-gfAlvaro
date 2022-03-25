/**
 * @name alumno.js
 * definicion de la clase alumno
 * @author Álvaro García Fuentes
 */
class Alumno {
    #nombre;
    #apellidos;
    #curso;

    constructor(nombre, apellidos, curso){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    set apellidos(apellidos){
        this.#apellidos = apellidos;
    }

    set curso(curso){      
        if(!/(1|2)(asir|daw|dam)/.test(curso)){
            throw new Error("cursoError");
        }
        this.#curso = curso;
    }

    muestra(){
        console.log("nombre: " + this.#nombre);
        console.log("apellidos: " + this.#apellidos);
        console.log("curso: " + this.#curso);
    }
};
