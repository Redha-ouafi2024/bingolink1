


        // Initialize character position
        let characterX = 100;
        let characterY = 460;

// Get the window width and height

// Set the initial speed and direction


        // Update character position based on button clicks
        function moveCharacter(direction) {
            switch (direction) {
                case 'up':
                    characterY -= 10;
                    break;
                case 'down':
                    characterY += 10;
                    break;
                case 'left':
                    characterY -= 20;
                    movSound.play();

                 break;


                case 'right':
                    characterY += 20;
                    passSound.play();

                    break;

                case 'fire':
                    // Implement bullet firing logic here
                    console.log('Firing bullets!');

                 break;

            }
            updateCharacterPosition();
        }
        // Update character display
        function updateCharacterPosition() {
            const character = document.getElementById('character');
            character.style.left = characterX + 'px';
            character.style.top = characterY + 'px';
            const shootSound = document.getElementById('shootSound');
const movSound = document.getElementById('movSound');
const passSound = document.getElementById('passSound');
const pass1movSound = document.getElementById('pass1Sound');
const introSound = document.getElementById('introSound');
const hitSound = document.getElementById('hitSound');

        }
        // Event listeners for gamepad buttons
        document.getElementById('up').addEventListener('click', () => moveCharacter('up'));
        document.getElementById('down').addEventListener('click', () => moveCharacter('down'));
        document.getElementById('left').addEventListener('click', () => moveCharacter('left'));
        document.getElementById('right').addEventListener('click', () => moveCharacter('right'));
        document.getElementById('fire').addEventListener('click', () => moveCharacter('fire'));


