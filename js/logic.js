$(document).ready(function(){

// ================================
    $('.amis').mouseenter(function(){
        $('.ani_move1').animate({
            marginLeft:'50px'
        },5000).animate({
            marginLeft:'-2px'
        },5000);
    });

    $('section nav ol').mouseenter(function(){
        $(this).animate({
            margin:'10px'
        },2000).animate({
            margin:'-2px'
        },2000);
    });

    $('section article').mouseenter(function(){
        $(this).animate({
            width: '73.9%',
            height: '89vh'
        },1000);
    });

    $('section article').mouseleave(function(){
        $(this).animate({
            width: '70%',
            height: '80vh'
        },1000);
    });
// =========================================
    $('section.menu_control*').hide();
    $('section.Html_Tutorial').show();
    // =================================
    $('.html_menuitem').click(function(){
        $('section.menu_control*').hide();
        $('section.Html_Tutorial').show();
    });

    $('.css_menuitem').click(function(){
        $('section.menu_control*').hide();
        $('section.Css_Tutorial').show();
    });

    $('.javascript_menuitem').click(function(){
        $('section.menu_control*').hide();
        $('section.JavaScript_Tutorial').show();
    });

    $('.jquery_menuitem').click(function(){
        $('section.menu_control*').hide();
        $('section.JQuery_Tutorial').show();
    });

    // ================================================
    // ================================================
    // ================================================
    // ============ JQuery section ==================

    $('article object*').hide();
    $('.JQuery_1_object').show();

    $('section .nav_jquery ol li:nth-child(1)').click(function(){
        $('article object*').hide();
        $('#jquery_img').show();

    });

    $('section .nav_jquery ol li:nth-child(2)').click(function(){

        $('article object*').hide();
        $('.JQuery_1_object').show();
    });

    $('section .nav_jquery ol li:nth-child(3)').click(function(){

        $('article object*').hide();
        $('.JQuery_2_object').show();
    
    });

    $('section .nav_jquery ol li:nth-child(4)').click(function(){

        $('article object*').hide();
        $('.JQuery_3_object').show();
        
    });
    
    $('section .nav_jquery ol li:nth-child(5)').click(function(){

        $('article object*').hide();
        $('.JQuery_4_object').show();
        
    });
    
    $('section .nav_jquery ol li:nth-child(6)').click(function(){

        $('article object*').hide();
        $('.JQuery_5_object').show();
        
    });

    $('section .nav_jquery ol li:nth-child(7)').click(function(){

        $('article object*').hide();
        $('.JQuery_6_object').show();
        
    });

    // ============ html section ============
    
    $('#html_img').show();
    $('section .nav_html ol li:nth-child(1)').click(function(){
        $('img*').hide();
        $('#html_img').show();
        $('.img1').show();
        $('article object*').hide();
        
    });
    
    $('section .nav_html ol li:nth-child(2)').click(function(){
        $('#html_img').hide;
        $('article object*').hide();
        $('.Html_1_object').show();
    });

    $('section .nav_html ol li:nth-child(3)').click(function(){

        $('article object*').hide();
        $('.Html_2_object').show();
        
    });


    // ================================================
    // ================================================
    // ================================================
    // ============== Theme ===========
    
    $('[class="img1"]').click(function(){
        alert("Dark Theme",1000);
        $('img.img1').hide();
        $('img.img2').show();
        $('.redoy').css("background","#616161").css("color","#ff4dd2");
    
        $('section.menu_control nav').css("background","#999999").css("color","#ffff");

        $('section article').css("background","#808080").css("color","#ffff");

    });
// =================================
    $('[class="img2"]').click(function(){
        alert("Light Theme",1000);
        $('img.img2').hide();
        $('img.img1').show();
        $('.redoy').css("background","rgb(230, 199, 146)").css("color","#ff4dd2");
        
        $('section.menu_control nav').css("background","#E7E9EB").css("color","#1a1a1a");

        $('section article').css("background","rgb(204, 110, 204)").css("color","#ffff");

    });

});

