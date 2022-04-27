/**
 * Varios plugins
 * @author Álvaro García Fuentes
 */
{
    (function ($) {
        $.fn.desaparece = function( efecto ) {
            return (efecto == "fadeout")? this.fadeOut()
                   :  (efecto == "hide")? this.hide()
                                        : this.hide();
        }

        $.fn.aparece = function( ) {
            return this.show();
        }

        $.fn.amarillea = function( opciones ) {

                let settings = $.extend({
                    color: "green"
                }, opciones );

            return this.css( "background-color", settings.color );
        }
    }(jQuery));

    $(document).ready( () => {
        $('#oculta').click( () => $('#cuadro').desaparece( "fadeout" ) );
        $('#muestra').click( () => $('#cuadro').aparece() );
        $('#amarillea').click( () => $('#cuadro').amarillea( { color:"yellow" } ) );
    });
}