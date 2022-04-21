/**
 * Tres en raya
 * @author Álvaro García Fuentes
 */

let casillas;
let turno;
const letra = ['O', 'X'];

let juega = () => {
    casillas.each( function(){ 
        $(this).on( 'click', pulsaCasilla );
        $(this).html("");
    });
}

let pulsaCasilla = function(){
    $(this).html( letra[turno % 2] );
    $(this).off( 'click' );
    $(this).css('background-color', '#cccc');
    comprueba();
}

let comprueba = () => {

    let k = turno % 2;
    let mensaje = "EMPATE";

    for(let n = 0; n < 2; n++){
        if( (casillas.eq(0).html() == letra[k] && casillas.eq(1).html() == letra[k] && casillas.eq(2).html() == letra[k])
         || (casillas.eq(3).html() == letra[k] && casillas.eq(4).html() == letra[k] && casillas.eq(5).html() == letra[k])
         || (casillas.eq(6).html() == letra[k] && casillas.eq(7).html() == letra[k] && casillas.eq(8).html() == letra[k])
         || (casillas.eq(0).html() == letra[k] && casillas.eq(3).html() == letra[k] && casillas.eq(6).html() == letra[k])
         || (casillas.eq(1).html() == letra[k] && casillas.eq(4).html() == letra[k] && casillas.eq(7).html() == letra[k])
         || (casillas.eq(2).html() == letra[k] && casillas.eq(5).html() == letra[k] && casillas.eq(8).html() == letra[k])
         || (casillas.eq(0).html() == letra[k] && casillas.eq(4).html() == letra[k] && casillas.eq(8).html() == letra[k])
         || (casillas.eq(6).html() == letra[k] && casillas.eq(4).html() == letra[k] && casillas.eq(2).html() == letra[k]) ){
            mensaje = `${letra[k]} GANA`;
            
        } else {
              casillas.each( function(){
                  if( $(this).html() == "" ){
                        mensaje = "";
                        return false;
                  }
              });
        }
    }

    if(mensaje != ""){
        muestraMensaje(mensaje);
        console.log(`${turno} turnos.`);
        if(mensaje != ""){
            casillas.each( function(){
                $(this).off('click');
            });
        }
    } else {
        turno++;
        muestraMensaje();
    }
}

let muestraMensaje = (mensaje = "") => {
    $('#info').html(
        (mensaje != "")? `${mensaje} <br><button class="reiniciar">Reiniciar</button><button id="salir">Salir</button><br>`
        : (turno == 1)?  `Presione cualquier casilla para iniciar: ${letra[turno % 2]} Empieza <br>`
        :                `${letra[turno % 2]} continúa <br>`
    );
}

$(document).ready( () => {
    turno = 1;
    casillas = $(".casilla");
  
    juega();
    muestraMensaje();
    $(".reiniciar").on( "click", () => location.reload() );
    $(".salir").on( "click", () => window.close() );
});