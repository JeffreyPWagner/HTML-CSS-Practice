$(document).ready(function(){
    
    /* Sticky navigation */
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll buttons */
    $('.js-scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });
    
    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
    });
    
    /* Animations on scroll */
    
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });
    
    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
    $('.js-wp-4').waypoint(function(direction){
        $('.js-wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
    /* Mobile nav */
    
    var menuIconVis = true;
    
    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon');
        
        nav.slideToggle(200);
        if (menuIconVis) {
            $('.js-nav-menu').hide();
            $('.js-nav-close').show();
            menuIconVis = false;
        }
        else {
            $('.js-nav-close').hide();
            $('.js-nav-menu').show();
            menuIconVis = true;
        }
    });    
});