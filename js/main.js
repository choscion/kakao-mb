$(function(){
    $(window).scroll(function(){
        crrentScroll = $(this).scrollTop();
        targetScroll = $('.sc_today .title').offset().top;

        if (crrentScroll >= targetScroll) {
            $('.sc_today_top').addClass('fixed');
        }else{
            $('.sc_today_top').removeClass('fixed');
            $('.sc_today_top').removeClass('up')
        }
        if (crrentScroll >= targetScroll+5) {
            $('header').addClass('hide');
            $('.gnb-item .cont').removeClass('on');
            $('.sc_today_top').addClass('up');
        }else{
            $('header').removeClass('hide');
            $('.sc_today_top').removeClass('up');
        }

        if (crrentScroll>0){
            $('header').addClass('bdbottom');
        }else{
            $('header').removeClass('bdbottom');
        }
    })

    searchMo = gsap.timeline({
        defaults:{
            ease:'ease-in'
        }
    })
    searchMo.addLabel('m1')
    .to('.search_wrap',{display:'block',opacity:1},'m1')
    .to('main',{y:300},'m1')
    .fromTo('.search_content',{opacity:0,y:-200},{opacity:1,y:0})
    searchMo.pause();

        
        $('.btn-srh').click(function(e){
            $('body').addClass('noscroll');
            e.preventDefault();
            searchMo.play();
            gsap.set('html,body',{scrollTop:0})
            // $('.gnb-item .cont').removeClass('on');
        })
        $('.search_wrap .btn-close').click(function(e){
            e.preventDefault();
            searchMo.reverse();
            $('body').removeClass('noscroll');
        })

    $('.btn-hamburger').click(function(e){
        e.preventDefault();
        $(this).siblings('.ham-wrap').addClass('on');
        $('body').addClass('noscroll');
    })
    $('.ham-wrap .btn-close').click(function(e){
        e.preventDefault();
        $(this).parent().parent().removeClass('on');
        $('body').removeClass('noscroll');
    })

    $('.ham-wrap .gnb_title').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $(this).siblings('.gnb_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings('.gnb_cont').addClass('on');
            $(this).addClass('on');
        }
    })
    
    $('.cc_wrap .link_title').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $(this).siblings('.link_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings('.link_cont').addClass('on');
            $(this).addClass('on');
        }
    })
    
    
    

      $('.btn-dark-pc').click(function(e){
        e.preventDefault();
        $('body').toggleClass('dark');
    })
    ScrollTrigger.matchMedia({
        // "(min-width: 768px)": function(){ //768px 이상
        //     $('.box_wrap').masonry({
        //         itemSelector: '.sub_box',
        //         // columnWidth: 297, //너비크기
        //         gutter:36, //각 레이아웃간의 간격
        //     });
        // },
        // "(min-width: 1024px)": function(){ //768px 이상
        //     $('.box_wrap').masonry({
        //         itemSelector: '.sub_box',
        //         // columnWidth: 297, //너비크기
        //     });
        // },
        // "(min-width: 1441px)": function(){ //768px 이상
        //     $('.box_wrap').masonry({
        //         itemSelector: '.sub_box',
        //         gutter:36,
        //     });
        // },


        "all": function () { // 모든 구간
            $('.box_wrap').masonry({
                itemSelector: '.sub_box',
                gutter:36, //각 레이아웃간의 간격
                // transitionDuration: '0.1s',
                // stagger: 2,
                // resize: true,
                // initLayout: true
            });

            ScrollTrigger.refresh();
        }
    })
}) // Do not touch!!!!