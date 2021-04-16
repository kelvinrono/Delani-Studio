$(document).ready(function(){


    $(".development_img").click(function(){
        $(".devText").show();
        $(this).hide()
    })

    $(".devText").click(function(){
        $(".development_img").show();
        $(this).hide()
    })

    $(".design_img").click(function(){
        $(".designText").show();
        $(this).hide()
    })

    $(".designText").click(function(){
        $(".design_img").show();
        $(this).hide()
    })
    $(".product_img").click(function(){
        $(".productText").show();
        $(this).hide()
    })

    $(".productText").click(function(){
        $(".product_img").show();
        $(this).hide()
    })
})