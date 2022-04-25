$(document).ready(function(){

    // text(), html(), val(), attr() methods
    $("#btn1").click(function(){
        alert("Text: " + $(".test").text());
    });
    $("#btn2").click(function(){
        alert("Html: " + $(".test").html());
    });
    $("#btn3").click(function(){
        alert("Value: " + $("input").val());
    });
    $("#btn4").click(function(){
        alert("Attribute: " + $("#w3s").attr("href"));
    });

});