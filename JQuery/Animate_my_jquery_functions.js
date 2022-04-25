$(document).ready(function(){

    // Animation
    $("#animate").click(function(){
        $(".animate").animate({opacity: '0.4', height: '300px'}, "slow");
        $(".animate").animate({opacity: '0.8', width: '300px'}, "slow");
        $(".animate").animate({opacity: '0.4', height: '100px'}, "slow");
        $(".animate").animate({opacity: '0.8', width: '100px'}, "slow");
    });
    
    // Chain JQuery methods
    $("#chainButton").click(function(){
        $('#p1').css("color", "red").slideUp(2000).slideDown(2000);
    })

});