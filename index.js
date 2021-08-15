function showdetails(){
    $("#details_container").css("display","inherit");
    $("#details_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#details_container").removeClass("animated slideInLeft");
    },800);
}
function closedetails(){
    $("#details_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#details_container").removeClass("animated slideOutLeft");
        $("#details_container").css("display","none");
    },800);
}
function showimpact(){
    $("#impact_container").css("display","inherit");
    $("#impact_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#impact_container").removeClass("animated slideInRight");
    },800);
}
function closeimpact(){
    $("#impact_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#impact_container").removeClass("animated slideOutRight");
        $("#impact_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#details").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#impact").removeClass("animated fadeIn");
    },1000);
},1500);
