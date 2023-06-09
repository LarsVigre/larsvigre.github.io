<!DOCTYPE html>
<html>
<head>
    <title>2D Platformer Game</title>
    <style>
        #gameCanvas {
            background-color: #000000;
        }
        #healthBarContainer {
            position: absolute;
            top: 10px;
            left: 10px;
        }
        #healthBarContainer2 {
            position: absolute;
            top: 10px;
            right: 10px;
        }
        .healthBar {
            width: 100px;
            height: 20px;
            background-color: #FF0000;
            border: 2px solid #FFFFFF;
        }
        .healthBarFill {
            width: 100%;
            height: 100%;
            background-color: #00FF00;
        }
    </style>
</head>
<body>
    <div id="healthBarContainer">
        <div id="healthBar1" class="healthBar">
            <div id="healthBarFill1" class="healthBarFill"></div>
        </div>
    </div>
    <div id="healthBarContainer2">
        <div id="healthBar2" class="healthBar">
            <div id="healthBarFill2" class="healthBarFill"></div>
        </div>
    </div>
    <canvas id="gameCanvas" width="800" height="400"></canvas>
    <script>
        window.onload = function() {
            var canvas = document.getElementById("gameCanvas");
            var ctx = canvas.getContext("2d");

            // Player objects
            var player1 = createPlayer("https://cdn.imgbin.com/7/21/9/imgbin-terraria-super-mario-bros-super-mario-world-sprite-video-game-sprite-H9K3NLYGJ7t6JQW83zEyqNAq3.jpg", 50, canvas.height - 150);
            var player2 = createPlayer("https://cdn.imgbin.com/7/21/9/imgbin-terraria-super-mario-bros-super-mario-world-sprite-video-game-sprite-H9K3NLYGJ7t6JQW83zEyqNAq3.jpg", canvas.width - 100, canvas.height - 150);

            // Floor object
            var floor = {
                sprite: new Image(),
                x: 0,
                y: canvas.height - 50,
                width: canvas.width,
                height: 50
            };
            floor.sprite.src = "https://art.pixilart.com/60b489d89a36e4b.png";

            // Health bars
            var healthBar1 = document.getElementById("healthBarFill1");
            var healthBar2 = document.getElementById("healthBarFill2");

            // Keyboard input handling
            var keysPlayer1 = {};
            var keysPlayer2 = {};

            document.addEventListener("keydown", function(e) {
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
            });

            document.addEventListener("keyup", function(e) {
                if (e.key === "ArrowUp") {
                    delete keysPlayer2["up"];
                }
                if (e.key === "ArrowLeft") {
                    delete keysPlayer2["left"];
                }
                if (e.key === "ArrowRight") {
                    delete keysPlayer2["right"];
                }
                if (e.key === "ArrowDown") {
                    delete keysPlayer2["down"];
                }
                if (e.key === "w") {
                    delete keysPlayer1["up"];
                }
                if (e.key === "a") {
                    delete keysPlayer1["left"];
                }
                if (e.key === "d") {
                    delete keysPlayer1["right"];
                }
                if (e.key === "s") {
                    delete keysPlayer1["down"];
                }
            });

            // Player creation function
            function createPlayer(spriteUrl, x, y) {
                var player = {
                    sprite: new Image(),
                    x: x,
                    y: y,
                    width: 50,
                    height: 50,
                    speed: 5,
                    jumping: false,
                    jumpHeight: 12,
                    gravity: 0.6,
                    velocityY: 0,
                    health: 100,
                    maxHealth: 100
                };
                player.sprite.src = spriteUrl;
                return player;
            }

            // Check collision between two rectangles
            function checkCollision(rect1, rect2) {
                return rect1.x < rect2.x + rect2.width &&
                       rect1.x + rect1.width > rect2.x &&
                       rect1.y < rect2.y + rect2.height &&
                       rect1.y + rect1.height > rect2.y;
            }

            // Game update loop
            function update() {
                // Player 1 movement
                if (keysPlayer1["left"]) {
                    player1.x -= player1.speed;
                }
                if (keysPlayer1["right"]) {
                    player1.x += player1.speed;
                }
                if (keysPlayer1["up"] && !player1.jumping) {
                    player1.velocityY -= player1.jumpHeight;
                    player1.jumping = true;
                }
                if (keysPlayer1["down"]) {
                    // Add any additional downward movement logic for Player 1 here
                }

                // Player 2 movement
                if (keysPlayer2["left"]) {
                    player2.x -= player2.speed;
                }
                if (keysPlayer2["right"]) {
                    player2.x += player2.speed;
                }
                if (keysPlayer2["up"] && !player2.jumping) {
                    player2.velocityY -= player2.jumpHeight;
                    player2.jumping = true;
                }
                if (keysPlayer2["down"]) {
                    // Add any additional downward movement logic for Player 2 here
                }

                // Apply gravity to Player 1
                player1.velocityY += player1.gravity;
                player1.y += player1.velocityY;

                // Apply gravity to Player 2
                player2.velocityY += player2.gravity;
                player2.y += player2.velocityY;

                // Floor collision detection for Player 1
                if (player1.y + player1.height > floor.y) {
                    player1.y = floor.y - player1.height;
                    player1.jumping = false;
                    player1.velocityY = 0;
                }

                // Floor collision detection for Player 2
                if (player2.y + player2.height > floor.y) {
                    player2.y = floor.y - player2.height;
                    player2.jumping = false;
                    player2.velocityY = 0;
                }

                // Collision detection between players
                if (checkCollision(player1, player2)) {
                    // Handle collision logic between players here
                    // For example, reduce health or push players apart
                }

                // Update health bars
                healthBar1.style.width = (player1.health / player1.maxHealth) * 100 + "%";
                healthBar2.style.width = (player2.health / player2.maxHealth) * 100 + "%";

                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw floor
                ctx.drawImage(floor.sprite, floor.x, floor.y, floor.width, floor.height);

                // Draw Player 1
                ctx.drawImage(player1.sprite, player1.x, player1.y, player1.width, player1.height);

                // Draw Player 2
                ctx.drawImage(player2.sprite, player2.x, player2.y, player2.width, player2.height);

                // Call update function again
                requestAnimationFrame(update);
            }

            // Start the game loop
            update();
        };
    </script>
</body>
</html>
