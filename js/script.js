$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once: true,
    });
});

$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    
    /*open menu*/
    $(".btn_menu_mobile").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".btn_menu_mobile").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".btn_menu_mobile").removeClass('active');
    });

	$(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });

    $('.btn_close_booking').click(function(){
        $('.booking_fixsed_block').fadeOut(300)
    })

    /*open menu*/
    $(".menu-trigger-product").click(function(){
        $("body,html").addClass('menu-toggle-product');
        $(".menu-trigger-product").addClass('active');
    });
    $(".m-overlay-product").click(function(){
        $("body,html").removeClass('menu-toggle-product');
        $(".menu-trigger-product").removeClass('active');
    });


    $('.mmenu-product a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-100 }, 1000);
      $('body,html').removeClass('menu-toggle');
      $("body,html").removeClass('menu-toggle-product');
        
      $('.menu-trigger').removeClass('active');
      $(".menu-trigger-product").removeClass('active');
      return false;
    });


    if ( $('.et_pb_scroll_top').length ) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('.et_pb_scroll_top').show().removeClass( 'et-hidden' ).addClass( 'et-visible' );
        } else {
            $('.et_pb_scroll_top').hide().removeClass( 'et-visible' ).addClass( 'et-hidden' );
        }
    });

    //Click event to scroll to top
    $('.et_pb_scroll_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
    });
    }


    /*header-fixed*/
    // $(window).scroll(function(){
            
    //     if ($(window).scrollTop() >= 220) {
    //         $('body').addClass('fixed-header');
    //     }
    //     else {
    //         $('body').removeClass('fixed-header');
    //     }
              
    // });
    
    $("#home_slider").owlCarousel({
            loop:true,
            margin:0,
            items:1,
            responsiveClass:true,
            dots:true,
            rtl:rtl,
            nav:true,
            autoplay:false,
            navText:['<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],

        })


    $(".album_slider").owlCarousel({
            loop:true,
            margin:0,
            items:1,
            responsiveClass:true,
            dots:true,
            nav:true,
            rtl:rtl,
            autoplay:false,
            navText:['<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],

        })
})