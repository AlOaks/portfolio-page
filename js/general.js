$(document).ready(function (){
    
    var battleborn = new Audio ('../assets/Battleborn.mp3');
    var nightsky = new Audio ('../assets/NightSky.mp3');
    var tragic = new Audio ('../assets/tragic.mp3');

    $('.fa-pause').hide();


    $('.p1').click(function(){
        $('.p1').hide();
        $('.pa1').show();
        $('.pa2').hide();
        $('.p2').show();
        $('.p3').show();
        $('.pa3').hide();
        battleborn.play();
        nightsky.pause();
        tragic.pause();
    });

    $('.pa1').click(function(){
        $('.pa1').hide();
        $('.p1').show();
        battleborn.pause();
    });

    $('.p2').click(function(){
        $('.p2').hide();
        $('.pa2').show();
        $('.pa1').hide();
        $('.p1').show();
        $('.p3').show();
        $('.pa3').hide();
        nightsky.play();
        battleborn.pause();
        tragic.pause();
    });

    $('.pa2').click(function(){
        $('.pa2').hide();
        $('.p2').show();
        nightsky.pause();
        
    });

    $('.p3').click(function(){
        $('.p3').hide();
        $('.pa3').show();
        $('.pa1').hide();
        $('.p1').show();
        $('.pa2').hide();
        $('.p2').show();
        tragic.play();
        battleborn.pause();
        nightsky.pause();
    });

    $('.pa3').click(function(){
        $('.pa3').hide();
        $('.p3').show();
        tragic.pause();
        
    });


    // DESKTOP



    function checkSize() {

        $('.fa-desktop').click(function(){
            $('.hiddenw').css('visibility', 'visible');
            $('.hidden').css('visibility', 'hidden');

        });

        $('.fa-headphones').click(function(){
            $('.hidden').css('visibility', 'visible');
            $('.hiddenw').css('visibility', 'hidden');
        
        });
        
    }

    function hiding() {

    }

    hiding();
    checkSize();

    $('.fa-envelope').click(function(){
        $('.email').css('font-size', '20px');
    });

    $('.fa-phone').click(function(){
        $('.phone').css('font-size', '20px');
    });

    // function document() {

    //     $(document).click(function(){
    //         $('.hidden').css('visibility', 'hidden');
    //         $('.hiddenw').css('visibility', 'hidden');
    //     });
    // }

    // document();

   
   
});