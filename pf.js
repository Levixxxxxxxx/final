$("body").css({
    "margin":"0"
           
})

$("a").css({
    "text-decoration":"none",
 "color":"white"
})

$("li").css({
  "list-style-type": "none"
})

$("#contain").css({
    "display":"grid",
    "grid-template-columns":"12fr",
    "grid-template-areas":' "header" "block1"  "block2"  "block3"  "footer" '
                             
           
})


$("header").css({
    "grid-area":"header",
    "display":"grid",
    "grid-template-columns":"4fr 8fr",
    "grid-template-areas": '"head1 head2"',
     "background-color": "rgb(98, 98, 98)",
     "font-family":"Raleway"
})


$(".head1").css({
    "grid-area":"head1",
})

$(".head2").css({
    "grid-area":"head2",
    "padding-top":"20px"
    
})


$(".block1").css({
    "grid-area":"block1",
    "display":"grid",
     "text-align":"center",
     "font-size":"40px",
     "background-color": "rgb(98, 98, 98)",
     "color":"white",
     "font-family":"Open Sans"

})

$("#first").css({
     "font-size":"15px"
    })

$(".block2").css({
    "grid-area":"block2",
    "display":"grid",
    "grid-template-columns":"4fr 4fr 4fr",
    "grid-template-areas": '"b1 b2 b3"',
     "background-color": "rgb(236, 237, 237)",
     "text-align":"center",
     "font-family":"Raleway"
})

$(".b1").css({
    "grid-area":"b1",
})

$(".b2").css({
    "grid-area":"b2",
    
})

$(".b3").css({
    "grid-area":"b3",
    
})

$(".block3").css({
    "grid-area":"block3",
     "background-color": "white",
     "margin-bottom":"60px",
     "font-family":"Raleway"
})

$("#sec").css({
    "font-size":"35px",
    "color":" #da491c",
    "margin-left":"40px",
    "font-family":"Raleway"
   })

   $("#sec2").css({
    "margin-left":"40px"
   })

   $(".img").css({
    "display":"grid",
    "grid-template-columns":"3fr 3fr 3fr 3fr",
    "grid-template-areas": '"c1 c2 c3 c4"',
    "width":"1300px",
    "margin":"auto"
})
$(".c1").css({
    "grid-area":"c1",
})

$(".c2").css({
    "grid-area":"c2",
    
})

$(".c3").css({
    "grid-area":"c3",
    
})

$(".c4").css({
    "grid-area":"c4",
    
})

$("footer").css({
    "grid-area":"footer",

     "background-color": "rgb(236, 237, 237)",
     "text-align":"center",
     "font-family":"Raleway"
})

$(".sec4").css({
    "margin-left":"30px",
    "color":" #da491c"
})

$(".sec5").css({
    "color":" #da491c",
})

$(".sec6").css({
    "font-family":"Raleway"
})