$(function(){
    // Header
    $("#s_gnb1>li").on("mouseover focusin",function(){
        $(this).siblings().find("ul, ul>li>a").removeClass("sub_slide");
    });

    // Local Header
    $("#s_lnb>div").on("mouseenter focusin",function(){
        $(this).find("ul").stop().fadeIn(300);
    });
    $("#s_lnb>div").on("mouseleave focusout",function(){
        $(this).find("ul").stop().fadeOut(300);
    });
    
    $("#s_lnb ul>li>a").click(function(){
        var lnbText = $(this).text();
        $(this).parents("ul").prev().text(lnbText);

        var sortLnb = $(this).attr("data-sortlnb");
        console.log(sortLnb);
        $("."+sortLnb).siblings().removeClass("s_lnb_ac");
        $("."+sortLnb).addClass("s_lnb_ac");
    });

    // Sub Main Content
    $("#s_smc>section>div>div").on("mouseover focusin",function(){
        $(this).parent().siblings("h2").css({"background-color":"#eb5b0c"});
    });
    $("#s_smc>section>div>div").on("mouseout focusout",function(){
        $(this).parent().siblings("h2").css({"background-color":"transparent"});
    });
    
}); //End