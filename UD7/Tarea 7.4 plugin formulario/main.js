/**
 * código para el plugin del formulario
 * @author Álvaro García Fuentes
 */
{
    let Tester = (texto, tipo) =>
        (tipo == "nombre")? /[a-z]{3,}( [a-z]+)*/i.test(texto) :
        (tipo == "correo")? /[a-z]{2,}(.[a-z]{2,})*@[a-z]+.[a-z]+/i.test(texto) :
        false;

    $.fn.formulario = function( opciones = {} ){

        opciones.color ??= "#ff0000",
        opciones.backgroundcolor ??= "#ffDEDE",
        opciones.border ??= "2px solid #ffD3D7"

        let valida = function(){
            if( !Tester($(this).val(), $(this).data("tipo")) ){
                $(this).css("color", opciones.color);
                $(this).css("background-color", opciones.backgroundcolor);
                $(this).css("border", opciones.border);
                if($(this).data("tipo") == "nombre"){
                    $(this).parent().next().html("Campo obligatorio y debe tener mínimo tres caracteres.");
                } else {
                    $(this).parent().next().html("Campo obligatorio y debe ser de la forma: miCorreo@correo.com");
                }
            }
        };

        let restaura = function(){
            $(this).parent().next().html("");
            $(this).css("color", '');
            $(this).css("background-color", '');
            $(this).css("border", '');
        }

        let envia = function(event){
            event.preventDefault();

            $("input[type=text]").each( function(){ $(this).trigger('blur') } );

            let valido = false;
            $('span').each( valido = function(){ return $(this) == "" });

            console.log(valido);
            if(valido){
                $("#mensaje").val( $("#nombre") + " " + $("#apellido") + " " + $("#correo") );
            }
        };

        $("input[type=text]").each( function(){ $(this).blur(valida)} );
        $("input[type=text]").each( function(){ $(this).focus(restaura)} );
        $("#envia").submit(envia);
    }

    $(document).ready(function(){
        $("form").formulario();
    });
}