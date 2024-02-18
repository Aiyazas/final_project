$(document).ready(()=>{
    
    // extra section starting   
    // email logn from starting
       $('.cloes_btn').on('click',()=>{
       $('#email_logn_from').fadeOut(500);
       });
   // email logn from ending

    // search section starting//

    let search_show_box_btn = document.querySelector('.search_box_show_btn');
    let search_hide_box_btn = document.querySelector('.search_box_cloes_btn');
    let search_box = document.querySelector('#search_container')
    
    search_show_box_btn.addEventListener('click',()=>{
        search_box.style ='border-radius: 0px; transform: scale(1);';
    });
    search_show_box_btn.addEventListener('click',()=>{
        document.querySelector('.search_form').style ='transform: scale(1); opacity: 1;';
    });
    search_hide_box_btn.addEventListener('click',()=>{
        search_box.style ='border-radius: 300px; transform: scale(0);';
    });
    search_hide_box_btn.addEventListener('click',()=>{
        document.querySelector('.search_form').style ='transform: scale(.3); opacity: 0;';
    });

    
    // search_show_box_btn.addEventListener('click',()=>{
    //     search_box.classList.toggle('.active')
    // });

    // search section ending//

    // Shopping cart section starting
    let card_close_btn =document.querySelector('.Shopping_cart_close_btn');
    let card_open_btn =document.querySelector('.card_box_show_btn');
    let card_container =document.querySelector('#Shopping_cart');
    let white_spaec =document.querySelector('.white_spaec');

    card_open_btn.addEventListener('click',()=>{
        card_container.style ='transform: scaleX(1)';
    });
    white_spaec.addEventListener('click',()=>{
        card_container.style ='transform: scaleX(0)';
    });

    card_close_btn.addEventListener('click',()=>{
        card_container.style ='transform: scaleX(0)';
    });

    // Shopping cart section ending  
    $(window).scroll(()=>{
        var scorll_document = $(document).scrollTop(); 
        if( scorll_document > 200){ 
            $('.scroll_ToTop_botton').addClass('active')
        }else{ 
            $('.scroll_ToTop_botton').removeClass('active')
        };
        $('.scroll_ToTop_botton').on('click',()=>{
            $(window).scrollTop(0);
        });
    });
    // acroll to top  btn ending

// extra section ending
    /* =============home page starting============ */
//  -----------------------------------------------------
    // main section starting
    // banner section starting
    $('#banner_section').slick({
        arrows: false,
        dots: true,
        appendDots:$('.bannner_slick_slide_dots'),
        autoplay: true,
        autoplaySpeed:3000,
        fade:true,
        speed: 3000,
        slidesToShow: 1,
    });
    // banner section ending
    // New Arrivals section starting
        // bootstarp tooltip js
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        // slik js
    $('.crad_main_box').slick({
        slidesToShow: 4,
        prevArrow: '<i class="fa-solid fa-chevron-right slide_arrows"></i>',    
        nextArrow: '<i class="fa-solid fa-chevron-left slide_arrows"></i>',   
        autoplay: true,
        autoplaySpeed: 1500,
        speed:3000, 
    })
    // New Arrivals section ending
    // offer section starting
        // offer slick js
    $('.offer_slide_box').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:3000, 
    })

    // offer countdown js
    $('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
        $this.html(event.strftime(''
        + '<li><h6>%D</h6> <p>Days</p></li>'
        +'<li><span>:</span></li>'
        + '<li><h6>%H</h6> <p>Hour</p></li>'
        +'<li><span>:</span></li>'
        + '<li><h6>%M</h6> <p>Minute</p></li>'
        +'<li><span>:</span></li>'
        + '<li><h6>%S</h6> <p>Sec</p></li>'));
    });
    });
    // offer section ending
    // Special offer section starting
    new VenoBox({
        selector: '.play_icon',
    });
    // Special offer section ending
    // Latest News section starting
    $('.latest_news_main_box').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed:3000, 
        slidesToScroll: 2
    });
    // Latest News section ending
// main section ending
/* =============home page ending============ */

/* =============about page starting============ */
/* ------------------------------------------------- */
    // Team section starting
    $('.team_slid_container').slick({
        slidesToShow: 4,
        prevArrow: '<i class="fa-solid fa-chevron-right slide_arrows"></i>',    
        nextArrow: '<i class="fa-solid fa-chevron-left slide_arrows"></i>',   
        autoplay: true,
        autoplaySpeed: 1500,
        speed:3000, 
    })
    // Team section ending

    // Testimonials section starting 
    $('.testimonials_slide_contaier').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:2000, 
        slidesToScroll: 1,
        fade:true,   
    });
    // Testimonials section ending 
    // Aetor Instagram section starting
    $('.aetor_instagram_slide_container').slick({
        slidesToShow: 6,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed:3000, 
        slidesToScroll: 2 
    });
    // Aetor Instagram section endting
// /* =============about page ending============ */

/* ============shop_details page starting============ */
// -------------------------------------------------------'
    // Product Details section starting
        // slide of slick
        $('.product_details_img_container').slick({
            slidesToShow: 5,
            arrows: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed:2000, 
            slidesToScroll: 1,
            centerMode: true, 
            centerPadding: '0px',
            prevArrow: '<i class="fa-solid fa-chevron-right slide_arrows"></i>',    
            nextArrow: '<i class="fa-solid fa-chevron-left slide_arrows"></i>',
            focusOnSelect: true
        });
    // Product Details section ending
    // Releted Products section starting
    $('.rleted_products_slide_container ').slick({
        slidesToShow: 4,
        arrows: true, 
        autoplay: true,
        autoplaySpeed: 4000,
        speed:3000, 
        slidesToScroll: 2, 
        prevArrow: '<i class="fa-solid fa-chevron-right slide_arrows"></i>',    
        nextArrow: '<i class="fa-solid fa-chevron-left slide_arrows"></i>',
    });
    // Releted Products section ending

/* ============shop_details page ending============ */

/* ============checkout page strating============ */
// --------------------------------------------------
    // Place Order section starting 
    let to_order_inpu = document.querySelectorAll('.to_order_inpu');
    let ques = document.querySelectorAll('i');
    to_order_inpu.forEach( inpu => {
        inpu.addEventListener('click',()=>{
            to_order_inpu.forEach(subinpu => {
                subinpu.classList.remove('active')
            });
            inpu.classList.add('active');
            
        });
    });

    $('.copon_hide_btn').on('click',()=>{
        $('.form-coupon').slideToggle("slow");
    })
    // Place Order section ending   
/* ============checkout page ending============ */

/* ============blog page starting============ */
// -------------------------------------------
    // Blog section starting
    $('#blog_img_box').slick({
        slidesToShow: 1,
        arrows: true, 
        autoplay: true,
        autoplaySpeed: 4000,
        speed:3000, 
        slidesToScroll: 1, 
        prevArrow: '<i class="fa-solid fa-chevron-right slide_arrows"></i>',    
        nextArrow: '<i class="fa-solid fa-chevron-left slide_arrows"></i>',
    });
    // Blog section ending 
/* ============blog page ending============ */
});
// porduct count js starting
        const dcrement = document.querySelector('.dcrement');
        const increment = document.querySelector('.increment');
        let inpu = document.querySelector('#value');

        increment.addEventListener('click', function(){
                ++inpu.value;
            });
        dcrement.addEventListener('click', function(){
            if(inpu.value > 1){
                --inpu.value; 
            };
        });
// porduct count js ending



