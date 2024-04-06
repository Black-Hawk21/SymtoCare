async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/NeuronZero/MED-NER",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

function submitText() {
    // Get the text input value
    const textInput = document.getElementById("textInput").value;

    // Call the query function with the text input
    query({ "inputs": textInput }).then((response) => {
        // Extract class and score information
        const classAndScores = response.map(entity => ({
            class: entity.entity_group,
            score: entity.word
        }));

        // Log the extracted information
        console.log(classAndScores);
    }).catch((error) => {
        // Handle any errors that occur during the API call
        console.error('Error:', error);
    });
}