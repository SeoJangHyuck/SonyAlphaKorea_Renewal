$(function(){
    $(".s_mbanner").bxSlider({
        mode: "fade",
        auto: true,
        autoControls: true,
        pause: 3000,
        captions: true
    });
    $(".s_fsimg, .s_csimg").bxSlider({
        pager: false,
        captions: true
    });
}); // End