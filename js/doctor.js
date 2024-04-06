var database = firebase.database();
const uid = sessionStorage.getItem("user");
const storage = firebase.storage();
var usersRef = database.ref("users");
var doctorArray = {};
const imagesByUID = new Map();
const imagesByName = new Map();

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

            document.getElementById("WelcomePatient").appendChild(textNode);
        }
    });
}

async function getAllUsersData() 
{
    const storageRef = storage.ref().child(uid+"/");

    try
    {
        const items = await storageRef.listAll();

        await Promise.all(items.items.map(async (item) => {
            const url = await item.getDownloadURL();
            const name = item.name;
            const metadata = await item.getMetadata();
            const uid = metadata.customMetadata.uid;

            if(imagesByUID.has(uid))
            {
                imagesByUID.get(uid).push(url);
                imagesByName.get(uid).push(name);
            }
            else
            {
                imagesByUID.set(uid, [url]);
                imagesByName.set(uid, [name]);
            }
        }));

        var usersRef = database.ref("users");
    
        usersRef.once('value', function(snapshot) 
        {
            snapshot.forEach(function(childSnapshot) {
                var userData = childSnapshot.val();
                var profession = userData.profession;
                var name = userData.name;
                var userID = childSnapshot.key;
                if (profession === "Patient" && imagesByUID.has(userID)) 
                {
                    var doctorSelect = document.getElementById("doctorSelect");

                    var temp = '<li data-value="'+name+'" class="option selected focus">'+name+'</li>';

                    doctorSelect.innerHTML += temp;
                }
                if(profession === "Patient")
                {
                    doctorArray[name] = userID;
                }
            });
        });
    }
    catch(error)
    {
        console.log("Error");
    }
}

function submitFile()
{
    var selectElement = document.getElementById("doctorData");
    var spanData = selectElement.innerText;
    
    if(spanData !== "Select a patient")
    {
        const zip = new JSZip();

        const arr = imagesByUID.get(doctorArray[spanData]);
        const nameArr = imagesByName.get(doctorArray[spanData]);
        const promises = arr.map((url, index) => {
            
            const fileName = nameArr[index];
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Failed to fetch ${url}`);
                }
                return response.blob();
              })
              .then(blob => {
                // Add image to the zip file
                zip.file(fileName, urlToPromise(url), {binary:true});
              })
              .catch(error => {
                console.error(error);
              });
        });

    Promise.all(promises)
      .then(() => {
        // Generate the zip file asynchronously
        zip.generateAsync({ type: "blob" })
          .then(blob => {
            // Create a temporary anchor element to download the zip file
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = spanData+'.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch(error => {
            console.error('Error generating zip file:', error);
          });
      });
    }
    else
    {
        console.log("error");
    }
}

function urlToPromise(url)
{
    return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function signOut()
{
    firebase.auth().signOut().then(function() {
        console.log("Signed out");
    }).catch(function(error) {
        console.log("error");
    });
}