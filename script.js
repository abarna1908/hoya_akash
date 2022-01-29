$(document).ready(function(){
    $(".intraocular").click(function(event) {
        event.preventDefault();
        console.log("hello")
        $('.main-page').addClass("hidden");
        $('.intraocular-page').removeClass("hidden");
        $('.arc').addClass("show");
        $('.arc').removeClass("hide");
    });
    $(".navbar-brand").click(function(event) {
        event.preventDefault();
        console.log("hello")
        $('.main-page').removeClass("hidden");
        $('.intraocular-page').addClass("hidden");
        $('.arc').removeClass("show");
        $('.arc').addClass("hide");
    });
    $("#hamMenu").click(function(event) {
        if($('#subHamMenu').is(":visible")){
            $('#subHamMenu').hide();
        }
        else{

            $('#subHamMenu').show();
        }
    });
    
});