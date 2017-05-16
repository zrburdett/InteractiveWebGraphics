// CIRCLES JAVASCRIPT

$( document ).ready(function(){
    // Set the shape image to the document height
    $('.shape-image').css('min-height', $( document ).height());

    // Counter variable
    var counter = 0;

    // Syntax to create a div with a unique id
    var nextDiv = ("<div id=\"circle" + counter + "\"></div>")

    // This sets up the mobile friendly navigation, provided by Materialize
    $(".button-collapse").sideNav();

    // When the body is clicked do the following
    $("body").click(function() {
        // Increase the counter
        counter += 1;

        // Set up the string to create a unique div id
        // Making sure it is a circle with a width and height of 20px
        nextDiv = ("<div id=\"circle" + counter + "\" style=\"width: 20px; height: 20px; background: red; position: absolute; -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px;\"></div>")

        // Append a new div into the svg-image div
        $('.svg-image').append(nextDiv);

        // When the mouse moves on click, set the position of the current shape
        $( document ).on( "mousemove", function( event ) {
            // Select the current div
            var currentDiv = ("#circle" + counter);
            // Set the x position
            var stringPosX = (event.pageX + "px");
            // Set the y position
            var stringPosY = (event.pageY + "px");

            // Define the left and top css positions
            $(currentDiv).css('left', stringPosX);
            $(currentDiv).css('top', stringPosY);
        });                
    });

});