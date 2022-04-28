$(document).ready(function(){

    // Ancestors: parent(), parents(), parentsUntil()
    $("span.child").parent().css({"color": "red", "border": "2px solid red"});
    // For parents() method it returns all ancestors linked, using is equal to single parent() method

    // Decendants: childre(), find()
    $("div.descendants").children().css({"color": "red", "border": "2px solid red"});
    // find() method will select the last children elements on every decendant group.

    // Siblins: siblings(), next(), nextAll(), prev(), prevAll()
    // $("h2.h2").siblings().css({"color": "red", "border": "2px solid red"});
    // we can use a parameter like this siblings("p")

    $("h2.h2").next().css({"color": "red", "border": "2px solid red"});
    // nextAll() returns all next siblings elements

    // The prev(), prevAll() and prevUntil() methods work just like the methods above
    // with reverse functionality

    // Filters  first(), last(), eq(), filter() and not()
    $("div.test7").first().css("background-color", "yellow");
    $("div.test8").last().css("background-color", "yellow");
    $("p").filter(".intro").css("background-color", "yellow");
    // $("p").not(".intro").css("background-color", "yellow");
    
});