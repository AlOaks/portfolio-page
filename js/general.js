$(document).ready(function (){
    
    var battleborn = new Audio ('../assets/Battleborn.mp3');
    var nightsky = new Audio ('../assets/NightSky.mp3');
    var tragic = new Audio ('../assets/tragic.mp3');

    $('.fa-pause').hide();


    $('.p1').click(function(){
        $('.p1').hide();
        $('.pa1').show();
        battleborn.play();
    });

    $('.pa1').click(function(){
        $('.pa1').hide();
        $('.p1').show();
        battleborn.pause();
    });

    $('.p2').click(function(){
        $('.p2').hide();
        $('.pa2').show();
        nightsky.play();
    });

    $('.pa2').click(function(){
        $('.pa2').hide();
        $('.p2').show();
        nightsky.pause();
    });

    $('.p3').click(function(){
        $('.p3').hide();
        $('.pa3').show();
        tragic.play();
    });

    $('.pa3').click(function(){
        $('.pa3').hide();
        $('.p3').show();
        tragic.pause();
    });


    // DESKTOP

    function checkSize() {

        $('.web-circle').click(function(){
            $('.hiddenw').css('visibility', 'visible');
            $('.hidden').css('visibility', 'hidden');

        });

        $('.music-circle').click(function(){
            $('.hidden').css('visibility', 'visible');
            $('.hiddenw').css('visibility', 'hidden');
        });
        
    }

    checkSize();
    
   
});