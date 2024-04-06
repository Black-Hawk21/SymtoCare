var database = firebase.database();
const uid = sessionStorage.getItem("user");
const storage = firebase.storage();
var usersRef = database.ref("users");
var doctorArray = {};


getDataForUser(uid);
getAllUsersData();

function getDataForUser(uid)
{
    usersRef.child(uid).once('value', function(snapshot) 
    {
        if (snapshot.exists()) 
        {
            var userData = snapshot.val();
            
            var email = userData.email;
            var name = userData.name;

            var textNode = document.createTextNode(" " + name);
            var uploadNode = document.createTextNode("Please upload your diagnostic reports " + name);
            document.getElementById("WelcomePatient").appendChild(textNode);
            document.getElementById("uploadMessage").appendChild(uploadNode);
        }
    });
}

function getAllUsersData() 
{
    var usersRef = database.ref("users");
    
    usersRef.once('value', function(snapshot) 
    {
        snapshot.forEach(function(childSnapshot) {
            var userData = childSnapshot.val();
            var profession = userData.profession;
            var name = userData.name;
            var userID = childSnapshot.key;
            if (profession === "Doctor") 
            {
                var doctorSelect = document.getElementById("doctorSelect");

                var temp = '<li data-value="'+name+'" class="option selected focus">'+name+'</li>';

                doctorSelect.innerHTML += temp;

                doctorArray[name] = userID;
            }
        });
    });
}

function submitFile()
{
    const fileInput = document.getElementById("fileUpload");
    const file = fileInput.files[0];
    var selectElement = document.getElementById("doctorData");
    var spanData = selectElement.innerText;
    var modelSelect = document.getElementById("modelSelect");

    var currentTime = new Date();

    if(file && spanData !== "Select a Doctor" && modelSelect != -1)
    {
        const fileName = file.name;
        var doctor = doctorArray[spanData];
        const storageRef = storage.ref(doctor + "/" + currentTime.getTime() + "_" + fileName);
        const model = modelSelect.options[modelSelect.selectedIndex].value;

        const uploadTask = storageRef.put(file, {
            customMetadata: {
              'model': model,
              'uid' : uid
            }
        });
        uploadTask.on('state_changed',
            function(snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            function(error) {
                console.error('Upload failed:', error);
            },
            function() {
                console.log('Upload successful');
            }
        );
    }
    else
    {
        console.log("error");
    }
}

function signOut()
{
    firebase.auth().signOut().then(function() {
        console.log("Signed out");
    }).catch(function(error) {
        console.log("error");
    });
}