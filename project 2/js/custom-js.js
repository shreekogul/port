$(document).ready(function(){
    $('.btn-info').trigger('click');

    $('.load-text a').click(function(){
        $('.btn-info').trigger('click');
    });

    $('.sign').click(function(){
        $(this).addClass('active');
        var inp=$('.input-1').val();
        if(inp=="")
        {
            alert('Enter the emai addressl');
            $('.input-1').focus();
            $('.sign').removeClass('active');
        }
    });

    $('.topx').click(function(){
        $('.topdiv').slideUp();
    });

    $('.searchbt').click(function(){
        $(this).addClass('active');
        var chcat=$('.searchcat').val();
        $('.slide').slideUp();
        if(chcat=="")
        {
            alert('Select Catagories');
            $('.searchcat').focus();
            $('.searchbt').removeClass('active');
            $('.slide').slideDown();
        }
        else
        {
            $('.searchbt').removeClass('active');
        }
    });

    $('.slide li').click(function(){
        var menu=$(this).text();
        $('.searchcat').val(menu);
    });

    $('.part1').click(function(){
        $(this).addClass('active');
    });

    $('.navbar').click(function(){
        $('.part1').removeClass('active');
    });

    $('.heart').click(function(){
        $(this).toggleClass('active');
    });

    $('.shopcart').click(function(){
        $('.shopcart').removeClass('active');
        $(this).addClass('active');
    });

    $('.color a').click(function(){
        $('.color a').removeClass('active');
        $(this).addClass('active');
    });

    $('.anytime').click(function(){ 
        
        $('.anytime').removeClass('active');
        $(this).addClass('active');
    });

    $('.emailbtn').click(function(){
        var mail=$('.email').val();
        $(this).addClass('active')
        if(mail=="")
        {
            alert('Enter the email');
            $('.email').focus();
            $('.emailbtn').removeClass('active')
        }
    });

    $('.footbox1 a').click(function(){
        $('.footbox1 a').removeClass('active');
        $(this).addClass('active');
        $('.footbox2 a').removeClass('active');
        $('.footbox3 a').removeClass('active');
        $('.footsecond p').removeClass('active');
    })

    $('.footbox2 a').click(function(){
        $('.footbox2 a').removeClass('active');
        $(this).addClass('active');
        $('.footbox1 a').removeClass('active');
        $('.footbox3 a').removeClass('active');
        $('.footsecond p').removeClass('active');
    })

    $('.footbox3 a').click(function(){
        $('.footbox3 a').removeClass('active');
        $(this).addClass('active');
        $('.footbox1 a').removeClass('active');
        $('.footbox2 a').removeClass('active');
        $('.footsecond p').removeClass('active');
    })

    $('.footsecond p').click(function(){
        $('.footsecond p').removeClass('active');
        $(this).addClass('active');
        $('.footbox1 a').removeClass('active');
        $('.footbox2 a').removeClass('active');
        $('.footbox3 a').removeClass('active');
    });

    // HEADPHONE PAGE//

    $('.selectcolor span').click(function(){
        $('.selectcolor span').removeClass('active');
        $(this).addClass('active');
    });

    $('.addtocart').click(function(){
        $('.addtocart').removeClass('active');
        $(this).addClass('active');
    });

    $('.compare').click(function(){
        $('.compare').removeClass('active');
        $(this).addClass('active');
    });

    $('.social a').click(function(){
        $('.social a').removeClass('active');
        $(this).addClass('active');
    });

    $('.accordion a').click(function(){
        $('.accordion a').removeClass('active');
        $(this).addClass('active');
        var a=$(this).attr('title');
        $('.accordion p').slideUp();
        $('.para' + a).slideDown();
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

    $('.rightside a').click(function(){
        var cb=$(this).attr('title');
        $('.combain div').removeClass('active');
        $('.lay' + cb).addClass('active');
        $('.rightside a').removeClass('active');
        $(this).addClass('active');
    });

    $('.nextpage a').click(function(){
        $('.nextpage a').removeClass('active');
        $(this).addClass('active');
    });

    $('.div1').click(function(){
        $('.div1').removeClass('active');
        $(this).addClass('active');
    });

    $('.bar-right').click(function(){
        $('.inpbox').addClass('active');
    });

    $('.searchicon').click(function(){
        var res=$('.resinp').val();
        if(res=="")
        {
            alert('Enter the text');
            $('.resinp').focus();
        }
    });

});