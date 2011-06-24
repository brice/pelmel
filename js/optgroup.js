(function($) {
    $.fn.hideOptionGroup = function() {
        $(this).hide();
        $(this).children().each(function(){
            $(this).attr("disabled", "disabled").removeAttr("selected");
        });
        $(this).appendTo($(this).parent());

    }

    $.fn.showOptionGroup = function() {
        $(this).show();
        $(this).children().each(function(){
            $(this).removeAttr("disabled" );
        });
        $(this).prependTo($(this).parent());
        $(this).parent().animate({scrollTop:0},0);
    }

});

$(document).ready(function(){

    $('#post').live('change', function(){
        var label = $(this).val();
        $('#step optgroup').each(function(){
            $(this).hide();
            $(this).children().hide();
            $(this).attr("disabled", "disabled").removeAttr("selected");
        });
        // $('#step optgroup').hide();

        $('#step optgroup[label='+label+']').show();
        $('#step optgroup[label='+label+']').each(function(){
            $(this).show();
            $(this).children().show();
            $(this).removeAttr("disabled");
            $(this).prependTo($(this).parent());
            $(this).parent().animate({scrollTop:0},0);
        });

        $("#step")[0].selectedIndex = 0;
    });
});
