async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
            const dataUrl = reader.result;
            try {
                const response = await query(dataUrl);
                console.log(response); // Handle response from query function
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
