/**
 * @name validar.js
 * Objeto Validar
 * @author Álvaro García Fuentes
 */

let Validar = function() {

    const regex = {

        youtube: [ /^https:\/\/www.youtube.com[\/]?(\/[a-z]{2,})?$/i, 
                "Debe ser un enlace de youtube."],

        correo: [ /^[a-z]{3,}@[a-z]{2,}.[a-z]{2,}$/i,
                "Debe ser un email válido: correo@gmail.om"],

        web: [ /^http[s]?:\/\/www.[a-z]{3,}.[a-z]{2,}$/i,
                "Debe ser una dirección web válida."],

        fecha: [ /^[\d]{2}[\-\s\/][\d]{2}[\-\s\/][\d]{4}$/,
                "Formatos válidos: dd/mm/aaaa, dd mm aaaa, dd-mm-aaaa"],

        hora: [/^[\d]{2}:[\d]{2}(:[\d]{2})?$/,
                "Formato hh:mm, hh:mm:ss"]
    };

    let compruebaValor = function(valor, tipo) {

        if( valor.trim() === "" ){
            return `${tipo} no puede estar vacío.`;
        }

        switch(tipo){
            case "youtube":
                return regex.youtube[0].test(valor)? "" : regex.youtube[1];

            case "correo":
                return regex.correo[0].test(valor)? "" : regex.correo[1];

            case "web":
                return regex.web[0].test(valor)? "" : regex.web[1];

            case "fecha":
                return regex.fecha[0].test(valor)? "" : regex.fecha[1];

            case "hora":
                return regex.hora[0].test(valor)? "" : regex.hora[1];

            default:
                return "Error: tipo no soportado.";
        }
    };

    return {
        compruebaValor: compruebaValor
    }
}();