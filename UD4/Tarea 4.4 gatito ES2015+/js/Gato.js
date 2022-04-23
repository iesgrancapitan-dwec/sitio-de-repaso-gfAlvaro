/**
 * @name Gato.js
 * Definicion de la clase Gato
 * @author Álvaro García Fuentes
 */

class Gato{

// atributos privados
    #nombre;
    #raza;
    #peso;
    #fecha;

// constructor de la clase
    constructor(nombre, raza, peso, fecha) {
    
        this.#compruebaNombre(nombre);
        this.#nombre = nombre;

        this.#compruebaRaza(raza);
        this.#raza = raza;
        
        this.#compruebaPeso(peso);
        this.#peso = peso;

        this.#compruebaFechaValida(fecha);
        this.#fecha = new Date(fecha);
    }

// getters
    get nombre(){
        return this.#nombre;
    }

    get raza(){
        return this.#raza;
    }

    get peso(){
        return this.#peso;
    }

    get fecha(){
        return this.#fecha.getDate() + "/" + (this.#fecha.getMonth() + 1).toString() + "/" + this.#fecha.getFullYear();
    };

// setters
    set nombre(nombre) {
        this.#compruebaNombre();
        this.#nombre = nombre;
    };

    set raza(raza) {
        this.#compruebaRaza();
        this.#raza = raza;
    };

    set peso(peso) {
        this.#compruebaPeso(peso);
        this.#peso = peso;
    };

    set fecha(fecha) {
        this.#compruebaFechaValida(fecha);
        this.#fecha = new Date(fecha);
    };

// métodos privados
    #compruebaNombre(nombre){
        if (nombre == ""){
            throw new Error("El nombre no puede estar vacío.");
        }
    };

    #compruebaRaza(raza){
        if (raza == ""){
            throw new Error("La raza no puede estar vacía.");
        }
    };

    #compruebaPeso(peso) {
        if( peso == "" || peso < 1 || peso > 15 ) {
            throw new Error("El peso debe ser entre 1 y 15 Kg.");
        }
    }

    #compruebaFechaValida(fecha){
        if ( !(fecha != "" && new Date(fecha) <= new Date()) ) {
            throw new Error("Fecha no válida");
        }
    };
    
    #compruebaVivo() {
        try{
            this.#compruebaPeso(this.#peso);
        } catch {
            throw new Error(this.#nombre + " ha muerto.");
        }
    };

// métodos públicos
    juega() {
        this.#compruebaVivo();
        this.#peso--;
        this.#compruebaVivo();
    };

    come() {
        this.#compruebaVivo();
        this.#peso++;
        this.#compruebaVivo();
    };

    duerme() {
        this.#compruebaVivo();
        return "Como me gusta dormir";
    };

    calculaEdad() {
        let hoy = new Date();
        let dia = hoy.getDate() - this.#fecha.getDate();
        let mes = hoy.getMonth() - this.#fecha.getMonth();
        let anyos = hoy.getFullYear() - this.#fecha.getFullYear();

        if (mes < 0 || (mes == 0 && dia < 0))
            anyos--;
        
        if (anyos == 0) {
            let meses = (hoy.getFullYear() - this.#fecha.getFullYear()) * 12;
            meses -= this.#fecha.getMonth();
            meses += hoy.getMonth();

            if (hoy.getDate() < this.#fecha.getDate())
                meses--;
            
            this.#fecha.setMonth(this.#fecha.getMonth() + meses);
            let dias = (hoy.getTime() - this.#fecha.getTime()) / (1000 * 60 * 60 * 24);
            dias = Math.floor(dias);
            return [meses, dias];
        }

        return anyos;
    }
}