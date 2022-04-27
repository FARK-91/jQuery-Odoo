$(document).ready(function(){

    // CSS manipulating: addClass(), removeClass(), toggleClass(), css()
    $("#btn13").click(function(){
        $("h1.header1, h2.header2, p.test4").addClass("blue");
        $("div.div1").addClass("important");
        $("div.div2").addClass("blue important");
    });
    $("#btn14").click(function(){
        $("h1.header1, h2.header2, p.test4").removeClass("blue");
    });
    $("#btn15").click(function(){
        $("h1.header1, h2.header2, p.test4").toggleClass("blue");
    });

    $("#btn16").click(function(){
        $("p.test5").css({
            "background-color": "yellow",
            "font-size": "200%"
        });
    });

    $("#btn17").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div1").innerHeight()+ "</br>";
        txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
        txt += "Outer height of div: " + $("#div1").outerHeight();
        $("#div1").html(txt);
    });

    $("#btn18").click(function(){
        $("#div1").width(500).height(500);
    });
});