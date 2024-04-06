async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadImage = document.getElementById("uploadImage");

    const file = fileInput.files[0];
    const br = document.createElement("br");

    var pTags = document.getElementById("Report").getElementsByTagName('p');
    for (var i = pTags.length - 1; i >= 0; i--) {
        pTags[i].parentNode.removeChild(pTags[i]);
    }

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
            const dataUrl = reader.result;
            uploadImage.src = reader.result;
            try {
                const response = await query(dataUrl);

                console.log(response);
                response.forEach(function(item) {
                    var labelParagraph = document.createElement('p');
                    
                    labelParagraph.style.fontWeight = "bold";
                    labelParagraph.style.color = "blue";
                    
                    var score = (item.score * 100).toFixed(2) + "%";
                    var label = item.label == "PNEUMONIA" ? "DISEASED" : item.label;
                    labelParagraph.textContent = label + ": " + score;

                    document.getElementById("Report").appendChild(labelParagraph);
                });

            } catch (error) {
                console.error('Error querying API:', error);
            }
        };
    } else {
        console.error('No file selected');
    }
}

async function query(dataUrl) {
    // Convert Data URL to base64
    const base64Image = dataUrl.split(',')[1];

    const response = await fetch(
        "https://api-inference.huggingface.co/models/NeuronZero/EyeDiseaseClassifier",
        {
            headers: { 
                Authorization: "Bearer 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",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ image: base64Image }),
        }
    );
    const result = await response.json();
    return result;
}
