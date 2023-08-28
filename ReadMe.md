
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

        .submenu {
            display: none;
            margin-top: 20px;
        }

        .submenu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .submenu-header .close-button {
            font-size: 20px;
            color: #777;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="menu-container">
        <button id="play-button">Play</button>
        <button class="submenu-button" id="open-settings">Settings</button>
    </div>

    <div class="submenu" id="settings-menu">
        <div class="submenu-header">
            <span>Settings</span>
            <span class="close-button" id="close-settings">&#10006;</span>
        </div>
        <button class="submenu-button" id="open-audio">Audio</button>
        <button class="submenu-button" id="open-controls">Controls</button>
    </div>

    <div class="submenu" id="audio-menu">
        <div class="submenu-header">
            <span>Audio Settings</span>
            <span class="close-button" id="close-audio">&#10006;</span>
        </div>
        <label>Master Volume:</label>
        <input type="range" id="master-volume" min="0" max="100" value="50">
        <label>Music Volume:</label>
        <input type="range" id="music-volume" min="0" max="100" value="50">
        <label>Sound Effect Volume:</label>
        <input type="range" id="sound-effect-volume" min="0" max="100" value="50">
    </div>

    <div class="submenu" id="controls-menu">
        <div class="submenu-header">
            <span>Controls</span>
            <span class="close-button" id="close-controls">&#10006;</span>
        </div>
        <p>[ jump, left, right, shoot ]</p>
    </div>

    <script>
        function toggleMenu(menuId) {
            const menu = document.getElementById(menuId);
            menu.style.display = menu.style.display === "none" ? "block" : "none";
        }

        document.getElementById("open-settings").addEventListener("click", () => toggleMenu("settings-menu"));
        document.getElementById("close-settings").addEventListener("click", () => toggleMenu("settings-menu"));
        document.getElementById("open-audio").addEventListener("click", () => toggleMenu("audio-menu"));
        document.getElementById("close-audio").addEventListener("click", () => toggleMenu("audio-menu"));
        document.getElementById("open-controls").addEventListener("click", () => toggleMenu("controls-menu"));
        document.getElementById("close-controls").addEventListener("click", () => toggleMenu("controls-menu"));
    </script>
</body>
</html>
