/**
 * @name validar.js
 * Validación del formulario
 * @author Álvaro García Fuentes
 */
{
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
                [ /^(\d{8})[ -]?([A-Z(^IÑOU)]$)/i, ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
                 "Formato válido 12345678Z" ],

            telefono:
                [ /^(\(\+?\d{2,4}\))?([. ])?(\d{3})([. ])?(\d{3})([. ])?(\d{3})$/,
                "Error, formato correcto: Ejemplo 111222333" ]
        };
 
        export default compruebaValor = function(valor, tipo) {
            let salida = "";
            (valor.trim() != "")?
                (
                (tipo == "text")?
                    ( regex.textoObligatorio[0].test(valor)? null : salida = regex.textoObligatorio[1] ) :

                (tipo == "entero")?
                    ( regex.entero[0].test(valor)? null : salida = regex.entero[1] ) :

                (tipo == "decimal")?
                    ( regex.decimal[0].test(valor)? null : salida = regex.decimal[1] ) :

                (tipo == "email")?
                    ( regex.correo[0].test(valor)? null : salida = regex.correo[1] ) :
            
                (tipo == "url")?
                    ( regex.url[0].test(valor)? null : salida = regex.url[1] ) :

                (tipo == "date")?
                    (!regex.fecha[0].test(valor)? salida = regex.fecha[1] :
                                                salida = function() {
                                                    let salida = "";
                                                    let [, dia, , mes, , anyo] = regex.fecha[0].exec(valor);
                                                    let fecha = new Date(`${mes}/${dia},${anyo}`);
                                                    (parseInt(dia) !== fecha.getDate() || 
                                                    parseInt(mes) - 1 !== fecha.getMonth() || 
                                                    parseInt(anyo) !== fecha.getFullYear())?
                                                        salida = "Fecha no existe" : null;

                                                    return salida;
                                                }) :

                (tipo == "dni")?
                    salida = function() {
                        let salida = "";
                        try {
                            let [, numero, letra] = regex.dni[0].exec(valor);
                            (regex.dni[1][numero % 23] == letra.toUpperCase())? null
                                                                              : salida = "La letra introducida no es la correcta";
                        } catch (error) {
                            salida = regex.dni[2];
                        }
                        return salida;
                    } :

                (tipo == "telefono")?
                    ( regex.telefono[0].test(valor)? null : salida = regex.telefono[1] ) : null
                ) :

                salida =`El ${tipo} no puede estar vacío`;

            return salida;
        }
 
        export default compruebaRadio = function(radios) {

            if( Array.from(radios).some((i) => i.checked) )
                return "Seleccione una opción";
            
            return "";
        }
 
        export default compruebaSelect = function(select) {

            if( "".includes( select.value ) )
                return "Debes seleccionar una opción.";

            return "";
        }
 
        export default compruebaCheck = function(checkbox) {
            
            if(!checkbox)
                return "Debes de hacer click";
            
            return "";
        }
    })();

}