$(document).ready(function (){
    

    $('.nav-bar').hide();
    $('.footer-nav-bar').hide();

    function navbar() {
        $('.menu').click(function() {
            $('.nav-bar').slideDown();
        });
    }

    navbar();
   
   
});