$(document).ready(function(){

    // Add Method using append(), prepend(), after(), before()
    $("#btn9").click(function(){
        $(".test3").append(" <b>Appended text</b>.");
    });
    $("#btn10").click(function(){
        $("#list").append("<li>Appended item</li>");
    });
    $("#btn11").click(function(){
        $(".test3").prepend("<b>Prepended text</b> ");
    });
    $("#btn12").click(function(){
        $("#list").prepend("<li>Prepended item</li>");
    });

    // For after and before methods the mechanism is the same

    // remove() and empty() Methods

    // $("button").click(function(){
    //     $("#div1").remove();
    // });

    // // El metodo remove puede implementar selectores de clases para apuntar a un elemento en especifico.
    // $("button").click(function(){
    //     $("p").remove(".test, .demo");
    // });

    // $("button").click(function(){
    //     $("#div1").empty();
    // });

});