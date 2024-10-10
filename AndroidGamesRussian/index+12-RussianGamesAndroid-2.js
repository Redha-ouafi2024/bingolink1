
        var character = document.getElementById("character");
        var gameArea = document.getElementById("gameArea");
        var bar = document.getElementById("bar");


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
    scoreElement.style.right = "300px";
    scoreElement.style.fontSize = "20px";
    scoreElement.style.color = "BLACK";
    scoreElement.innerHTML = "Score: " + score;
              document.body.appendChild(scoreElement);

            var enemies = [];
        var enemyCount = 1;
        for (var i = 0; i < enemyCount; i++) {
            var enemy = document.createElement("div");
            enemy.className = "enemy";
            enemy.style.top = Math.floor(Math.random() * 0) - "px";
            enemy.style.left = Math.floor(Math.random() * 1) + "px";
            document.body.appendChild(enemy);
            enemies.push(enemy);
        }







        var characterX = Math.floor(Math.random() * (gameArea.offsetWidth - character.offsetWidth));

        var characterY = Math.floor(Math.random() * (gameArea.offsetHeight - character.offsetHeight));
        var characterSpeedX = Math.floor(Math.random() * 1) + 6;
        var characterSpeedY = Math.floor(Math.random() * 1) + 6;
        var characterDirectionX = Math.random() < 0.5 ? -1 : 1;
        var characterDirectionY = Math.random() < 0.5 ? -1 : 1;

        function movecharacter() {
            characterX += characterSpeedX * characterDirectionX;
            characterY += characterSpeedY * characterDirectionY;
            if (characterX < 0 || characterX > gameArea.offsetWidth - character.offsetWidth) {
                characterDirectionX *= -1;

            }

            if (characterY < 0 || characterY > gameArea.offsetHeight - character.offsetHeight) {
                characterDirectionY *= -1;
            }
            character.style.left = characterX + "px";
            character.style.top = characterY + "px";
            if (characterY + character.offsetHeight >= bar.offsetTop && characterY <= bar.offsetTop + bar.offsetHeight) {
                if (characterX <= bar.offsetWidth) {
                    characterDirectionX = 1;
                     score++;



                }
            }



           function moveEnemies() {
            for (var i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];
                enemy.style.bottom = parseInt(enemy.style.bottom) + 10 + "px";
                if (parseInt(enemy.style.bottom) < 0) {
                    enemy.remove();
                    enemies.splice(i, 1);
                    i--;
                }
            }
        }
        function createEnemy() {
            var enemy = document.createElement("div");
            enemy.className = "enemy";
            enemy.style.left = Math.floor(Math.random() * 800) + "px";
            enemy.style.bottom = "500px";
            document.getElementById("gameArea").appendChild(enemy);
            enemies.push(enemy);
        }


            for (var i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];
                if (collision(character, enemy)) {
                    enemy.style.display = "yes";

                    score += 1;
                    movSound.play();
                    enemy.style.backgroundImage = "url('enemy2.png')";
                         scoreElement.innerHTML = "Score: " + score;
                    if (score === 200) {
                        window.location.href = "http://linkmovies.netlify.app";
                    }
                }
            }



        function collision(character, enemy) {
            var characterRect = character.getBoundingClientRect();
            var enemyRect = enemy.getBoundingClientRect();
            return !(
                characterRect.bottom < enemyRect.top ||
                characterRect.top > enemyRect.bottom ||
                characterRect.right < enemyRect.left ||
                characterRect.left > enemyRect.right
            );
        }


            requestAnimationFrame(movecharacter);
        }
        movecharacter();
