// ROOK PAGE JAVASCRIPT

// Run the following when the document loads
$( document ).ready(function(){
    // Variables that relate to the bird color
    var randomRedChannel;
    var randomGreenChannel;
    var randomBlueChannel;
    var randomColor;

    // Variables that relate to the body background color
    var mouseRedChannel = 0;
    var mouseGreenChannel = 0;
    var mouseBlueChannel = 0;
    var mouseColor = 0;

    // This sets up the mobile friendly navigation, provided by Materialize
    $(".button-collapse").sideNav();

    // When the svg image is clicked, run the following
    $(".svg-image").click(function() {
        // Generate a random number between 1 and 255 for each of the color channels
        randomRedChannel = 1 + Math.floor(Math.random() * 255);
        randomGreenChannel = 1 + Math.floor(Math.random() * 255);
        randomBlueChannel = 1 + Math.floor(Math.random() * 255);

        // Formatting the color channel variables to create an rgb color string
        randomColor = "rgb(" + randomRedChannel + "," + randomGreenChannel + "," + randomBlueChannel + ")";

        console.log("Changing bird color to " + randomColor);

        $('.bird').css('fill', randomColor);
    });

});

// Run the following when the mouse is moved
$( document ).on( "mousemove", function( event ) {
    // Make the red channel variable based on the x position
    mouseRedChannel = ((event.pageX) % 256 );

    // Make the green channel variable based on the y position
    mouseGreenChannel = ((event.pageY) % 256 );

    // Make the blue channel variable based on both the x and y positions
    mouseBlueChannel = (((event.pageY) + (event.pageX)) % 256 );

    // Formatting the color channel variables to create an rgb color string
    mouseColor = "rgb(" + mouseRedChannel + "," + mouseGreenChannel + "," + mouseBlueChannel + ")";

    console.log("Changing background color to " + mouseColor);

    // Change the body background color to the generated color
    $('body').css('background-color', mouseColor);
});