///nav
$('.mobile-ic').on('click', function () {
    $('.responsive-menu').slideToggle();
    $('.menu').slideToggle();
})
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:88,
    nav:false,
    dots:false,
    singleItem:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        
        1200:{
            items:4,
             } 
        
    }
     
})
 $('.owl-item.active').eq(1).addClass("center");
 $('.owl-item.active').eq(2).addClass("center");


 