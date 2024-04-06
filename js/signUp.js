var database = firebase.database();
const registerBtn = document.getElementById('registerButton');
const loginBtn = document.getElementById('loginButton');

registerBtn.addEventListener('click', function(e) {
    showLoadingSpinner();
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const profession = document.getElementById('registerProfession').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('confirmRegisterPassword').value;

    if(!validate(password, confirm))
    {
        changeToRed("registerPassword");
        changeToRed("confirmRegisterPassword");
        hideLoadingSpinner();
        return;
    }
    else if(!isPasswordStrong(password))
    {
        changeToRed("registerPassword");
        changeToRed("confirmRegisterPassword");
        hideLoadingSpinner();
        return;
    }
    else if(isFieldEmpty(name, "Name field"))
    {
        changeToRed("registerName");
        hideLoadingSpinner();
        return;
    }
    else if(!isProfessionCorrect(profession))
    {
        changeToRed("registerProfession");
        hideLoadingSpinner();
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            const user = userCredential.user;
            const uid = user.uid;
            setUserData(name, profession, email, uid);
            document.getElementById('passwordMatchError').innerText = "";

            sessionStorage.setItem("user", uid);
            
            setTimeout(() =>{
                if(profession == "Doctor")
                    document.location.href = "doctorSide.html";
                else
                    document.location.href = "patientSide.html";
            }, 2000);
        })
        .catch(function(error) {
            document.getElementById('passwordMatchError').innerText = "*This email already exists. Sign In instead.";
            hideLoadingSpinner();
            return;
        });
});

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    showLoadingSpinner();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            const user = userCredential.user;
            const uid = user.uid;
            document.getElementById('loginError').innerText = "";
        
            sessionStorage.setItem("user", uid);

            const dataRef = database.ref("users/" + uid + "/profession");
            dataRef.on("value", (snapshot) => {
                const profession = snapshot.val();
                setTimeout(() =>{
                    if(profession == "Doctor")
                        document.location.href = "doctorSide.html";
                    else
                        document.location.href = "patientSide.html";
                }, 2000);
            });
        })
        .catch(function(error) {
            console.log("error");
            document.getElementById('loginError').innerText = "*The password and/or email are wrong.";
            hideLoadingSpinner();
            return;
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

function isFieldEmpty(field, value)
{
    if(field.length == 0){
        document.getElementById('passwordMatchError').innerText = "*"+value+" is empty.";
        return true;
    } else {
        document.getElementById('passwordMatchError').innerText = "";
    }

    return false;
}

function isProfessionCorrect(profession)
{
    if(profession === "Choose your role"){
        document.getElementById('passwordMatchError').innerText = "*Role is not selected.";
        return false;
    } else {
        document.getElementById('passwordMatchError').innerText = "";
    }

    return true;
}

function isPasswordStrong(password)
{
    var hasNumber = /\d/.test(password);
    var hasUpper = /[A-Z]/.test(password);
    var hasLower = /[a-z]/.test(password);

    const isStrong = hasNumber && hasUpper && hasLower;

    if(!isStrong)
    {
        document.getElementById('passwordMatchError').innerText = "*Password is not very strong. There should be at least 1 number, " + 
            "1 upper case letter, and 1 lower case letter."
    }
    else {
        document.getElementById('passwordMatchError').innerText = "";
    }

    return isStrong;
}

function changeToRed(x)
{
    document.getElementById(x).style.borderColor = "red";
}

function changeToNormalColor(x)
{
    document.getElementById(x).style.borderColor = "black";
}

async function setUserData(name, profession, email, userId)
{
    await database.ref("users/" + userId).set({
        profession: profession,
        name: name,
        email: email
    });
}

function togglePopup() {
    document.getElementById("popup-1")
     .classList.toggle("active");
     document.getElementById('passwordMatchError').innerText = "";
     document.getElementById('loginError').innerText = "";

}

function toggleRegister() {
    document.getElementById("popup-2")
     .classList.toggle("active");
     document.getElementById('passwordMatchError').innerText = "";
     document.getElementById('loginError').innerText = "";
}

function showLoadingSpinner() {
    var spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';
  }
  
  // Function to hide the loading spinner
  function hideLoadingSpinner() {
    var spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'none';
  }