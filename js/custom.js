$(document).ready(function(){
    $('.navbar-nav a').click(function(){
        $('.navbar-nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('.header-text a').click(function(){
        $('.header-text a').removeClass('active');
        $(this).addClass('active');
    });

    $('.heading a').click(function(){
        var a = $(this).attr('title');
        $('.showcase div').removeClass('active');
        $('.showcase' + a).addClass('active');
        $('.heading a').removeClass('active');
        $(this).addClass('active');

    });
    
    $('.gallery-box').mouseenter(function(){
        $('.opacity').slideUp();
        var slide = $(this).attr('title');
        $('.opacity' + slide).slideDown();
    });

    $(window).scroll(function()
    {
        if($(window).scrollTop()>1000)
        {
            $('.to-top').fadeIn(400);
        }
        else
        {
            $('.to-top').fadeOut(400);
            $('.to-top').removeClass('active');
        }
    });
    $('.to-top').click(function()
    {
        $('html,body').animate(
            {scrollTop:0},800
        );
        $(this).addClass('active');
    });

    $('#copyright').text(new Date().getFullYear());
});