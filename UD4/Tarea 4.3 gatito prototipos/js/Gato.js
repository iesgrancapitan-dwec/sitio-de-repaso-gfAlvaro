/**
 * @name Gato.js
 * Definicion de la clase Gato
 * @author Álvaro García Fuentes
 */

function Gato(nombre, raza, peso, fecha) {

    this.nombre = nombre;
    this.raza = raza;
    this.peso = peso;
    this.fecha = new Date(fecha);

    Gato.prototype.setNombre = function (nombre) {
        if (nombre == "")
            throw new Error("El nombre no puede estar vacío");

        this.nombre = nombre;
    };

    Gato.prototype.setRaza = function (raza) {
        if (raza == "")
            throw new Error("La raza no puede estar vacía");

        this.raza = raza;
    };

    Gato.prototype.setPeso = function (peso) {
        if (!this.compruebaPeso(peso))
            throw new Error("El peso debe ser entre 1 y 15");

            this.peso = peso;
    };
    Gato.prototype.setFecha = function (fecha) {

        if (!this.compruebaFechaValida(fecha))
            throw new Error("Fecha de nacimiento invalida");

        this.fecha = new Date(fecha);
    };

    Gato.prototype.compruebaFechaValida = function(fecha){
        return fecha != "" && new Date(fecha) <= new Date() ;
    };
    
    Gato.prototype.compruebaVivo = function () {
        if (!this.compruebaPeso(this.peso))
            throw new Error(this.nombre + " ha muerto.");
    };

    Gato.prototype.compruebaPeso = function (peso) {
        return (peso >= 1 && peso <= 15) && peso != "";
    };

    Gato.prototype.juega = function () {
        this.compruebaVivo();
        this.peso--;
        this.compruebaVivo();
    };

    Gato.prototype.come = function(){
        this.compruebaVivo();
        this.peso++;
        this.compruebaVivo();
    };

    Gato.prototype.duerme = function(){
        this.compruebaVivo();
        return "Como me gusta dormir";
    };

    Gato.prototype.getFecha = function(){
        return this.fecha.getDate() + "/" + (this.fecha.getMonth() + 1).toString() + "/" + this.fecha.getFullYear();
    };

    Gato.prototype.calculaEdad = function(){
        let hoy = new Date();
        let dia = hoy.getDate() - this.fecha.getDate();
        let mes = hoy.getMonth() - this.fecha.getMonth();
        let anyos = hoy.getFullYear() - this.fecha.getFullYear();

        if (mes < 0 || (mes == 0 && dia < 0))
            anyos--;
        
        if (anyos == 0) {
            let meses = (hoy.getFullYear() - this.fecha.getFullYear()) * 12;
            meses -= this.fecha.getMonth();
            meses += hoy.getMonth();

            if (hoy.getDate() < this.fecha.getDate())
                meses--;
            
            this.fecha.setMonth(this.fecha.getMonth() + meses);
            let dias = (hoy.getTime() - this.fecha.getTime()) / (1000 * 60 * 60 * 24);
            dias = Math.floor(dias);
            return [meses, dias];
        }

        return anyos;
    }
}