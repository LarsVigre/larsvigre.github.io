<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Expression Solver</title>
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

function main() {
    while (true) {
        let expression = prompt("Enter expression:");
        if (expression === null) break; // User cancels input
        // Clean and solve expression
        let expressionCleaned = expression.replace(/[a-zA-Z]/g, '').replace(/,/g, '.').replace(/av/g, '*').replace(/til/g, '').replace(/%/g, ' 0.01').replace(/−/g, '-').replace(/⋅/g, '*').replace(/:/g, '/').replace(/\?/g, '');
        let result = solveExpression(expressionCleaned);
        alert("Result: " + result);
    }
}
</script>
</head>
<body onload="main()">
<!-- You can remove this body content if you don't need any -->
</body>
</html>
