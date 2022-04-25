$(document).ready(function(){

    // hide - show method
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });

    // hide - show method with speed parameter
    $("#hide1").click(function(){
        $("h3").hide(1000);
    });
    $("#show1").click(function(){
        $("h3").show(1000);
    });

    // toggle method to hide and show elements
    $("#toggle").click(function(){
        $("span").toggle("slow");
    });

    // There are others effects methods we can implement
    // https://www.w3schools.com/jquery/jquery_fade.asp

    // jQuery Effects - Sliding
    $('#flip').click(function() {
        // $("#panel").slideDown();
        // $("#panel").slideUp();
        $("#panel").slideToggle();
    })

});