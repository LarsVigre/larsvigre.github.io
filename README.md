# larsvigre.github.io
<html>
  <head>
    <title>Physics Fight</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>

    <script>
      // Define the game canvas and 2D rendering context
      const canvas = document.getElementById('gameCanvas');
      const context = canvas.getContext('2d');

      // Player object
      function Player(x, y, width, height, speed, maxHealth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.health = maxHealth;
        this.maxHealth = maxHealth;
        this.reloadTime = 2000;
        this.isReloading = false;
        this.currentWeapon = null;
        this.points = 0;
        this.color = 'blue'; // Player color
        this.sprite = null; // Player sprite
      }

      Player.prototype.draw = function(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

        // Draw player sprite if available
        if (this.sprite) {
          context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }
      };

      // Weapon object
      function Weapon(name, damage, ammo, maxAmmo, reloadTime) {
        this.name = name;
        this.damage = damage;
        this.ammo = ammo;
        this.maxAmmo = maxAmmo;
        this.reloadTime = reloadTime;
        this.color = 'gray'; // Weapon color
        this.sprite = null; // Weapon sprite
      }

      Weapon.prototype.draw = function(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

        // Draw weapon sprite if available
        if (this.sprite) {
          context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }
      };

      // Health bar object
      function HealthBar(player, x, y, width, height) {
        this.player = player;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }

      HealthBar.prototype.draw = function(context) {
        const healthPercentage = this.player.health / this.player.maxHealth;
        const barWidth = healthPercentage * this.width;

        // Draw health bar background
        context.fillStyle = 'gray';
        context.fillRect(this.x, this.y, this.width, this.height);

        // Draw health bar
        context.fillStyle = 'green';
        context.fillRect(this.x, this.y, barWidth, this.height);
      };

      // Reload bar object
      function ReloadBar(player, x, y, width, height) {
        this.player = player;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }

      ReloadBar.prototype.draw = function(context) {
        const reloadPercentage = this.player.isReloading ? 1 - (this.player.reloadTime / this.player.currentWeapon.reloadTime) : 0;
        const barWidth = reloadPercentage * this.width;

        // Draw reload bar background
        context.fillStyle = 'gray';
        context.fillRect(this.x, this.y, this.width, this.height);

        // Draw reload bar
        context.fillStyle = 'orange';
        context.fillRect(this.x, this.y, barWidth, this.height);
      };

      // Platform object
      function Platform(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
      }

      Platform.prototype.draw = function(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
      };

      // World generation
      function generateWorld() {
        const platforms = [];

        // Generate platforms randomly
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * (canvas.width - 100);
          const y = Math.random() * (canvas.height - 30);
          const width = Math.random() * 100 + 50;
          const height = 20;
          const color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
          platforms.push(new Platform(x, y, width, height, color));
        }

        return platforms;
      }

      // Spawning positions for the players
      const player1SpawnX = 100;
      const player1SpawnY = canvas.height - 100;
      const player2SpawnX = canvas.width - 150;
      const player2SpawnY = canvas.height - 100;

      // Create player instances with health bars, reload bars, weapons, points, colors, and sprites
      const player1 = new Player(player1SpawnX, player1SpawnY, 50, 50, 5, 100);
      player1.healthBar = new HealthBar(player1, 10, 10, 100, 10);
      player1.reloadBar = new ReloadBar(player1, 10, 25, 100, 10);
      player1.pointsDisplay = createPointsDisplay(10, 40);
      player1.color = 'blue'; // Set player 1 color
      player1.sprite = player1Sprite; // Set player 1 sprite

      const player2 = new Player(player2SpawnX, player2SpawnY, 50, 50, 5, 100);
      player2.healthBar = new HealthBar(player2, 690, 10, 100, 10);
      player2.reloadBar = new ReloadBar(player2, 690, 25, 100, 10);
      player2.pointsDisplay = createPointsDisplay(690, 40);
      player2.color = 'red'; // Set player 2 color
      player2.sprite = player2Sprite; // Set player 2 sprite

      // Available weapons
      const weapons = {
        pistol: new Weapon('pistol', 10, 10, 10, 1000),
        smg: new Weapon('smg', 5, 30, 30, 500),
        shotgun: new Weapon('shotgun', 15, 5, 5, 3000),
        bazooka: new Weapon('bazooka', 30, 3, 3, 5000),
        flamethrower: new Weapon('flamethrower', 5, 50, 50, 200),
        cage: new Weapon('cage', 0, 1, 1, 1000),
        wand: new Weapon('wand', 20, 20, 20, 1500)
      };

      // Set colors and sprites for weapons
      weapons.pistol.color = 'gray';
      weapons.pistol.sprite = pistolSprite;

      weapons.smg.color = 'lightblue';
      weapons.smg.sprite = smgSprite;

      weapons.shotgun.color = 'brown';
      weapons.shotgun.sprite = shotgunSprite;

      weapons.bazooka.color = 'darkgray';
      weapons.bazooka.sprite = bazookaSprite;

      weapons.flamethrower.color = 'orange';
      weapons.flamethrower.sprite = flamethrowerSprite;

      weapons.cage.color = 'lightgreen';
      weapons.cage.sprite = cageSprite;

      weapons.wand.color = 'purple';
      weapons.wand.sprite = wandSprite;

      // Points display object
      function createPointsDisplay(x, y) {
        return {
          x,
          y,
          width: 100,
          height: 20,
          draw: function(context, points) {
            context.font = '16px Arial';
            context.fillStyle = 'black';
            context.fillText(`Points: ${points}`, this.x, this.y);
          }
        };
      }

      // Generate platforms
      const platforms = generateWorld();

      // Render function
      function render() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Render platforms
        platforms.forEach(platform => platform.draw(context));

        // Render players
        player1.draw(context);
        player2.draw(context);

        // Render weapons
        for (let weapon in weapons) {
          weapons[weapon].draw(context);
        }

        // Render health bars
        player1.healthBar.draw(context);
        player2.healthBar.draw(context);

        // Render reload bars
        player1.reloadBar.draw(context);
        player2.reloadBar.draw(context);

        // Render points display
        player1.pointsDisplay.draw(context, player1.points);
        player2.pointsDisplay.draw(context, player2.points);

        // Request the next animation frame
        requestAnimationFrame(render);
      }

      // Start the game loop
      requestAnimationFrame(render);
    </script>
  </body>
</html>
