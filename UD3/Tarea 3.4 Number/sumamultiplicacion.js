/**
 * @name sumamultiplicacion.js
 * código para sumar y multiplicar dos numeros
 * @author Álvaro García Fuentes
 */
{
    let sumarMultiplicar = (evt) => {
        evt.preventDefault();
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let suma = parseInt(num1) + parseInt(num2);
        let multiplicacion = num1 * num2;

        document.getElementById("suma").value = suma;
        document.getElementById("multiplicacion").value = multiplicacion;
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('sumarmultiplicar').addEventListener( 'click', sumarMultiplicar );
        document.getElementById('atras').addEventListener( 'click', () => { history.back() });
    });
}