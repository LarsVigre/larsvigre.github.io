# larsvigre.github.io
<html>
<head>
  <style>
    #logo {
      text-align: center;
      font-size: 50px;
      background-color: rgb(22, 206, 206);
    }

    #count1 {
      float: left;
      font-size: 40px;
      margin-right: 20px;
    }

    #count2 {
      float: right;
      font-size: 40px;
      margin-left: 20px;
    }

    #lead {
      clear: both;
      font-size: 24px;
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

    body {
      background: linear-gradient(to bottom, #00ffff, #6bff60, #1900ff);
    }
    .hidden{
	hidden = none;  
    }
  </style>
</head>

<body>
  <h1 id="logo">Knappe kamp</h1>

  <button id="knapp1" onclick="incrementCount1()">Team Left (Z)</button>
  <button id="knapp2" onclick="incrementCount2()">Team Right (M)</button>

  <p>Poeng Team Left: <span id="count1">0</span></p>
  <p>Poeng Team Right: <span id="count2">0</span></p>
  <p id="lead">Det er uavgjort</p>

  <script>
    let count1 = parseInt(localStorage.getItem("count1")) || 0;
    let count2 = parseInt(localStorage.getItem("count2")) || 0;

    function incrementCount1() {
      count1++;
      document.getElementById("count1").innerHTML = count1;
      updateLead();
      saveCountsToLocalStorage();
    }

    function incrementCount2() {
      count2++;
      document.getElementById("count2").innerHTML = count2;
      updateLead();
      saveCountsToLocalStorage();
    }

    function updateLead() {
      let lead = '';
      let diff = count1 - count2;
      if (diff > 0) {
        lead = 'Team Left leder med ' + diff + ' poeng';
      } else if (diff < 0) {
        lead = 'Team Right leder med ' + Math.abs(diff) + ' poeng';
      } else {
        lead = 'Det er uavgjort';
      }
      document.getElementById("lead").innerHTML = lead;
    }

    function saveCountsToLocalStorage() {
      localStorage.setItem("count1", count1);
      localStorage.setItem("count2", count2);
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === 'z') {
        incrementCount1();
      } else if (event.key === 'm') {
        incrementCount2();
      }
    });

    document.getElementById("count1").innerHTML = count1;
    document.getElementById("count2").innerHTML = count2;
    updateLead();
  </script>
</body>

</html>
