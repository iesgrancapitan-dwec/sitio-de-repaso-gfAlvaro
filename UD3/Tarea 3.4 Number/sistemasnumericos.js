/**
 * @name sistemasnumericos.js
 * código con funciones para cambiar bases de números
 * @author Álvaro García Fuentes
 */
{
    let desdeDecimal = (evt) => {
        evt.preventDefault();
        let decimalEntrada = document.getElementById("decimal").value;
        let binario = parseInt(decimalEntrada).toString(2);
        let octal = parseInt(decimalEntrada).toString(8);
        let hexadecimal = parseInt(decimalEntrada).toString(16);

        document.getElementById("binario").value = binario;
        document.getElementById("octal").value = octal;
        document.getElementById("hexadecimal").value = hexadecimal;
    }

    let desdeBinario = (evt) => {
        evt.preventDefault();
        let binarioEntrada = document.getElementById("binario").value;
        let decimal = parseInt(binarioEntrada, 2).toString(10);
        let octal = parseInt(binarioEntrada, 2).toString(8);
        let hexadecimal = parseInt(binarioEntrada, 2).toString(16);

        document.getElementById("decimal").value = decimal;
        document.getElementById("octal").value = octal;
        document.getElementById("hexadecimal").value = hexadecimal;
    }

    let desdeOctal = (evt) => {
        evt.preventDefault();
        let octalEntrada = document.getElementById("octal").value;
        let binario = parseInt(octalEntrada, 8).toString(2);
        let decimal = parseInt(octalEntrada, 8).toString(10);
        let hexadecimal = parseInt(octalEntrada, 8).toString(16);

        document.getElementById("binario").value = binario;
        document.getElementById("decimal").value = decimal;
        document.getElementById("hexadecimal").value = hexadecimal;
    }

    desdeHexadecimal = (evt) => {
        evt.preventDefault();
        let hexadecimalEntrada = document.getElementById("hexadecimal").value;
        let binario = parseInt(hexadecimalEntrada, 16).toString(2);
        let octal = parseInt(hexadecimalEntrada, 16).toString(8);
        let decimal = parseInt(hexadecimalEntrada,16).toString(10);

        document.getElementById("binario").value = binario;
        document.getElementById("octal").value = octal;
        document.getElementById("decimal").value = decimal;
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("desdedecimal").addEventListener( 'click', desdeDecimal );
        document.getElementById("desdebinario").addEventListener( 'click', desdeBinario );
        document.getElementById("desdeoctal").addEventListener( 'click', desdeOctal );
        document.getElementById("desdehexadecimal").addEventListener( 'click', desdeHexadecimal );
        document.getElementById("atras").addEventListener( 'click', () => { history.back() });
    });
}