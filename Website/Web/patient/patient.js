// Add an event listener to the form submission
document.querySelector('form').addEventListener('submit', async function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Retrieve the input from the text area
    const inputTextArea = document.querySelector('#symptoms textarea');
    const inputText = inputTextArea.value;

    // Call the query function with the input data
    const response = await query({"inputs": inputText});

    // Process the API response to extract the top 3 diagnoses
    if (response && response.length > 0) {
        const diagnoses = response[0];
        const topDiagnoses = diagnoses.slice(0, 3); // Extract the first three diagnoses
        for (let i = 0; i < topDiagnoses.length; i++) {
            const percentage = (topDiagnoses[i].score * 100).toFixed(3);
            const scoreElement = document.querySelector(`#score-${i + 1}`);
            const descriptionElement = document.querySelector(`#description-${i + 1}`);
            scoreElement.textContent = `${topDiagnoses[i].label}: ${percentage}%`;
            descriptionElement.textContent = getDescription(topDiagnoses[i].label);
            
            // Show the result box
            const resultBox = document.querySelector(`#result-${i + 1}`);
            resultBox.style.display = 'block';
        }
        document.getElementById('result-container').style.display = 'flex';
    }
});

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Zabihin/Symptom_to_Diagnosis",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}
// Function to get a random description for a disease
function getDescription(disease) {
    const descriptions = {
        "common cold": "A common viral infection of the upper respiratory tract.",
        "pneumonia": "An infection that inflames the air sacs in one or both lungs.",
        "allergy": "An exaggerated immune response to substances that are generally not harmful.",
        // Add more descriptions for other diseases as needed
    };
    return descriptions[disease] || "Description not available."; // Return random description or a default message
}
