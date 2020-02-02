$(document).ready(function() {
    //navigation
    $("#menu-icon").click(function (evt) {
        $("#popup").fadeIn();
    });
    
    $("#popup").click(function() {
       $("#popup").fadeOut();
    });
    
    
});