/**
 * @name colorines.js
 * código con el primer ejercicio del examen
 * @author Álvaro García Fuentes
 */
{
    let divs = "";

    let editaParrafos = () => {
        let parrafos = document.querySelectorAll('p');

        parrafos[0].innerHTML += "Álvaro";
        parrafos[1].innerHTML += "García Fuentes";

        for(const parrafo of parrafos){
            parrafo.style.backgroundColor = "lightblue";
        }
    }

    let editaDivs = () => {
        const clases = ["rojo", "verde", "amarillo"];
        divs = document.querySelectorAll('div>div');

        for(const div of divs){
            div.className = clases[Math.floor(Math.random()*3)];
            div.addEventListener('click', cliquea);
        };
    }

    let cliquea = function() {

        this.innerHTML = this.className;
        this.className = "";
        this.removeEventListener('click', cliquea);

        // Se comprueba si todos los divs no tienen clase
        for(const div of divs){
            if(div.className != ""){
                return;
            }
        }

        //si ningún div tiene clase se duplica el grid
        let grid = document.getElementsByClassName('grid')[0].cloneNode(true);
        document.body.appendChild(grid);
    }

    document.addEventListener('DOMContentLoaded', () => {
        editaParrafos();
        editaDivs();
    });
}