// / <reference types="../@types/jquery"/>
// لما اكون عايز اغير في لون ال ناف بار عند سيكشن معين 

let aboutoffset=$("#about").offset().top;
$(window).on("scroll",function(){
   let userscroll= $(window).scrolltop();
   if (userscroll>aboutoffset-50) {
    $(".navbar").css(Text(`
        background-color:rgba(0,0,0,.7)!important;
        `));
    
   } else {
    $(".navbar").css({backgroundcolor:"transparent"});
    
   }

})
// end change background color navbar

// start loading
$(function(){
    $(`.loader`).fadeout(1500,function(){
        $(`.loading`).slideup(1500,function(){
            $(`body`).css(`overflow`,`outo`);
            $(`.loading`).remove();
        })
    })




})










































