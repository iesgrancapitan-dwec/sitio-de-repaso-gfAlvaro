/**
 * @name main.js
 * código para tratar las entradas del cuestionario mediante
 * funciones que hacen uso de RegExp y String
 * @author Álvaro García Fuentes
 */
{
    // array constante para usar en la función dni
    const Letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
                    'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    /**
     * @name capitaliza
     * capitaliza una frase
     */
    let capitaliza = () => {
        document.getElementById("capitaliza")
        .parentNode
        .nextSibling
        .innerHTML = document.getElementById("capitaliza").value
                     .trim()
                     .toLowerCase()
                     .replace( /\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())) );
    }

    /**
     * @name invierte
     * transforma una frase cambiando las mayúsculas por minúsculas y viceversa.
     */
    let invierte = () => { 
        [ ...document.getElementById("invierte").value.trim() ].forEach( elemento => {
            /[A-Z]/.test(elemento)?
                document.getElementById("invierte")
                .parentNode.nextSibling
                .innerHTML += elemento.toLowerCase()
                
            : /[a-z]/.test(elemento)?
                document.getElementById("invierte")
                .parentNode.nextSibling
                .innerHTML += elemento.toUpperCase()
            
            :
                document.getElementById("invierte")
                .parentNode.nextSibling
                .innerHTML += elemento;
        });    
    }

    /**
     * @name camelCase
     * Transforma una frase en una sola palabra con formato camelCase
     */
    let camelCase = () => {
        document.getElementById("camelcase")
        .parentNode.nextSibling
        .innerHTML = document.getElementById("camelcase").value
                    .replace( /(\s)(\w)/g, (str) => str[1].toUpperCase() );
    }

    /**
     * @name sinCamelCase
     * transforma una palabra en formato camelCase en una frase
     */
    let sinCamelCase = () => {
        document.getElementById("sincamelcase")
        .parentNode.nextSibling
        .innerHTML = document.getElementById("sincamelcase").value
                     .replace(/[A-Z]/g, (str) => " " + str[0].toLowerCase());    
    }

    /**
     * @name finaliza
     * comprueba si una frase finaliza con una palabra, dadas ambas
     */
    let finaliza = () => {
        document.getElementById("finaliza").value
        .endsWith(document.getElementById("finaliza2").value)?
            document.getElementById("finaliza")
            .parentNode.nextSibling
            .innerHTML = "Cierto"
        : 
            document.getElementById("finaliza")
            .parentNode.nextSibling
            .innerHTML = "Falso";     
    }

    /**
     * @name comienza
     * comprueba si una frase comienza con una palabra, dadas ambas
     */
    let comienza = () => {
        document.getElementById("comienza").value.
        startsWith(document.getElementById("comienza2").value)?
            document.getElementById("comienza2")
            .parentNode.nextSibling
            .innerHTML = "Cierto"
        :
            document.getElementById("comienza2")
            .parentNode.nextSibling
            .innerHTML = "Falso";     
    }

    /**
     * @name dni
     * valida un dni
     */
    let dni = () => {
        try {
            let [, numero, letra] = /^(\d{8})[ -]?([A-Z(^IÑOU)]$)/i
                                    .exec(document.getElementById("dni").value);

            Letras[numero % 23] == letra.toUpperCase()?
                document.getElementById("dni")
                .parentNode.nextSibling
                .innerHTML = "válido" 
            :
                document.getElementById("dni")
                .parentNode.nextSibling
                .innerHTML = "inválido";
        } catch {
            document.getElementById("dni")
            .parentNode.nextSibling
            .innerHTML = "Error, formato no válido";
        }
    }

    /**
     * @name matriculas
     * valida un grupo de mátriculas dadas
     */
    let matriculas = () => {    
        document.getElementById("matriculas")
        .parentNode.nextSibling
        .innerHTML = [...document.getElementById("matriculas").value
                         .matchAll( /[\d]{4}[\s-]?[B-DF-HJ-NPR-TV-Z]{3}/gi )].join();
    }

    /**
     * @name codigosPostales
     * valida un grupo de códigos postales dados
     */
    let codigosPostales = () => {
        document.getElementById("codigospostales")
        .parentNode.nextSibling
        .innerHTML = [...document.getElementById("codigospostales").value
                         .matchAll( /([0-4]\d|5[0-2])(\d{2}[1-9]|\d[1-9]\d|[1-9]\d{2})/gi )];
    }

    /**
     * @name mac
     * valida una dirección mac.
     */
    let mac = () => {
        /^([\dA-Fa-f]{2}[: -]){5}([\dA-Fa-f]{2})$/
        .test(document.getElementById("mac").value)?
            document.getElementById("mac")
            .parentNode.nextSibling
            .innerHTML = "válido"
        :
            document.getElementById("mac")
            .parentNode.nextSibling
            .innerHTML = "inválido";    
    }

    /**
     * @name ip
     * valida una dirección ip.
     */
    let ip = () => {
        /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/
        .test(document.getElementById("ip").value)?
            document.getElementById("ip")
            .parentNode.nextSibling
            .innerHTML = "válido"
        :
            document.getElementById("ip")
            .parentNode.nextSibling
            .innerHTML = "inválido";    
    }

    // Cuando se carga la página añade sus eventos
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("capitaliza").addEventListener( 'blur', capitaliza );
        document.getElementById("invierte").addEventListener( 'blur', invierte );
        document.getElementById("camelcase").addEventListener( 'blur', camelCase );
        document.getElementById("sincamelcase").addEventListener( 'blur', sinCamelCase );
        document.getElementById("finaliza2").addEventListener( 'blur', finaliza );
        document.getElementById("comienza2").addEventListener( 'blur', comienza );
        document.getElementById("dni").addEventListener( 'blur', dni );
        document.getElementById("matriculas").addEventListener( 'blur', matriculas );
        document.getElementById("codigospostales").addEventListener( 'blur', codigosPostales );
        document.getElementById("mac").addEventListener( 'blur', mac );
        document.getElementById("ip").addEventListener( 'blur', ip );
    });
}