# larsvigre.github.io
<!DOCTYPE html>
<html>
<head>
    <title>Knappe kamp</title>
    <style>
        #logo {
            text-align: center;
            font-size: 50px;
            background-color: rgb(22, 206, 206);
        }
        #knapp1 {
            background-color: green;
            color: white;
            font-size: 40px;
        }
        #knapp2 {
            background-color: red;
            color: white;
            font-size: 40px;
        }
        #knapp_A {
            background-color: green;
            color: white;
            font-size: 40px;
        }
        #knapp_B {
            background-color: red;
            color: white;
            font-size: 40px;
        }
        #lead {
            font-size: 24px;
        }
        body {
            background: linear-gradient(to bottom, #00ffff, #6bff60, #1900ff);
        }
    </style>
</head>
<body>
    <h1 id="logo">Knappe kamp</h1>

    <button id="knapp1" onclick="incrementCount1()">Lag A</button>
    <button id="knapp2" onclick="incrementCount2()">Lag B</button>

    <button id="knapp_A" class="hidden" onclick="incrementCount1()">Trykk for lag A</button>
    <button id="knapp_B" class="hidden" onclick="incrementCount2()">Trykk for lag B</button>

    <p>Poeng lag A: <span id="count1">0</span></p>
    <p>Poeng lag B: <span id="count2">0</span></p>
    <p id="lead">Det er uavgjort</p>

    <script>
        let count1 = 0;
        let count2 = 0;

        function incrementCount1() {
            count1++;
            document.getElementById("count1").innerHTML = count1;
            updateLead();
        }

        function incrementCount2() {
            count2++;
            document.getElementById("count2").innerHTML = count2;
            updateLead();
        }

        function updateLead() {
            let lead = '';
            let diff = count1 - count2;
            if (diff > 0) {
                lead = 'Lag A leder med ' + diff + ' poeng';
            } else if (diff < 0) {
                lead = 'Lag B leder med ' + Math.abs(diff) + ' poeng';
            } else {
                lead = 'Det er uavgjort';
            }
            document.getElementById("lead").innerHTML = lead;
        }
    </script>
</body>
</html>
