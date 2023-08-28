<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Menu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }

        .menu-container {
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }

        button {
            display: block;
            margin: 10px auto;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #3498db;
            border: none;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2980b9;
        }

        .volume-controls {
            margin-top: 20px;
        }

        label, input {
            display: block;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="menu-container">
        <button id="play-button">Play</button>
        <div class="volume-controls">
            <label>Master Volume:</label>
            <input type="range" id="master-volume" min="0" max="100" value="50">
            <label>Music Volume:</label>
            <input type="range" id="music-volume" min="0" max="100" value="50">
            <label>Sound Effect Volume:</label>
            <input type="range" id="sound-effect-volume" min="0" max="100" value="50">
        </div>
        <button id="controls-button">Controls</button>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const playButton = document.getElementById("play-button");
            const masterVolumeInput = document.getElementById("master-volume");
            const musicVolumeInput = document.getElementById("music-volume");
            const soundEffectVolumeInput = document.getElementById("sound-effect-volume");
            const controlsButton = document.getElementById("controls-button");

            playButton.addEventListener("click", function () {
                // Code to open the game goes here
                alert("Starting the game!");
            });

            masterVolumeInput.addEventListener("input", function () {
                // Code to adjust the master volume goes here
                const volumeLevel = masterVolumeInput.value;
                // Update the volume settings or perform any necessary actions
            });

            musicVolumeInput.addEventListener("input", function () {
                // Code to adjust the music volume goes here
                const volumeLevel = musicVolumeInput.value;
                // Update the volume settings or perform any necessary actions
            });

            soundEffectVolumeInput.addEventListener("input", function () {
                // Code to adjust the sound effects volume goes here
                const volumeLevel = soundEffectVolumeInput.value;
                // Update the volume settings or perform any necessary actions
            });

            controlsButton.addEventListener("click", function () {
                // Code to open the controls settings goes here
                alert("Opening controls settings");
            });
        });
    </script>
</body>
</html>
