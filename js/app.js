$(document).ready(function () {

    $("#imageGallery > div:gt(0)").hide();

    setInterval(function() { 
      $('#imageGallery > div:first')
        .fadeOut(0)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#imageGallery');
    },  3500);

}); 
