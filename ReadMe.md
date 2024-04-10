<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expression Solver</title>
    <script>
        function solveExpression() {
            var expression = document.getElementById("expression").value;
            var resultElement = document.getElementById("result");

            try {
                // Clean expression
                var cleanedExpression = expression.replace(/[a-zA-Z]/g, '').replace(',', '.').replace('av', '*').replace('til', '').replace('%', ' 0.01').replace('−', '-').replace('⋅', '*').replace(':', '/').replace('?', '');

                // Evaluate expression
                var result = eval(cleanedExpression);
                if (result % 1 === 0) {
                    resultElement.textContent = result.toFixed(0);
                } else {
                    resultElement.textContent = result.toFixed(2);
                }
            } catch (error) {
                resultElement.textContent = error.toString();
            }
        }
    </script>
</head>
<body>
    <h1>Expression Solver</h1>
    <label for="expression">Enter expression:</label>
    <input type="text" id="expression">
    <button onclick="solveExpression()">Solve</button>
    <p id="result"></p>
</body>
</html>
