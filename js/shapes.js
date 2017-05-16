// SHAPES JAVASCRIPT

// When the document is ready, run the following
$( document ).ready(function(){
    // Set the shape image to the document height
    $('.shape-image').css('min-height', $( document ).height());

    // Variables to determine which shape is being drawn
    var drawingCircle = true;
    var drawingSquare = false;
    var drawingTriangle = false;

    // Variable to determine up or down motion
    var goingDown = true;

    // Shape y coordinates
    var shape1Pos = parseInt($("#shape1").css('top'));
    var shape2Pos = parseInt($("#shape2").css('top'));
    var shape3Pos = parseInt($("#shape3").css('top'));
    var shape4Pos = parseInt($("#shape4").css('top'));
    var shape5Pos = parseInt($("#shape5").css('top'));

    // This sets up the mobile friendly navigation, provided by Materialize
    $(".button-collapse").sideNav();

    // Create new function that will toggle between shape types
    function switchShapes() {
        if(drawingCircle) {
            // If drawingCircle is true, set drawing square to true and others to false
            drawingCircle = false;
            drawingSquare = true;
            drawingTriangle = false;
            console.log("Now drawing squares");

            // Add the square class and remove the circle class
            $("#shape1").addClass("square");
            $("#shape1").removeClass("circle");
            $("#shape2").addClass("square");
            $("#shape2").removeClass("circle");
            $("#shape3").addClass("square");
            $("#shape3").removeClass("circle");
            $("#shape4").addClass("square");
            $("#shape4").removeClass("circle");
            $("#shape5").addClass("square");
            $("#shape5").removeClass("circle");
        } else if(drawingSquare) {
            // Else if drawingSquare is true, set drawing triangle to true and others to false
            drawingCircle = false;
            drawingSquare = false;
            drawingTriangle = true;
            console.log("Now drawing triangles");

            // Add the triangle class and remove the square class
            $("#shape1").addClass("triangle");
            $("#shape1").removeClass("square");
            $("#shape2").addClass("triangle");
            $("#shape2").removeClass("square");
            $("#shape3").addClass("triangle");
            $("#shape3").removeClass("square");
            $("#shape4").addClass("triangle");
            $("#shape4").removeClass("square");
            $("#shape5").addClass("triangle");
            $("#shape5").removeClass("square");
        } else {
            // Else, set drawing circle to true and others to false
            drawingCircle = true;
            drawingSquare = false;
            drawingTriangle = false;
            console.log("Now drawing circles");

            // Add the circle class and remove the triangle class
            $("#shape1").addClass("circle");
            $("#shape1").removeClass("triangle");
            $("#shape2").addClass("circle");
            $("#shape2").removeClass("triangle");
            $("#shape3").addClass("circle");
            $("#shape3").removeClass("triangle");
            $("#shape4").addClass("circle");
            $("#shape4").removeClass("triangle");
            $("#shape5").addClass("circle");
            $("#shape5").removeClass("triangle");
        }
    }

    // When the body is clicked, run the following
    $("body").click(function() {
        // Switch the shape that is being drawn
        switchShapes();
    });

    // Run the following when the mouse is moved
    $( document ).on( "mousemove", function( event ) {
        console.log("mouse moved");
        // If the shapes are going down, move the shapes down a set number of pixels
        if(goingDown) {
            // Change shape 1 position
            shape1Pos += 5;
            $("#shape1").css('top', shape1Pos);
            // Change shape 2 position
            shape2Pos += 15;
            $("#shape2").css('top', shape2Pos);
            // Change shape 3 position
            shape3Pos += 2;
            $("#shape3").css('top', shape3Pos);
            // Change shape 4 position
            shape4Pos += 13;
            $("#shape4").css('top', shape4Pos);
            // Change shape 5 position
            shape5Pos += 10;
            $("#shape5").css('top', shape5Pos);

            console.log(shape1Pos);
            // If a shape reaches 800px, switch to going up
            if(parseInt($("#shape2").css('top')) > 800) {
                console.log("Going up...");
                goingDown = false;
            }
        } else {
            // If the shapes aren't going down, move the shapes up a set number of pixels
            // Change shape 1 position
            shape1Pos -= 5;
            $("#shape1").css('top', shape1Pos);
            // Change shape 2 position
            shape2Pos -= 15;
            $("#shape2").css('top', shape2Pos);
            // Change shape 3 position
            shape3Pos -= 2;
            $("#shape3").css('top', shape3Pos);
            // Change shape 4 position
            shape4Pos -= 13;
            $("#shape4").css('top', shape4Pos);
            // Change shape 5 position
            shape5Pos -= 10;
            $("#shape5").css('top', shape5Pos);
            // If a shape reaches the nav bar, switch to going down
            if(parseInt($("#shape2").css('top')) < 65) {
                console.log("Going down...");
                goingDown = true;
            }
        }
    });
});