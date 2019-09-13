$(document).ready(function(){
    $('.JQ').on('click', function(){
        $('.overlay').fadeToggle('slow');
        $('.modal').animate({
            height: 'toggle'
        },3000)
    })

    $(".close").on('click', function(){
        $('.overlay').fadeToggle('slow');
        $('.modal').animate({
            height: 'toggle'
        },3000)
    })
})