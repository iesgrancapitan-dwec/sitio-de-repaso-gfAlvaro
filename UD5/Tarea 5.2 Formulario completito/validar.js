/**
 * @name validar.js
 * Validación del formulario
 * @author Álvaro García Fuentes
 */

let Validar = function() {
 
    const regex = {
        textoObligatorio:
            [ /^[a-záéíóúñ\s]+$/i,
            "Deben ser letras." ],

        entero:
            [ /^[0-9]+$/,
            "Debe de ser un número entero" ],
            
        decimal:
            [ /^[0-9]+.[0-9]+$/,
            "Debe ser un número decimal separado por un punto: 0.03" ],

        correo:
            [ /^((\w){2,}\.)*((\w){2,})\@(\w){2,}\.(\w){2,3}(\.(\w){2,3})*$/i,
            "Formato de email no válido" ],
                
        url:
            [ /^http[s]?:\/\/([w]{3}\.)?[a-z]{3,}\.[a-z]{2,3}((\.|\/)?[a-z]{2,})?$/,
            "Error, formato correcto: https://www.google.es o http://www.google.es" ],

        fecha:
            [ /^([\d]{2})([\-\/\s]?)([\d]{2})([\-\/\s]?)([\d]{4})$/,
            "Formatos válidos: dd/mm/YYYY, dd mm YYYY, dd-mm-YYYY" ],
            
        dni: 
            [ /^(\d{8})[\s-]?([A-Z(^IÑOU)]$)/i,
            ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
                  'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
                  'K', 'E', 'T'],
            "Formato válido 12345678Z" ],

        telefono:
            [ /^(\(\+?\d{2,4}\))?([. ])?(\d{3})([. ])?(\d{3})([. ])?(\d{3})$/,
            "Error, formato correcto: Ejemplo 111222333" ]
    };
 
    let compruebaValor = (valor, tipo) => {

        if( valor.trim() === "" ){
            return `${tipo} no puede estar vacío`;
        }

        switch(tipo){
            case "textoObligatorio":
                return regex.textoObligatorio[0].test(valor)? "" : regex.textoObligatorio[1];

            case "entero":
                return regex.entero[0].test(valor)? "" : regex.entero[1];

            case "decimal":
                return regex.decimal[0].test(valor)? "" : regex.decimal[1];

            case "email":
                return regex.correo[0].test(valor)? "" : regex.correo[1];

            case "url":
                return regex.url[0].test(valor)? "" : regex.url[1];

            case "fecha":
                if( !(regex.fecha[0].test(valor)) ){
                    return regex.fecha[1];
                }

                let [, dia, , mes, , anyo] = regex.fecha[0].exec(valor);
                let fecha = new Date(`${dia},${mes},${anyo}`);

                return ( (parseInt(dia) === fecha.getDate())
                      && (parseInt(mes)-1 === fecha.getMonth())
                      && (parseInt(anyo) === fecha.getFullYear()) )? "" : "Fecha no existe";

            case "dni":
                try {
                    let [, numero, letra] = regex.dni[0].exec(valor);
                    return regex.dni[1][numero % 23] == letra.toUpperCase()? "" : "La letra introducida no es la correcta";
                } catch (error) {
                    return regex.dni[2];
                }

            case "telefono":
                return regex.telefono[0].test(valor)? "" : regex.telefono[1];

            default:
                return "Error: tipo no soportado";
        }
    };

    let compruebaRadio = (radios) => Array.from(radios).some((i) => i.checked)? "Seleccione una opción" : "";
    let compruebaSelect = (select) => (select.value == "0")? "Debes seleccionar una opción." : "";
    let compruebaCheck = (checkbox) => checkbox? "" : "Debes de hacer click";

    return {
        compruebaRadio: compruebaRadio,
        compruebaSelect: compruebaSelect,
        compruebaCheck: compruebaCheck,
        compruebaValor: compruebaValor
    }
}();
