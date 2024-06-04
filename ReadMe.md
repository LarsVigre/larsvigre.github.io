<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Morse Code Transmitter</title>
</head>
<body>
    <h1>Web Morse Code Transmitter</h1>
    <input type="text" id="message" placeholder="Enter your message">
    <button onclick="sendMessage()">Send Message</button>
    
    <script>
        const morseCodeMap = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
            'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
            'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
            'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
            '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
        };

        function encodeToMorse(message) {
            return message.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
        }

        function sendMessage() {
            const message = document.getElementById('message').value;
            const morseCode = encodeToMorse(message);
            console.log('Morse Code:', morseCode);
            playMorseCode(morseCode);
        }

        function playMorseCode(morseCode) {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(20000, context.currentTime); // Set frequency to 20 kHz for audible tone
            oscillator.start();

            let time = context.currentTime;
            const unit = 0.1; // Duration of a dot

            for (const char of morseCode) {
                if (char === '.') {
                    oscillator.frequency.setValueAtTime(20000, time);
                    time += unit;
                } else if (char === '-') {
                    oscillator.frequency.setValueAtTime(20000, time);
                    time += 3 * unit;
                } else {
                    oscillator.frequency.setValueAtTime(0, time); // Turn off sound for space
                    time += unit;
                }
                time += unit; // Space between dots and dashes
            }

            oscillator.stop(time);
            oscillator.connect(context.destination);
        }
    </script>
</body>
</html>
