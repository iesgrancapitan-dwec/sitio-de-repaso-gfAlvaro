/**
 * @name areacirculo.js
 * código con función para calcular el área de un círculo dado su radio
 * @author Álvaro García Fuentes
 */
{
    let areaCirculo = (evt) => {
        evt.preventDefault();
        let radio = document.getElementById("radio").value;
        let area = parseFloat(Math.PI * Math.pow(radio, 2)).toFixed(4);
        document.getElementById("respuesta").value = area;
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("area").addEventListener( 'click', areaCirculo );
        document.getElementById("atras").addEventListener( 'click', () => { history.back() });
    });
}