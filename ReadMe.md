<!DOCTYPE html>
<html>
<head>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="400"></canvas>
    <script>
        window.onload = function () {
            var canvas = document.getElementById("gameCanvas");
            var ctx = canvas.getContext("2d");

            var keysPlayer1 = {
                up: false,
                down: false,
                left: false,
                right: false
            };
            var keysPlayer2 = {
                up: false,
                down: false,
                left: false,
                right: false
            };

            var player1 = createPlayer("https://cdn.imgbin.com/7/21/9/imgbin-terraria-super-mario-bros-super-mario-world-sprite-video-game-sprite-H9K3NLYGJ7t6JQW83zEyqNAq3.jpg", 50, canvas.height - 100);
            var player2 = createPlayer("https://cdn.imgbin.com/7/21/9/imgbin-terraria-super-mario-bros-super-mario-world-sprite-video-game-sprite-H9K3NLYGJ7t6JQW83zEyqNAq3.jpg", canvas.width - 100, canvas.height - 100);

            var bullets = [];
            var bulletSpeed = 5;

            document.addEventListener("keydown", function (e) {
                if (e.key === "ArrowUp") {
                    keysPlayer2["up"] = true;
                }
                if (e.key === "ArrowLeft") {
                    keysPlayer2["left"] = true;
                }
                if (e.key === "ArrowRight") {
                    keysPlayer2["right"] = true;
                }
                if (e.key === "ArrowDown") {
                    keysPlayer2["down"] = true;
                }
                if (e.key === "w") {
                    keysPlayer1["up"] = true;
                }
                if (e.key === "a") {
                    keysPlayer1["left"] = true;
                }
                if (e.key === "d") {
                    keysPlayer1["right"] = true;
                }
                if (e.key === "s") {
                    keysPlayer1["down"] = true;
                }
                if (e.key === "r") {
                    shootBullet(player1);
                }
                if (e.key === "n") {
                    shootBullet(player2);
                }
            });

            document.addEventListener("keyup", function (e) {
                if (e.key === "ArrowUp") {
                    keysPlayer2["up"] = false;
                }
                if (e.key === "ArrowLeft") {
                    keysPlayer2["left"] = false;
                }
                if (e.key === "ArrowRight") {
                    keysPlayer2["right"] = false;
                }
                if (e.key === "ArrowDown") {
                    keysPlayer2["down"] = false;
                }
                if (e.key === "w") {
                    keysPlayer1["up"] = false;
                }
                if (e.key === "a") {
                    keysPlayer1["left"] = false;
                }
                if (e.key === "d") {
                    keysPlayer1["right"] = false;
                }
                if (e.key === "s") {
                    keysPlayer1["down"] = false;
                }
            });

            function createPlayer(spriteUrl, x, y) {
                var player = {
                    sprite: new Image(),
                    x: x,
                    y: y,
                    width: 50,
                    height: 50,
                    speed: 5,
                    jumpHeight: 10,
                    gravity: 0.5,
                    velocityY: 0,
                    jumping: false,
                    health: 100,
                    maxHealth: 100,
                    score: 0
                };
                player.sprite.src = spriteUrl;
                return player;
            }

            function shootBullet(player) {
                var bullet = {
                    x: player.x + player.width / 2 - 5,
                    y: player.y + player.height / 2 - 5,
                    width: 10,
                    height: 10,
                    speedX: 0,
                    speedY: 0,
                    shooter: player
                };

                var lastMovement = player.lastMovement;
                if (lastMovement === "up") {
                    bullet.speedY = -bulletSpeed;
                } else if (lastMovement === "down") {
                    bullet.speedY = bulletSpeed;
                } else if (lastMovement === "left") {
                    bullet.speedX = -bulletSpeed;
                } else if (lastMovement === "right") {
                    bullet.speedX = bulletSpeed;
                }

                bullets.push(bullet);
            }

            function checkCollision(obj1, obj2) {
                return (
                    obj1.x < obj2.x + obj2.width &&
                    obj1.x + obj1.width > obj2.x &&
                    obj1.y < obj2.y + obj2.height &&
                    obj1.y + obj1.height > obj2.y
                );
            }

            function updatePlayer(player, keys) {
                if (keys["up"] && !player.jumping) {
                    player.velocityY -= player.jumpHeight;
                    player.jumping = true;
                }
                if (keys["left"]) {
                    player.x -= player.speed;
                    player.lastMovement = "left";
                }
                if (keys["right"]) {
                    player.x += player.speed;
                    player.lastMovement = "right";
                }
                if (keys["down"]) {
                    player.y += player.speed;
                    player.lastMovement = "down";
                }

                // Apply gravity
                player.velocityY += player.gravity;
                player.y += player.velocityY;
                player.jumping = true;

                // Check collision with floor
                if (player.y + player.height > canvas.height - 50) {
                    player.y = canvas.height - 50 - player.height;
                    player.velocityY = 0;
                    player.jumping = false;
                }

                // Check collision with walls
                if (player.x < 0) {
                    player.x = 0;
                }
                if (player.x + player.width > canvas.width) {
                    player.x = canvas.width - player.width;
                }
            }

            function updateBullets() {
                for (var i = 0; i < bullets.length; i++) {
                    var bullet = bullets[i];
                    bullet.x += bullet.speedX;
                    bullet.y += bullet.speedY;

                    // Check collision with players
                    if (bullet.shooter === player1) {
                        if (checkCollision(bullet, player2)) {
                            player2.health -= 10;
                            if (player2.health <= 0) {
                                player1.score++;
                                player1.health = player1.maxHealth;
                                player2.health = player2.maxHealth;
                            }
                            bullets.splice(i, 1);
                            i--;
                            continue;
                        }
                    } else if (bullet.shooter === player2) {
                        if (checkCollision(bullet, player1)) {
                            player1.health -= 10;
                            if (player1.health <= 0) {
                                player2.score++;
                                player1.health = player1.maxHealth;
                                player2.health = player2.maxHealth;
                            }
                            bullets.splice(i, 1);
                            i--;
                            continue;
                        }
                    }

                    // Check if bullet is out of bounds
                    if (
                        bullet.x < 0 ||
                        bullet.x > canvas.width ||
                        bullet.y < 0 ||
                        bullet.y > canvas.height
                    ) {
                        bullets.splice(i, 1);
                        i--;
                    }
                }
            }

            function drawPlayer(player) {
                ctx.drawImage(player.sprite, player.x, player.y, player.width, player.height);
            }

            function drawBullets() {
                for (var i = 0; i < bullets.length; i++) {
                    var bullet = bullets[i];
                    ctx.fillStyle = "black";
                    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
                }
            }

            function drawHealthBar(player, x, y) {
                ctx.fillStyle = "red";
                ctx.fillRect(x, y, 100, 10);
                ctx.fillStyle = "green";
                ctx.fillRect(x, y, (player.health / player.maxHealth) * 100, 10);
            }

            function drawScore() {
                ctx.font = "20px Arial";
                ctx.fillStyle = "black";
                ctx.fillText("Score: " + player1.score, 10, 30);
                ctx.fillText("Score: " + player2.score, canvas.width - 100, 30);
            }

            function update() {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Update players
                updatePlayer(player1, keysPlayer1);
                updatePlayer(player2, keysPlayer2);

                // Update bullets
                updateBullets();

                // Draw players
                drawPlayer(player1);
                drawPlayer(player2);

                // Draw bullets
                drawBullets();

                // Draw health bars
                drawHealthBar(player1, 10, 10);
                drawHealthBar(player2, canvas.width - 110, 10);

                // Draw score
                drawScore();

                requestAnimationFrame(update);
            }

            update();
        };
    </script>
</body>
</html>
