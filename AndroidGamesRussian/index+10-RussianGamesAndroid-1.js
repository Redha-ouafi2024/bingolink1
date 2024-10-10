
        const character = document.getElementById('character');
        const gameContainer = document.getElementById('game-container');

                            const shootSound = document.getElementById('shootSound');
const movSound = document.getElementById('movSound');
const passSound = document.getElementById('passSound');
const pass1movSound = document.getElementById('pass1Sound');
const introSound = document.getElementById('introSound');
const hitSound = document.getElementById('hitSound');




                 var score = 0;
    var scoreElement = document.createElement("div");
    scoreElement.style.position = "absolute";
    scoreElement.style.top = "100px";
    scoreElement.style.left = "60px";
    scoreElement.style.fontSize = "24px";
    scoreElement.style.color = "white";
    scoreElement.innerHTML = "Score: " + score;

    document.body.appendChild(scoreElement);
        // Initialize character position
        let characterY = gameContainer.clientHeight / 1.3;
        character.style.top = characterY + 'px';
        character.style.backgroundImage = "url('truck1.png')";


        // Listen for mouse movement
        gameContainer.addEventListener('mousemove', (e) => {
            characterX = e.clientX - gameContainer.getBoundingClientRect().top;
            character.style.left = characterX + 'px';
            character.style.backgroundImage = "url('truck1.png')";
            movSound.play();

        });




        // Listen for mouse click to shoot bullets
        gameContainer.addEventListener('click', shootBullet);

        // Create a bullet
        function shootBullet() {
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            bullet.style.left = character.getBoundingClientRect().left + 'px';
            bullet.style.top = characterY + 'px';
            gameContainer.appendChild(bullet);
            character.style.backgroundImage = "url('truck2.png')";
            passSound.play();
            // Move the bullet
            const bulletMoveInterval = setInterval(() => {
                const bulletY = parseFloat(bullet.style.top);
                bullet.style.top = (bulletY - 4) + 'px';
                // Check collision with enemies
                const enemies = document.querySelectorAll('.enemy');
                enemies.forEach((enemy) => {
                    if (checkCollision(bullet, enemy)) {
                        enemy.remove();
                        bullet.remove();

                        score += 1;
                        pass1Sound.play();
                        character.style.backgroundImage = "url('truck1.png')";
                         scoreElement.innerHTML = "Score: " + score;
                        if (score === 10) {
                            window.location.href = "index+10.html";

                        }
                    }

                });
                // Remove bullet when it goes out of the game container
                if (bulletX > gameContainer.clientWidth) {
                    bullet.remove();

                }
            }, 10);
        }
        // Create random enemies
        setInterval(() => {
            const enemy = document.createElement('div');
            enemy.className = 'enemy';
            enemy.style.top = gameContainer.clientWidth - 'px';
            enemy.style.left = Math.random() * (gameContainer.clientHeight - 20) + 'px';
            gameContainer.appendChild(enemy);
        }, 2000);
        // Check collision between two elements
        function checkCollision(a, b) {
            const aRect = a.getBoundingClientRect();
            const bRect = b.getBoundingClientRect();
            return !(aRect.right < bRect.left || aRect.left > bRect.right || aRect.bottom < bRect.top || aRect.top > bRect.bottom);
        }



