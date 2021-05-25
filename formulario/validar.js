/**
 * @name validar.js
 * Validación del formulario
 * @author Álvaro García Fuentes
 */
{
    let inputsErroneos = [];

    let Validar = (function() {
 
        const regex = {
            textoObligatorio:
                [ /^([A-ZÁÉÍÓÚÑ]){1}([a-zñáéíóú])+$/i,
                "Deben ser letras." ],

            entero:
                [ /^[0-9]{1,}$/,
                "Debe de ser un número entero" ],
            
            decimal:
                [ /^[0-9]{1,},[0-9]{1,}$/,
                "Debe ser un número decimal separado por un punto: 0.03" ],

            correo:
                [ /^((\w){2,}\.)*((\w){2,})\@(\w){2,}\.(\w){2,3}(\.(\w){2,3})*$/i,
                "Formato de email no válido" ],
                
            url:
                [ /^http[s]?:\/\/([w]{3}\.)?[a-z]{3,}\.[a-z]{2,3}((\.|\/)?[a-z]{2,})?$/,
                "Error, formato correcto: https://www.google.es o http://www.google.es" ],

            fecha:
                [ /^(\d{2})([-/]?)(\d{2})(\2)(\d{4})$/,
                "Formatos válidos: dd/mm/YYYY, dd mm YYYY, dd-mm-YYYY" ],
            
            dni: 
                [ /^(\d{8})[ -]?([A-Z(^IÑOU)]$)/i,
                ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
                      'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
                      'K', 'E', 'T'],
                "Formato válido 12345678Z" ],

            telefono:
                [ /^(\(\+?\d{2,4}\))?([. ])?(\d{3})([. ])?(\d{3})([. ])?(\d{3})$/,
                "Error, formato correcto: Ejemplo 111222333" ]
        };
 
        let compruebaValor = function(valor, tipo) {

            if( valor.trim() != "" ){
                switch(tipo){
                case "textoObligatorio":
                    if( !regex.textoObligatorio[0].test(valor) )
                        return regex.textoObligatorio[1];
                    break;

                case "entero":
                    if( !regex.entero[0].test(valor) )
                        return regex.entero[1];
                    break;

                case "decimal":
                    if( !regex.decimal[0].test(valor) )
                        return regex.decimal[1];
                    break;

                case "email":
                    if( !regex.correo[0].test(valor) )
                        return regex.correo[1];
                    break;

                case "url":
                    if( !regex.url[0].test(valor) )
                        return regex.url[1];
                    break;

                case "date":
                    if( !regex.fecha[0].test(valor) ){
                        return regex.fecha[1];                    
                    } else {
                        let [, dia, , mes, , anyo] = regex.fecha[0].exec(valor);
                        let fecha = new Date(`${mes}/${dia},${anyo}`);

                        if( (parseInt(dia) !== fecha.getDate())
                         || (parseInt(mes)-1 !== fecha.getMonth())
                         || (parseInt(anyo) !== fecha.getFullYear()) ){
                            return "Fecha no existe";
                        }
                    }
                    break;

                case "dni":
                    try {
                        let [, numero, letra] = regex.dni[0].exec(valor);
                        if( !regex.dni[1][numero % 23] == letra.toUpperCase() )
                            return "La letra introducida no es la correcta";
                    } catch (error) {
                        return regex.dni[2];
                    }
                    break;

                case "telefono":
                    if( !regex.telefono[0].test(valor) )
                        return regex.telefono[1];
                    break;
                }

                return "";
            
            } else
                return `El ${tipo} no puede estar vacío`;
        }
 
        let compruebaRadio = function(radios) {

            if( Array.from(radios).some((i) => i.checked) )
                return "Seleccione una opción";
            
            return "";
        }
 
        let compruebaSelect = function(select) {

            if( "".includes( select.value ) )
                return "Debes seleccionar una opción.";

            return "";
        }
 
        let compruebaCheck = function(checkbox) {
            
            if(!checkbox)
                return "Debes de hacer click";
            
            return "";
        }

        return {
            compruebaRadio: compruebaRadio,
            compruebaSelect: compruebaSelect,
            compruebaCheck: compruebaCheck,
            compruebaValor: compruebaValor
        }
    })();
}