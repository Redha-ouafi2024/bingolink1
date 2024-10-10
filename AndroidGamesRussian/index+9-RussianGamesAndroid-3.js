


        // Initialize character position
        let characterX = 200;
        let characterY = 360;

// Get the window width and height

// Set the initial speed and direction


        // Update character position based on button clicks
        function moveCharacter(direction) {
            switch (direction) {
                case 'up':
                    characterX -= 10;

                    pass1Sound.play();

                    break;
                case 'down':
                    characterX += 10;
                    shootSound.play();

                    break;
                case 'left':
                    characterX -= 20;
                    movSound.play();

       break;


                case 'right':
                    characterX += 20;
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


