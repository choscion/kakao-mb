$(function(){
   
    $('.gnb-list .down').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('on')) {
            $(this).siblings('.cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $('.cont').removeClass('on');
            $(this).siblings('.cont').addClass('on');
            $(this).addClass('on');
        }
    })

    $('.serv-item .list_title').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $(this).siblings('.list_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings('.list_cont').addClass('on');
            $(this).addClass('on');
        }
    })

    $('.ft_policy .more').click(function(e){
        e.preventDefault();
        // $('.link_cont').removeClass('on');
        // $(this).sibilings('.link_cont').addClass('on');
        
        
        if ($(this).hasClass('on')) {
            // $('.link_cont').addClass('on');
            $(this).siblings('.link_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $('.link_cont').removeClass('on');
            $(this).siblings('.link_cont').addClass('on');
            $(this).addClass('on');
            $(this).parent().siblings().find('.more').removeClass('on');
        }
    })

    $('.site_link .link_title').click(function(e){
        e.preventDefault();
        // $('.link_cont').removeClass('on');
        // $(this).sibilings('.link_cont').addClass('on');
        
        if ($(this).hasClass('on')) {
            $(this).siblings('.link_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings('.link_cont').addClass('on');
            $(this).addClass('on');
        }
    })

    //탑 버튼

    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop:0},1);
        return false;
    });



}) //Do not touch!!!!