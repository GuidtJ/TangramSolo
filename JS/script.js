var tangram = document.querySelector(".tangram");

var button_basic = document.querySelector(".button--basic");

var button_devine = document.querySelector(".button--teeShirt");

var button_figure3 = document.querySelector(".button--figure3");


button_basic.addEventListener("click",function(){
    tangram.classList.remove("button--teeShirt");
    tangram.classList.add("tangram--basic");
    tangram.classList.remove("button--figure3");
})

   

   button_devine.addEventListener("click",function(){
        tangram.classList.add("button--teeShirt");
        tangram.classList.remove("tangram--basic");
        tangram.classList.remove("button--figure3");

     })

     button_figure3.addEventListener("click",function(){
        tangram.classList.add("button--figure3");
        tangram.classList.remove("tangram--teeShirt");
        tangram.classList.remove("button--basic");


     })

    // button_figure3.onclick = function() {
    // 	tangram.className =
    // tangram.className.replace(/tangram--(\S*)/,'button--figure3');
    // };

     //   button_devine.onclick = function() {
    //   	tangram.className =
    //   tangram.className.replace(/tangram--(\S*)/,'button--teeShirt');
    //   };


    