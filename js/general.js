$(document).ready(function (){
    

    $('.footer-nav-bar').hide();

    // DEsktop

    
   function checkSize() {
       if($('.nav-bar').css('flex-direction') == 'row') {
           $('.nav-bar').show();
           $('.header-info').show();
           $('.dropdown').hide();
       } else {
           $('.dropdown').show();
       }
   }

   checkSize();
    
    
   


   
});