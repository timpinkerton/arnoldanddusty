$(document).ready(function () {

    $("#imageGallery > div:gt(0)").hide();

    setInterval(function () {
        $('#imageGallery > div:first')
            .fadeOut(0)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#imageGallery');
    }, 3500);

    const url = "https://api.nasa.gov/planetary/apod?api_key=QKwS01YI5V3pU5eFj43T574QyeKOu2qxHvh4CI8N";

    const defaultImage = "/images/earth-min.jpg";

    $.ajax({
        url: url,
        success: function (result) {
            //if the apod is a video, the default image will display
            if (result.media_type == "video") {
                $("#apod_img").attr("src", defaultImage);
            } else {
                $("#apod_img").attr("src", result.url);
            }
        }
    });

    const arnold = $('#arnold-div');
    const dusty = $('#dusty-div');

    spaceFloat(arnold);
    spaceFloat(dusty);

});

function spaceFloat(spaceDog) {

    //nextPosition() returns the new coordinate[x, y]
    const newPosition = nextPosition();

    //getting the coordinate of the div
    const oldPosition = spaceDog.offset();

    const speed = calculateSpeed([oldPosition.top, oldPosition.left], newPosition);

    spaceDog.animate({
        top: newPosition[0],
        left: newPosition[1]
    }, speed, function () {
        spaceFloat(spaceDog);
    });

}

function nextPosition() {

    // Getting window dimensions (subtracting the width and height of the div so they stay on the screen)
    const windowHeight = $(window).height() - 280;
    const windowWidth = $(window).width() - 150;

    //randomly calulate a new coordinate
    const newHeight = Math.floor(Math.random() * windowHeight);
    const newWidth = Math.floor(Math.random() * windowWidth);

    return [newHeight, newWidth];
}

//randomly calculates speed based on the coordinates
function calculateSpeed(oldPosition, newPosition) {

    const x = Math.abs(oldPosition[1] - newPosition[1]);
    const y = Math.abs(oldPosition[0] - newPosition[0]);

    //ternary expression
    //if x > y, then greatest = x, else greatest = y
    const greatest = x > y ? x : y;

    const speedModifier = 0.015;

    const speed = Math.ceil(greatest / speedModifier);

    return speed;

}