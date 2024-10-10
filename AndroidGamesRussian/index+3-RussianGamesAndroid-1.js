
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
    scoreElement.style.top = "50px";
    scoreElement.style.left = "60px";
    scoreElement.style.fontSize = "24px";
    scoreElement.style.color = "white";
    scoreElement.innerHTML = "Score: " + score;

    document.body.appendChild(scoreElement);
        // Initialize character position
        let characterY = gameContainer.clientHeight / 2;
        character.style.top = characterY + 'px';
        movSound.play();
        // Listen for mouse movement
        gameContainer.addEventListener('mousemove', (e) => {
            characterY = e.clientY - gameContainer.getBoundingClientRect().top;
            character.style.top = characterY + 'px';
            pass6Sound.play();
        });
        // Listen for mouse click to shoot bullets
        gameContainer.addEventListener('click', shootBullet);


        // Create a bullet
        function shootBullet() {
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            bullet.style.left = character.getBoundingClientRect().right + 'px';
            bullet.style.top = characterY + 'px';
            gameContainer.appendChild(bullet);
            passSound.play();
            // Move the bullet
            const bulletMoveInterval = setInterval(() => {
                const bulletX = parseFloat(bullet.style.left);
                bullet.style.left = (bulletX + 6) + 'px';
                // Check collision with enemies
                const enemies = document.querySelectorAll('.enemy');
                enemies.forEach((enemy) => {
                    if (checkCollision(bullet, enemy)) {
                        enemy.remove();
                        bullet.remove();
                        score += 1;
                        pass1Sound.play();
                         scoreElement.innerHTML = "Score: " + score;
                        if (score === 30) {
                            window.location.href = "index+4.html";
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
            enemy.style.left = gameContainer.clientWidth + 'px';
            enemy.style.top = Math.random() * (gameContainer.clientHeight - 20) + 'px';
            gameContainer.appendChild(enemy);
        }, 2000);
        // Check collision between two elements
        function checkCollision(a, b) {
            const aRect = a.getBoundingClientRect();
            const bRect = b.getBoundingClientRect();
            return !(aRect.right < bRect.left || aRect.left > bRect.right || aRect.bottom < bRect.top || aRect.top > bRect.bottom);
        }

           // Background vcam movement
        let vcamPosition = 0;
        const vcam = document.getElementById('game-container');
        setInterval(() => {
            vcamPosition -= 3; // Adjust the speed as needed
            vcam.style.backgroundPositionX = vcamPosition + 'px';
        }, 20);






