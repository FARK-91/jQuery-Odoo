$(document).ready(function(){

    // Get Method using text(), html(), val(), attr()
    $("#btn1").click(function(){
        alert("Text: " + $(".test").text());
    });
    $("#btn2").click(function(){
        alert("Html: " + $(".test").html());
    });
    $("#btn3").click(function(){
        alert("Value: " + $("input.test4").val());
    });
    $("#btn4").click(function(){
        alert("Attribute: " + $("#w3s").attr("href"));
    });

    // Set Method using text(), html(), val(), attr()
    // $("#btn5").click(function(){
    //     $("#test1").text("Hello world!");
    // });
    // $("#btn6").click(function(){
    //     $("#test2").html("<b>Hello world!</b>");
    // });
    $("#btn7").click(function(){
        $("#test3").val("Sponge Bob");
    });
    $("#btn8").click(function(){
        $("#attrTest").attr({
            "href": "https://www.w3schools.com/jquery/",
            "title": "W3Schools jQuery Tutorial"
        });
    });

    // Callbacks using text(), html(), val(), attr()
    $("#btn5").click(function(){
        $("#test1").text(function(index, originalValue){
            return "Old text: " + originalValue + " New text: Hello world! (index: " + index + ")";
        });
    });
    $("#btn6").click(function(){
        $("#test2").html(function(index, originalValue){
            return "Old html: " + originalValue + " New html: Hello <b>world!</b> (index: " + index + ")";
        });
    });

});