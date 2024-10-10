
var bar1 = document.getElementById("bar1");
var x = 0;
var y = 0;

// Get the window width and height
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
// Set the initial speed and direction
let speed = 3;
let dx = 0;
let dy = 0;
  let scorem = 0;
document.addEventListener("keydown", function(event) {
    // Get the key code
    let key = event.keyCode;
    // Set the speed and direction based on the arrow keys
    if (key == 37) { // Left arrow

        dy = 0;


    } else if (key == 39) { // Right arrow

        dy = 0;


    }
    if (key == 38) { // Up arrow
                dx = 0;
                dy = -speed;

            }
         if (key == 40) { // Down arrow
                dx = 0;
                dy = +speed;

        }

});
// Add an event listener for keyup events
document.addEventListener("keyup", function(event) {
    // Stop the movement when the arrow keys are released
    dx = 0;
    dy = 0;
});
// Define a function to update the character position
function update() {
    // Get the current position of the character
    let x = bar1.offsetLeft;
    let y = bar1.offsetTop;
    // Add the speed and direction to the position
    x += dx;
    y += dy;
    // Wrap around the window edges
    if (x < 0) {
        x = windowWidth - bar1.offsetWidth;
    } else if (x > windowWidth - bar1.offsetWidth) {
        x = 0;
    }
    if (y < 0) {
        y = windowHeight - bar1.offsetHeight;
    } else if (y > windowHeight - bar1.offsetHeight) {
        y = 0;
    }





    // Set the new position of the character
    bar1.style.left = x + "px";
    bar1.style.top = y + "px";
    // Request the next animation frame
    requestAnimationFrame(update);
}
// Start the animation loop
update();


        var bar = document.getElementById('bar');


        // Move the bar left and right based on mouse movement
        document.addEventListener('mousemove', (e) => {
            const mouseY = e.clientY;
            bar.style.top = `${mouseY - bar.clientWidth / 2}px`;
            shootSound.play();
        });



