/**
 * Varios plugins
 * @author Álvaro García Fuentes
 */
{
    (function ($) {
        $.fn.ponBorde = function( opciones ) {

            let settings = $.extend({
                color: "red"
            }, opciones )

            return this.css("border", `10px solid ${settings.color}`);
        }

        $.fn.quitaBorde = function( ) {
            return this.css("border", "");
        }

        $.fn.pasarMayusculas = function( ) {
            return this.css( "text-transform", "uppercase" );
        }
    }(jQuery));

    $(document).ready( () => {
        $('#ponborde').click( () => $('#cuadro').ponBorde() );
        $('#quitaborde').click( () => $('#cuadro').quitaBorde() );
        $('#pasarmayusculas').click( () => $('#cuadro').pasarMayusculas( { color:"yellow" } ) );
    });
}