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
	.hidden {
		  display: none;
		}
  </style>
</head>
<body>
  <h1 id="logo">Knappe kamp</h1>

  <button id="knapp1" onclick="visKnapp(1)">Lag A</button>
  <button id="knapp2" onclick="visKnapp(2)">Lag B</button>

  <button id="knapp_A" class="hidden" onclick="incrementCount(1)">Trykk for lag A</button>
  <button id="knapp_B" class="hidden" onclick="incrementCount(2)">Trykk for lag B</button>

  <p>Poeng lag A: <span id="count1">0</span></p>
  <p>Poeng lag B: <span id="count2">0</span></p>
  <p id="lead">Det er uavgjort</p>

  <script>
    let count1 = parseInt(localStorage.getItem("count1")) || 0;
    let count2 = parseInt(localStorage.getItem("count2")) || 0;

    function incrementCount(team) {
      if (team === 1) {
        count1++;
        document.getElementById("count1").innerHTML = count1;
      } else if (team === 2) {
        count2++;
        document.getElementById("count2").innerHTML = count2;
      }
      updateLead();
      saveCountsToLocalStorage();
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

    function saveCountsToLocalStorage() {
      localStorage.setItem("count1", count1);
      localStorage.setItem("count2", count2);
    }

    function visKnapp(valgtKnapp) {
      var knapp1 = document.getElementById("knapp1");
      var knapp2 = document.getElementById("knapp2");
      var visKnapp1 = document.getElementById("knapp_A");
      var visKnapp2 = document.getElementById("knapp_B");

      if (valgtKnapp === 1) {
        knapp1.style.display = "none";
        knapp2.style.display = "none";
        visKnapp1.style.display = "inline-block";
        visKnapp2.style.display = "none";
      } else if (valgtKnapp === 2) {
        knapp1.style.display = "none";
        knapp2.style.display = "none";
        visKnapp1.style.display = "none";
        visKnapp2.style.display = "inline-block";
      }
    }

    document.getElementById("count1").innerHTML = count1;
    document.getElementById("count2").innerHTML = count2;
    updateLead();
  </script>
  	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
	<p>ㅤ</p>
</body>
</html>
