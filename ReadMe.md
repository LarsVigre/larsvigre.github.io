<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Expression Solver</title>
<style>
    .container {
        margin: 20px auto;
        max-width: 400px;
        text-align: center;
    }
    #expression {
        width: 80%;
        padding: 10px;
        margin-bottom: 10px;
    }
    #result {
        width: 80%;
        padding: 10px;
        margin-bottom: 10px;
    }
    #copyBtn {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
</head>
<body>
<div class="container">
    <textarea id="expression" placeholder="Enter expression"></textarea><br>
    <input type="text" id="result" placeholder="Result" readonly>
    <button onclick="copyResult()" id="copyBtn">Copy</button>

    <script>
    function solveExpression(expression) {
        try {
            let result = eval(expression);
            if (result % 1 === 0) {
                return result.toString();
            } else {
                return result.toFixed(2);
            }
        } catch (error) {
            return error.toString();
        }
    }

    function solveAndCopy() {
        let expression = document.getElementById("expression").value;
        let expressionCleaned = expression.replace(/,/g, '.').replace(/av/g, '').replace(/til/g, '').replace(/%/g, '/100').replace(/−/g, '-').replace(/⋅/g, '').replace(/:/g, '/').replace(/\?/g, '').replace(/[a-zA-Z]/g, '');
        let result = solveExpression(expressionCleaned);
        document.getElementById("result").value = result;
    }

    function copyResult() {
        let resultField = document.getElementById("result");
        resultField.select();
        document.execCommand("copy");
        alert("Result copied to clipboard: " + resultField.value);
    }

    // Add event listener to textarea
    let expressionTextarea = document.getElementById("expression");
    expressionTextarea.addEventListener("input", solveAndCopy);
    </script>
</div>
</body>
</html>
