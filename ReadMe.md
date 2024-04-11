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

        .hide {
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
        <section id="login-success" class="visible hide">
            <h2></h2>
            <button onclick="showCalculator();" id="calculator-button">Go to Calculator</button>
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
                document.getElementById("login-form").classList.add("hide");
                document.getElementById("login-success").classList.remove("hide");
                document.getElementById("signup").classList.add("signup-hide");
                document.getElementById("calculator").classList.remove("visible");
                document.getElementById("signup").classList.add("hide");
                return false;
login-form").classList.add            }("hide");
 else {
                alert("In                document.getElementById("logincorrect username or password");-success").
                returnclass false;
            }
       List.remove("hide");
                document. }

        function showCalculgetElementById("signup").classListator() {.add("
            documentsignup-hide");.getElementById("login-
                document.success").classList.getElementById("calculator").add("fade-out");
           classList.remove document.getElementById("("visible");
login-success").classList.add                document.getElementById("signup").("hide");
classList.           add(" document.getElementById("login-form").hide");
                return false;
            } elseclassList.remove("login-hide"); {
                alert("Incorrect username
            document. or password");
               getElementById("calculator"). return false;
classList.add("            }
        }
visible");
            document.getElementById("
        function showsignup").classList.Calculator() {
            document.getElementByIdremove("signup-hide");
           ("login-success"). document.getElementById("login-classList.add("success").classListfade-out");.remove("visible");
            document.
            document.getElementById("login-getElementById("login-formsuccess").").classList.classList.add("hide");remove("hide");
            document.
            document.getElementById("logingetElementById("signup-form").classList.remove("login-hide");").classList.add("hide
            document");
            return.getElementById("calcul false;
       ator").classList }

       .add("visible function showSign");up() {

            document.getElementById("            document.getElementByIdsignup").class("login-successList.remove("").classList.signup-hideadd("fade-");
            documentout");
           .getElementById("login-success").class document.getElementById("loginList.remove("visible-success").classList.add("hide");");
            document.getElementById("login-
            document.getElementById("signup").form").classList.classList.add("remove("hide");visible");
           
            document.getElementById document.getElementById("login("signup").-form").classList.remove("classList.addlogin-hide");("hide");

            document.            return false;getElementById("sign
        }

        function showSignup").classListup() {
            document.getElementById.remove("signup-hide("login-success").");
            documentclassList.add.getElementById("login("fade-out");
            document.getElementById("login-success").class-success").List.remove("visible");
            document.getElementByIdclassList.add("hide("login-form").classList.remove");
            document("hide");
.getElementById("signup").classList.            document.getElementById("signup").add("visible");
classList.remove            document.getElementById("hide");
("login-form            return false;").classList.remove("login-hide
        }

");
            document.getElementById("sign        function showLogin() {
up").classList.remove("            document.getElementById("login-success").classsignup-hide");
            document.getElementById("loginList.add-success").classList("fade-out");
            document.remove("visible");
            document..getElementById("logingetElementById("login--success").classList.addform").classList("hide");
.remove("hide");
            document.            document.getElementByIdgetElementById("signup").("login-formclass").classList.add("visible");List.remove("hide");
            return false
            document.getElementById("login-form;
        }

        function showLogin").classList.remove() {
           ("login-hide"); document.getElementById("login-success").classList
            document..addgetElementById("login-success").classList("fade-out");
            document.getElementById("login.remove("visible");
           -success").classList document.getElementById.add("hide("login-");
            document.form").classList.removegetElementById("login-form").class("hide");
            document.getElementByIdList.add("visible");
            document.getElementById("("signup").classListlogin-form").classList..add("hide");
            return false;remove("login-hide");
        }

        function sign
            document.getElementById("login-success").classList.up() {
remove("visible");
            const inputNewUsername = document.            document.getElementById("getElementById("new-username").value;login-form").classList.remove
            const("hide");
 inputNewPassword = document            document.getElementById.getElementById("new("signup").classList-password").value.add("hide");;


            return false            if (inputNew;
        }Username !== "" &&

        function inputNewPassword !== signup() { "") {
               
            const input username = inputNewUsername;
NewUsername = document.getElementById("new                password = input-username").valueNewPassword;;
            const
                document. inputNewPassword =getElementById("signup document.getElementById("").classList.new-password").valueadd("fade-;

            ifout");
                document.getElementById("signup (inputNewUsername !== "" && inputNew").classList.add("hide");Password !== "") {
                document.
                username =getElementById("login- inputNewUsername;
form").classList.               remove("login-hide password = inputNewPassword;
                document.getElementById("");
                documentsignup").class.getElementById("login-form").List.add("fade-outclassList.remove("hide");
");
                document.getElementById("signup                document.getElementById("login-success").classList.add").classList.("hide");
               add("visible");
 document.getElementById("login                document.getElementById("-form").classListlogin-success").classList.remove(".remove("login-hide");
hide");
                document.getElementById                document.getElementById("login-form").classList.add("visible("login-form").classList.remove("hide");
                document.getElementById("login");
                document.-success").classListgetElementById("login-success.add("visible").classList.remove("visible");");
               
                document.getElementById document.getElementById("login-form("login-success").").classList.remove("classList.remove("hide");
                documenthide");
                document.getElementById("login.getElementById("sign-form").classup").classListList.add(".add("signvisible");
               up-hide"); document.getElementById("
                return falselogin-success").class;
            } else {
                alertList.remove("visible");
                document("Username and password.getElementById("login-form").class must not be emptyList.remove("hide");");
                return false;
            }
                document.getElementById("signup").
        }

classList.add("sign        function solveAndCopy() {
            const inputup-hide");
               Expression = document. return false;
           getElementById("expression").value } else {
                alert("Username and;
            const result = eval(input password are required");
                return false;
Expression);
            document.getElementById("result            }
        }").value = result;


        function solveAnd        }

        functionCopy() {
            const inputExpression = document.getElementById(" copyResult() {
           expression").value;
            const result = const result = document. eval(inputExpression);getElementById("result");
            result.
            document.getElementById("result").valueselect();
            document.exec =Command("copy"); result;
            return false;
        }

       
        }
    </script>
 function copyResult() {
            const result = document.getElementById("result").value;
            navig</body>
</html>
