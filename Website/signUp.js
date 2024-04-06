var database = firebase.database();
const registerBtn = document.getElementById('registerButton');

registerBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const first = document.getElementById('first-name').value;
    const last = document.getElementById('last-name').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('confirmRegisterPassword').value;

    if(!validate(password, confirm))
    {
        changeToRed("registerPassword");
        changeToRed("confirmRegisterPassword");
        
        return;
    }
    else if(!isPasswordStrong(password))
    {
        changeToRed("registerPassword");
        changeToRed("confirmRegisterPassword");
        alert("Password is not very strong. Make sure the length is greater than 8 and that the following conditions are satisfied : at least 1 number, " + 
            "at least 1 upper case letter, and at least 1 lower case letter.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            const user = userCredential.user;
            const uid = user.uid;
            setUserData(first, last, email, uid);
        })
        .catch(function(error) {
        });
});

function validate(x, y)
{
    const isValid = x === y;
    if (!isValid) {
        document.getElementById('passwordMatchError').innerText = "*The password should match";
    } else {
        document.getElementById('passwordMatchError').innerText = "";
    }
    return isValid;
}

function isPasswordStrong(password)
{
    var hasNumber = /\d/.test(password);
    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);

    return hasNumber && hasUpper && hasLower;
}

function changeToRed(x)
{
    document.getElementById(x).style.borderColor = "red";
}

function changeToNormalColor(x)
{
    document.getElementById(x).style.borderColor = "rgba(255, 255, 255, .2)";
}

function setUserData(first, last, email, userId)
{
    console.log("Here");
    database.ref("users/" + userId).set({
        firstName: first,
        lastName: last,
        email: email
    });
}