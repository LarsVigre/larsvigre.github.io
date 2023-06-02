# larsvigre.github.io
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
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

<button id="knapp1" onclick="incrementCount(1)">Lag A</button>
<button id="knapp2" onclick="incrementCount(2)">Lag B</button>

<p>Poeng lag A: <span id="count1">0</span></p>
<p>Poeng lag B: <span id="count2">0</span></p>
<p id="lead">Det er uavgjort</p>

<script>
    let count1 = 0;
    let count2 = 0;

    function incrementCount(team) {
        fetch('/api/increment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({team: team})
        })
            .then(response => response.json())
            .then(data => {
                count1 = data.count1;
                count2 = data.count2;
                updateCounts();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function updateCounts() {
        document.getElementById("count1").textContent = count1;
        document.getElementById("count2").textContent = count2;
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
        document.getElementById("lead").textContent = lead;
    }

    function fetchCounts() {
        fetch('/api/counts')
            .then(response => response.json())
            .then(data => {
                count1 = data.count1;
                count2 = data.count2;
                updateCounts();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    fetchCounts();
</script>
</body>
</html>
