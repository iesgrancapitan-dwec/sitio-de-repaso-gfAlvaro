/**
 * @name ejercicio4.js
 * El tiempo es oro. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"
 *  (usa timing events del objeto window)
 * @author Álvaro García Fuentes
 */
{
    let reloj;

    let muestraReloj = () => {
        let fecha = new Date();
        let horas = new String(fecha.getHours());
        let minutos = new String(fecha.getMinutes());
        let segundos = new String(fecha.getSeconds());

        (horas.length == 1)?    horas    = "0" + horas : null;
        (minutos.length == 1)?  minutos  = "0" + minutos : null;
        (segundos.length == 1)? segundos = "0" + segundos : null;

        reloj.innerHTML = `${horas}:${minutos}:${segundos} h`;
    }

    document.addEventListener("DOMContentLoaded", () => {
        reloj = document.getElementById("ejercicio4");
        setInterval(muestraReloj, 1000);
        document.getElementById("atras").addEventListener('click', () => { history.back() });
    });
}

