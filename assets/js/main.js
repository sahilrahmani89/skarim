

// adding and removing class for togglebar
    jQuery(document).on('click', ".bread-icon", function(){
        jQuery(this).toggleClass('cross_add');
    });
// asidebar-menu-------------
 jQuery(document).on('click' , ".bread-icon" ,function(){
    jQuery(this).toggleClass('open');
 });
 jQuery(document).on('click',".bread-icon",function(){
    jQuery("body").toggleClass('skarim_body');
 });
// banner slider
$(".banner-slide").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    arrow:true,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// about slider
$(".abtslider").owlCarousel({
    loop:true,
    nav:true,
    arrow:true,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// new arrival tab show---
$(".newarrival").owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    arrow:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        568:{
                items:2
         },
        768: {
                items: 3
        },
        1000: {
              items: 4
        }

    }
});
// accessories slide tab pane
$(".access_slide").owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    arrow:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        568:{
                items:2
         },
        768: {
                items: 3
        },
        1000: {
              items: 4
        }

    }
});
// tab pane men slide---
$(".menslide").owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    arrow:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        568:{
                items:2
         },
        768: {
                items: 3
        },
        1000: {
              items: 4
        }

    }
});
// --------------insta carousel
 $('.inscarousel').owlCarousel({
        loop: true,
        padding:0,
        nav: false,
        arrow:false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1

            },
            568:{
                items:2
            },
            768: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
});
// ----------
        var productbtnvar= $('.productslider');
        productbtnvar.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1

            },
            568:{
                items:2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
});
 // product button js onlick function
  $('.productbtn.left').on('click', function() {
        event.preventDefault();
        productbtnvar.trigger('prev.owl.carousel');
    });
    $('.productbtn.right').on('click', function() {
        event.preventDefault();
        productbtnvar.trigger('next.owl.carousel');
    });


// 