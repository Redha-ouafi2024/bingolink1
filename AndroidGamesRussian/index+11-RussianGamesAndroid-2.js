

                const characterb = document.getElementById('characterb');
                const characterm = document.getElementById('characterm');
        const gameContainer1 = document.getElementById('game-container1');
        let mouseX, mouseY;
        let bullets = [];



        // Update character position based on mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            updateCharacterbPosition();
        });

               // Update character position based on mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            updateCharactermPosition();
        });


       // Shoot bullets on mouse click


        // Update character position
        function updateCharacterbPosition() {
            const dx = mouseX - characterb.offsetLeft;
            const dy = mouseY - characterb.offsetTop;
            const angle = Math.atan2(dy, dx);
            characterb.style.transform = `rotate(${angle}rad)`;
        }

             // Update character position
        function updateCharactermPosition() {
            const dx = mouseX - characterm.offsetLeft;
            const dy = mouseY - characterm.offsetTop;
            const angle = Math.atan2(dy, dx);
            characterm.style.transform = `rotate(${angle}rad)`;
        }




               // Update score and check if game should end
        function updateScore() {
            score += 1; // Adjust as needed

                                    pass1Sound.play();
                         scoreElement.innerHTML = "Score: " + score;

            if (score >= 100) {
                // Redirect to a URL when score reaches 100
                window.location.href = 'https://example.com'; // Replace with your desired URL
            }
        }




        // Game loop (not implemented yet)
        function gameLoop() {
            // Update enemies' movement
            // Check collision
            // Update score
            // ...
        }
        // Start the game loop
        setInterval(gameLoop, 100); // Adjust the interval as needed



               // Background vcam movement
        let vcamPosition = 0;
        const vcam = document.getElementById('game-container');
        setInterval(() => {
            vcamPosition += 10; // Adjust the speed as needed
            vcam.style.backgroundPositionX = vcamPosition + 'px';
        }, 20);





