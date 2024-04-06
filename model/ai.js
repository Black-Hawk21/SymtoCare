import { Ollama } from "@langchain/community/llms/ollama";

const llm = new Ollama({
    baseUrl: "https://localhost:5500",
    model: medllama2,
});

function submitText() {
    // Get the text input value
    const textInput = document.getElementById("textInput").value;
    return textInput;
}

// I added async keyword to the function to use await
async function generateResponse() {
    // I added await to wait for the response from llm.generate()
    const llmRes = await llm.generate(
        [`${submitText()}`]
    )

    // I added a check to see if the response exists before logging it
    if (llmRes && llmRes.generationsp && llmRes.generationsp[0]) {
        console.log(llmRes.generationsp[0]);
    }
}

// Call the generateResponse() function
generateResponse();