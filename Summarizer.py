import requests
import pandas as pd
import json

API_URL = "https://api-inference.huggingface.co/models/NeuronZero/MED-NER"
headers = {"Authorization": "Bearer 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"}

t = input()

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": f"{input}",
})


# data = json.loads(output)
df = pd.DataFrame(output)
df.to_excel("text.xlsx", index=False)
