$(document).ready(function(){
    $("button").click(function(){
        // hide method over p element
        $("p").hide();
    });

    // click method
    $("p").click(function(){
        $(this).hide();
    });

    // mouseenter method
    $("#p1").mouseenter(function(){
        alert("You enter on p1 element");
    });

    // mouseleave method
    // $("#p1").mouseleave(function(){
    //     alert("Bye! You now leave p1!");
    // });

    // hover method
    // $("#p1").hover(function(){
    //     alert("You entered p1!");
    // },
    // function(){
    //     alert("Bye! You now leave p1!");
    // });

    // focus method
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
        $(this).css("background-color", "green");
    });

    // on method, with this method you can handle many events onver a single element.
    $("span").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });
    // Full reference to JQuery event methods: https://www.w3schools.com/jquery/jquery_ref_events.asp
});