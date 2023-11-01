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


    $(window).on('scroll', function(){
        const sct = $(window).scrollTop();
        if ( sct > 200) {
            $('.totop').addClass('on');
        } else {
            $('.totop').removeClass('on');
        }
    })

})