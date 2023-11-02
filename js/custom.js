$(function(){
    // 문서가 준비되면 일을 시작해라.
    $('.Main_visual_slide').slick({
        arrows: false
    });


    $('.main_product_slide').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true
    });

    $('.MainProduct .arrows .left').on('click', function(){
        $('.main_product_slide').slick('slickPrev');

    });
    $('.MainProduct .arrows .right').on('click', function(){
        $('.main_product_slide').slick('slickNext');

    });

    $('.totop').on('click',function(){
        // 1000 = 1초
        $('html, body').animate({ scrollTop:0 }, 1000)
    })

// totop이 맨위에 있으면 totop버튼이 사라지는 sj동작
    $(window).on('scroll', function(){
        const sct = $(window).scrollTop();
        if ( sct > 200) {
            $('.totop').addClass('on');
        } else {
            $('.totop').removeClass('on');
        }
    })

    $('.tab_menu li').on('click',function(e){
        // $(this) : click한 자신
        // $(this).index() : click한 자신의 고유번호

        e.preventDefault();  //a tag의 이벤트 자체를 멈춘다
        const idx = $(this).index(); // 0,1,2
        console.log('내가 클릭한 것의 번호: ', idx);

        // eq(idx) : idx 번째 형제를 구해라.
        // siblings() : 나머지 형제를 구해라.
        
        $('.tab_content .content')
        .eq(idx)
        .addClass('on')
        .siblings()
        .removeClass('on');

        $(this)
        .addClass('on')
        .siblings()
        .removeClass('on');
    });

    $('.lnk').on('change', function(){
        const lnk = $(this).val();
        console.log(lnk);
        if (lnk) {
            window.open(lnk);
        }
    })
})