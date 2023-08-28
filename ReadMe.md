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

        .submenu-button {
            display: block;
            margin: 10px auto;
            padding: 5px 10px;
            font-size: 14px;
            background-color: #ccc;
            border: none;
            color: #333;
            border-radius: 3px;
            cursor: pointer;
        }

        .submenu-button:hover {
            background-color: #bbb;
        }

        .volume-controls {
            display: none;
            margin-top: 20px;
        }

        .controls-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 2;
        }

        .controls-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            max-width: 300px;
        }

        .controls-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .close-button {
            font-size: 20px;
            color: #777;
            cursor: pointer;
        }

        .settings-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 2;
        }

        .settings-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            max-width: 300px;
        }
    </style>
</head>
<body>
    <div class="menu-container">
        <button id="play-button">Play</button>
        <button class="submenu-button" id="open-settings">Settings</button>
    </div>

    <div class="settings-menu" id="settings-menu">
        <div class="settings-box">
            <button class="submenu-button" id="open-audio-settings">Audio</button>
            <button class="submenu-button" id="open-controls">Controls</button>
            <button class="submenu-button" id="close-settings">&#10006; Close Settings</button>
        </div>
    </div>

    <div class="volume-controls" id="audio-settings">
        <label>Master Volume:</label>
        <input type="range" id="master-volume" min="0" max="100" value="50">
        <label>Music Volume:</label>
        <input type="range" id="music-volume" min="0" max="100" value="50">
        <label>Sound Effect Volume:</label>
        <input type="range" id="sound-effect-volume" min="0" max="100" value="50">
    </div>

    <div class="controls-menu" id="controls-menu">
        <div class="controls-box">
            <div class="controls-header">
                <span>Controls</span>
                <span class="close-button" id="close-controls">&#10006;</span>
            </div>
            <p>[ jump, left, right, shoot ]</p>
        </div>
    </div>

    <script>
        const settingsMenu = document.getElementById("settings-menu");
        const openSettingsButton = document.getElementById("open-settings");
        const closeSettingsButton = document.getElementById("close-settings");
        const openAudioSettingsButton = document.getElementById("open-audio-settings");
        const audioSettings = document.getElementById("audio-settings");
        
        openSettingsButton.addEventListener("click", function () {
            settingsMenu.style.display = "block";
        });

        closeSettingsButton.addEventListener("click", function () {
            settingsMenu.style.display = "none";
        });

        openAudioSettingsButton.addEventListener("click", function () {
            audioSettings.style.display = "block";
        });

        const controlsMenu = document.getElementById("controls-menu");
        const closeControlsButton = document.getElementById("close-controls");
        const openControlsButton = document.getElementById("open-controls");

        openControlsButton.addEventListener("click", function () {
            controlsMenu.style.display = "block";
        });

        closeControlsButton.addEventListener("click", function () {
            controlsMenu.style.display = "none";
        });
    </script>
</body>
</html>
