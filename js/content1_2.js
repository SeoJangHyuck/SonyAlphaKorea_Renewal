$(function(){
    $("#s_gnb1>li").on("mouseover focusin",function(){
        $(this).siblings().find("ul, ul>li>a").removeClass("sub_slide");
    });
    
    $("#s_lnb>div").on("mouseover focusin",function(){
        $(this).find("ul").stop().slideDown(300);
    });
    $("#s_lnb>div").on("mouseout focusout",function(){
        $(this).find("ul").stop().slideUp(300);
    });
    
    $("#s_smc>section>div>div").on("mouseover focusin",function(){
        $(this).parent().siblings("h2").css({"background-color":"#eb5b0c"});
    });
    $("#s_smc>section>div>div").on("mouseout focusout",function(){
        $(this).parent().siblings("h2").css({"background-color":"transparent"});
    });
    
}); //End