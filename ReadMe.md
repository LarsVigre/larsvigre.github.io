<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        #calculator {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        #login-form {
            display: block;
        }

        #login-success {
            display: none;
        }

        #signup {
            display: none;
        }

        #login-success.visible,
        #calculator.visible,
        #signup.visible {
            opacity: 1;
            display: block;
        }

        #login-form,
        #signup {
            transition: opacity 0.5s ease-in-out;
            opacity: 1;
        }

        #login-form.fade-out,
        #signup.fade-out {
            opacity: 0;
        }

        /* Hide calculator button initially */
        #calculator-btn {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <h1></h1>
    </header>
    <main>
        <section id="login-form" class="login-hide">
            <h2>Enter your credentials</h2>
            <form action="#" method="post" onsubmit="return login();">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>

                <button type="submit">Login</button>
            </form>
        </section>
        <section id="login-success" class="visible">
            <h2></h2>
            <!-- Calculator button wrapped inside login-success section -->
            <button id="calculator-btn" onclick="showCalculator();">Go to Calculator</button>
            <button onclick="showSignup();">Sign Up</button>
        </section>
        <section id="calculator" class="calculator-hide">
            <h2>Enter an expression to calculate</h2>
            <input type="text" id="expression" oninput="solveAndCopy();">
            <input type="text" id="result" readonly>
            <button onclick="copyResult();">Copy Result</button>
        </section>
        <section id="signup" class="visible signup-hide">
            <h2>Sign Up</h2>
            <form action="#" method="post" onsubmit="return signup();">
                <label for="new-username">Username:</label>
                <input type="text" id="new-username" name="new-username" required>

                <label for="new-password">Password:</label>
                <input type="password" id="new-password" name="new-password" required>

                <button type="submit">Sign Up</button>
            </form>
            <button onclick="showLogin();">Back to Login</button>
        </section>
    </main>
    <footer>
        <p>Copyright © 2023 Simple Login and Calculator. All rights reserved.</p>
    </footer>
    <script>
        let username = "";
        let password = "";

        function login() {
            const inputUsername = document.getElementById("username").value;
            const inputPassword = document.getElementById("password").value;

            if (inputUsername === username && inputPassword === password) {
                document.getElementById("login-form").classList.add("fade-out");
                document.getElementById("login-success").classList.add("visible");
                document.getElementById("signup").classList.remove("visible");
                document.getElementById("calculator").classList.remove("calculator-hide");
                document.getElementById("calculator").classList.add("visible");
                // Show calculator button after successful login
                document.getElementById("calculator-btn").style.display = "block";
                return false;
            } else {
                alert("Invalid credentials");
                return false;
            }
        }

        function showCalculator() {
            document.getElementById("login-success").classList.remove("visible");
            document.getElementById("signup").classList.remove("visible");
            document.getElementById("calculator").classList.remove("calculator-hide");
            document.getElementById("calculator").classList.add("visible");
            document.getElementById("login-form").classList.add("fade-out");
        }

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
            expression = expression
                .replace(/av/g, ' * ')
                .replace(/til/g, ' / ')
                .replace(/%/g, ' * 0.01')
                .replace(/−/g, '-')
                .replace(/⋅/g, '*')
                .replace(/:/g, '/')
                .replace(/\?/g, '');
            let result = solveExpression(expression);
            document.getElementById("result").value = result;
        }

        function copyResult() {
            let resultField = document.getElementById("result");
            resultField.select();
            document.execCommand("copy");
            alert("Result copied to clipboard: " + resultField.value);
        }

        function showSignup() {
            document.getElementById("login-success").classList.remove("visible");
            document.getElementById("signup").classList.add("visible");
            document.getElementById("login-form").classList.add("fade-out");
            document.getElementById("calculator").classList.add("calculator-hide");
            document.getElementById("calculator").classList.remove("visible");
            // Hide calculator button if user navigates to sign up
            document.getElementById("calculator-btn").style.display = "none";
        }

        function showLogin() {
            document.getElementById("login-form").classList.remove("fade-out");
            document.getElementById("signup").classList.remove("visible");
            document.getElementById("calculator").classList.remove("visible");
            document.getElementById("calculator").classList.add("calculator-hide");
            document.getElementById("login-success").classList.remove("visible");
        }

        function signup() {
            const newUsername = document.getElementById("new-username").value;
            const newPassword = document.getElementById("new-password").value;

            if (newUsername !== "" && newPassword !== "") {
                username = newUsername;
                password = newPassword;

                alert("Sign up successful!");
                document.getElementById("signup").classList.remove("visible");
                document.getElementById("login-form").classList.remove("fade-out");
                return false;
            } else {
                alert("Sign up failed. Please choose a different username and password.");
                return false;
            }
        }
    </script>
</body>
</html>
