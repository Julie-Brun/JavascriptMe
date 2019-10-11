window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->

    const buttonEmpty = document.getElementsByClassName("square-button-empty");
    const login = document.getElementById("connexion-form");
    const register = document.getElementById("register-form");

    for (let i = 0; i < buttonEmpty.length; i++) {
        buttonEmpty[i].addEventListener("click", function(e){
            if(e.target.getAttribute("data-form") == 0){
                login.style.display = "none";
                register.style.display = "flex";
            } else {
                login.style.display = "flex";
                register.style.display = "none";
            };
        });   
    };


    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)

    // LOGIN dans la Step 4
    
    const registerButton = document.getElementById("registerButton");
    const regInput = document.getElementById("register-form").getElementsByTagName("input");

    registerButton.addEventListener("click", function(){
        const regUsername = regInput[0].value;
        console.log(regUsername);
        const regEmail = regInput[1].value;
        console.log(regEmail);
        const regPassword = regInput[2].value;
        console.log(regPassword);
        const regPasswordConfirm = regInput[3].value;
        console.log(regPasswordConfirm);

        const verifyAlpha = /^[a-z0-9]+$/i;
        if(regUsername.length < 5 || verifyAlpha.test(regUsername) == false){
            alert("Your username must be at least 5 alphanumeric characters.");
            return false;
        }

        const verifyLower = /^(?=.*[a-z])/;
        const verifyUpper = /^(?=.*[A-Z])/;
        const verifyInteger = /^(?=.*[0-9])/;
        if(regPassword.length < 8){
            alert("Your password must be at least 8 characters.");
            return false;
        };
        if(verifyLower.test(regPassword) == false){
            alert("Your password must contain at least one lowercase.");
            return false;
        }
        if(verifyUpper.test(regPassword) == false){
            alert("Your password must contain at least one uppercase.");
            return false;
        }
        if(verifyInteger.test(regPassword) == false){
            alert("Your password must contain at least one integer number.");
            return false;
        }
  


    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'


    // var user = new User('Toto', 'toto@email.fr', 'tamereenslip');
    // console.log('Bonjour ' + user.getUsername() + ' !');

        const userReg = new User(regUsername, regEmail, regPassword);
        console.log('Bonjour ' + userReg.getUsername() + ' !');
        localStorage.setItem("user", JSON.stringify(userReg));
    }); 

    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'

    const loginButton = document.getElementById("loginButton");
    const loginInput = document.getElementById("connexion-form").getElementsByTagName("input");
        
    loginButton.addEventListener("click", function(){
        const logEmail = loginInput[0].value;
        console.log(logEmail);
        const logPassword = loginInput[1].value;
        console.log(logPassword);

        const userLog = JSON.parse(localStorage.getItem("user"));
        console.log(userLog);
        if(userLog === null){
            alert("Account does not exist, please register.");
            return false;
        } else {
            if(logEmail !== userLog.email){
                alert("Wrong email.")
                return false;
            } else if(logPassword !== userLog.password){
                alert("Wrong password.")
                return false;
            } else {
                return ( window.location = "home.html");
            }
        }
    });

}
