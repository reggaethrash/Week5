$(document).ready(function(){
    $("h1").click(function(){
        $("p").toggle();
    }),
    $("#btn1").hover(function(){
        $("#box1").slideToggle("slow");
    }),

    $("#input1").mouseenter(function(){
        alert("Mouse Entered");
    })

    $("#input1").mouseleave(function(){
        alert("Mouse Leave");
    }),

    $("#btn2").click(function(){
        $("#box2").fadeToggle("slow");
    }),

    $("a").hover(function(){
        $(this).addClass("bg-blue");
    }),

    $(".input1").focus(function(){
        $(this).addClass("bg-blue")
    }),
    
    $(".input1").blur(function(){
        $(this).removeClass("bg-blue")
    }),

    $("#boxx1").fadeIn(1000,function(){
        $("#boxx2").fadeIn(1000,function(){
            $("#boxx3").fadeIn(1000,function(){
                $("#boxx4").fadeIn(1000)
            })
        })
    })

    
})