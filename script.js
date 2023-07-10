// menu button-----------------------------
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function(){
    navlist.classList.toggle("active");
})
window.onscroll =()=>{
    navlist.classList.remove("active")
};


// typed text-----------------------------
var typed = new Typed(".input",{
    strings:["Frontend Developer.","Designer.",],
    typeSpeed:70,
    backSpeed:60,
    loop:true
})


// preloader-----------------------------
var loader= document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display="none"
})



// shrinking navbar-------------------------------------

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop()<=40){
            $('header').removeClass('scroll_navbar');
            $('.navlist a').css("color",'');
            $('header i').css("color",'')


            

        }
        else{
            $('header').addClass('scroll_navbar');
            $('.navlist a').css("color",'black');
            $('header i').css("color",'black');
           
          
            
        }
    })
})





