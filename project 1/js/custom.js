$(document).ready(function(){
    $('.custome-btn').trigger('click');

    $('.blink-text a').click(function(){
        $('.custome-btn').trigger('click');
    });

    $('.sign').click(function(){
        $(this).addClass('active');
        var a=$('.input-1').val();
        if(a=="")
        {
            alert('Enter the mail');
            $('.input-1').focus();
            $('.sign').removeClass('active');
        }
    });

    $('.top a').click(function(){
        $('.top a').removeClass('active');
        $(this).addClass('active');
    });

    $('.third a').click(function(){
        $('.third a').removeClass('active');
        $(this).addClass('active');
    });

    $('.thirdbtn ').click(function(){
        $(this).toggleClass('active');
    });

    $('.title a').click(function(){
        $('.title a').removeClass('active');
        $(this).addClass('active');
    });

    $('.title a').click(function(){
        var b=$(this).attr('title');
        $('.boxes div').removeClass('active');
        $('.box' + b).addClass('active');
    });

    $('.membership').click(function(){
        var c=$('.floatr input').val();
        if(c=="")
        {
            alert('Enter the mail');
            $('.floatr input').focus();
        }
        else
        {
            alert('Success')
        }
    });

    $('.moveing').click(function(){
        $('.moveing').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.icon a').click(function(){
        $('.icon a').removeClass('active');
        $(this).addClass('active');
    });

    $('.plus').click(function(e){
        e.preventDefault();
        var qty = $(".number").val();

        var value = parseInt(qty, 10)
        value = isNaN(value) ? 0 : value;
        if(value < 10)
        {
            value++;
            $(".number").val(value);
        }
    });

    $('.minus').click(function(e){
        e.preventDefault();
        var qty = $(".number").val();

        var value = parseInt(qty, 10)
        value = isNaN(value) ? 0 : value;
        if(value > 0)
        {
            value--;
            $(".number").val(value);
        }
    });

    $('.purchase').click(function(){
        $('.purchase').removeClass('active');
        $(this).addClass('active');
    });

    $('.rated a').click(function(){
        $('.rated a').removeClass('active');
        $(this).addClass('active');
        $(".accordion").slideUp();
        var e = $(this).attr('title');
        $(".sub" + e).slideDown();
    });

    $('.buy').click(function(){
        $('.buy').removeClass('active');
        $(this).addClass('active');
    });

    $('.resbar').click(function(){
        $(".resbar").toggleClass('active');
        $(".custom-navbar").slideToggle('active');
    });

    $('.fa-search').click(function(){
        $(".third input").slideToggle('active');
    });

    $('.inpbtn').click(function(){
        var one = $('.focus1').val();
        var two = $('.focus2').val();
        var three = $('.focus3').val();
        var four =  $('.focus4').val();
        var five = $('.focus5').val();
        if(one=="")
        {
            alert('Enter the value');
            $('.focus1').focus();
            return false;
        }
        if(two=="")
        {
            alert('Enter the value');
            $('.focus2').focus();
            return false;
        }
        if(three=="")
        {
            alert('Enter the value');
            $('.focus3').focus();
            return false;
        }
        if(four=="")
        {
            alert('Enter the value');
            $('.focus4').focus();
            return false;
        }
        if(five=="")
        {
            alert('Enter the value');
            $('.focus5').focus();
            return false;
        }
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