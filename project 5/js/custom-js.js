$(document).ready(function()
{
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    //alert(filename);
    $('.menu a').each(function()
    {
        var para=$(this).attr('href');
        //alert(para);
        if(filename==para)
        {
            $(this).addClass('active');
        }
    });

    $('.last').click(function()
    {
        $('.menu').slideToggle();
    });
    
    $('.carousel-caption a').click(function()
    {
        $(this).toggleClass('active');
    });
    

    $('.offers').click(function()
    {
        $('.offers2').removeClass('active');
        $(this).toggleClass('active');
    });

    
    $('.offers2').click(function()
    {
        $('.offers').removeClass('active');
        $('.offers2').removeClass('active');
        $(this).addClass('active');
    });
    

    $('.rightbutton a').click(function()
    {
        $('.rightbutton a').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.experience a').click(function()
    {
        $(this).toggleClass('active');
    });

    
    $('.margin img').click(function()
    {
        $('.margin img').removeClass('active');
        $(this).toggleClass('active');
    });


    $('.subscribe').click(function()
    {
        $('.subscribe').removeClass('active'); 
        $(this).addClass('active');
    });

    $('input').click(function()
    {
        $('input').siblings().removeClass('active'); 
        $(this).addClass('active');
    });

    $('textarea').click(function()
    {
        $('textarea').siblings().removeClass('active'); 
        $(this).addClass('active');
    });

   $('.bttn').click(function()
   {
        var a=$('.int1').val();
        var b=$('.int2').val();
        var c=$('.int3').val();
        var d=$('.int4').val();
        //alert(a);
        if(a=="")
        {

            $('.int1').focus();
            return false;
        }
        if(b=="")
        {
            $('.int2').focus();
            return false;
        }
        if(c=="")
        {
            $('.int3').focus();
            return false;
        }
        if(d=="")
        {
            $('.int4').focus();
            return false;
        }
   });

    $('.footbox a').click(function()
    {
        $('.footbox a').removeClass('active'); 
        $(this).addClass('active');
    });

   $('.footsecond div').click(function()
    {
        $('.footsecond div').removeClass('active');
        $(this).addClass('active');
    });

    $('.box2 a').click(function()
    {   
        $('.footsecond').find('div').removeClass('active');
        $('.box2 a').removeClass('active'); 
        $(this).addClass('active');
    });

    $('#copyright').text(new Date().getFullYear());

    $(window).scroll(function()
    {
        if($(window).scrollTop()>1000)
        {
            $('.to-top').fadeIn(800);
        }
        else
        {
            $('.to-top').fadeOut(500);
        }
    });
    $('.to-top').click(function()
    {
        $('html,body').animate(
            {scrollTop:0},800
        );
    });
});