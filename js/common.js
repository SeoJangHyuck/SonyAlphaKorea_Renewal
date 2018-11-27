$(function(){
    //Mobile GNB
    $(".s_mgnb_btn").click(function(){
        $(this).toggleClass("s_mgnb_a");
        $(".s_mgnb_con").toggleClass("s_mgnb_a");
    });
    $("#s_mgnb1>li>a").click(function(){
        $(this).addClass("s_mgnb_ac");
        $(this).parent().siblings().children("a").removeClass("s_mgnb_ac");
        $(this).children().addClass("s_mgnb_ac");
        $(this).parent().siblings().find("span").removeClass("s_mgnb_ac");
        $(this).next().children("ul").stop().slideDown(500);
        $(this).parent().siblings().find("ul").stop().slideUp(500);
    });
    
    //Product icon
    $(".s_hd_pr>a").on("mouseover focusin",function(){
        $(this).prev("img").addClass("s_pr_act");
    });
    $(".s_hd_pr>a").on("mouseout focusout",function(){
        $(this).prev("img").removeClass("s_pr_act");
    });
    
    //GNB Slide
    $("#s_gnb1>li").on("mouseover focusin",function(){
        $(this).children("a").addClass("s_gnb_ac");
        $(this).find("ul").stop().slideDown(500);
        $(this).find("span").addClass("s_gnb_ac");
    });
    $("#s_gnb1>li").on("mouseout focusout",function(){
        $(this).children("a").removeClass("s_gnb_ac");
        $(this).find("ul").stop().slideUp(500);
        $(this).find("span").removeClass("s_gnb_ac");
    });
    
    //Site Slide
    $(".s_ft_con>.s_family").on("mouseover focusin",function(){
        $(".s_site_group>ul").stop().slideDown(500);
    });
    $(".s_ft_con>.s_family").on("mouseout focusout",function(){
        $(".s_site_group>ul").stop().slideUp(500);
    });
}); // END