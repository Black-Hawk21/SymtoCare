## Track

Machine Learning

## Contributors
* Shubhranil Basak
* Sahil Kolte
* Aryan Bansal

## Contributions
* Shubhranil Basak
   * Fine-tuned all the ML models
   * Made the EDA for a few datsets
   * Managed API calls from huggingface
* Aryan Bansal
   * Built and managed the backend
   * Fomated the API responses from the hugginface models
* Sahil Kolte
   * Built and managed the frontend
## Problem Statement

In India, a critical imbalance persists between the availability of medical professionals and the ever-expanding healthcare needs of the population. With a doctor-to-patient ratio of 1:1457, significantly below the WHO's recommended ratio of 1:1000, our healthcare system confronts formidable challenges in delivering timely and accurate diagnoses. This deficit not only strains medical resources but also exacerbates disparities in access to healthcare, affecting individuals across diverse socio-economic backgrounds and geographic locations. From bustling urban centers to remote rural villages, the shortfall of medical professionals impedes equitable healthcare delivery, underscoring the urgent need for comprehensive solutions to bridge this gap and ensure the well-being of all citizens.

## Goal

To address this pressing issue, our team has developed the website based service "SymtoCare" aimed at supporting medical professionals. At SymtoCare, our mission is to revolutionize healthcare by harnessing the power of artificial intelligence to deliver accurate and timely disease identification, empowering both doctors and patients to make informed decisions and improve outcomes. We are committed to advancing medical diagnostics through innovation, compassion, and ethical practice, ensuring every individual receives the highest standard of care while safeguarding their privacy and dignity.

## About Us

Welcome to SymptoCare, a hackathon project where innovation meets healthcare efficiency! We are a team of passionate individuals brought together by the challenge of the hackathon and driven by the belief that technology can revolutionize the way healthcare operates. With a focus on saving valuable time for medical professionals, we have embarked on a journey to develop an AI-powered solution that streamlines the analysis of medical images. At SymptoCare, our mission is clear: to empower doctors and healthcare providers with cutting-edge tools that enhance their decision-making process and ultimately improve patient outcomes. By harnessing the power of artificial intelligence, we aim to alleviate the burden on medical professionals, allowing them to allocate more time to patient care and less time to administrative tasks.

## Features

### General Features
* Registration and Login using Firebase Authentication and Firebase Realtime Database
* Uploading and Downloading documents using Firebase Cloud Storage
* Health Related Blogs

### Models Available
* White Blood Cell Classifier
* Chest X-ray Classifier
* Prescription Summarizer
* Skin Cancer Classifier
* Eye Retina Classifier
* Liver Cell Disease Detector

### Patient Side Features
* Uploading Diagnostic Reports and Documents

### Doctor Side Features
* Downloading zip file containing patient data using JSZip
* Use the the ML Model for analysis of the images or text

## Tech Stack

### Frontend
* HTML
* CSS
* SCSS
* Gradio
### Backend
* HuggingFace
* HuggingFace Autotrain
* Firebase Authentication
* Firebase Realtime Database
* Firebase Cloud Storage
* Docker
### Languages
* Python
* JavaScript
* Bash
* Cuda
### Tools
* Roboflow
* VS Code
* Github
* Jupyter Notebook
* Google Colab
* Ollama
* PubMED
* Zoom
* Microsoft Clipchamp
* Youtube
### Libraries/Framework
* Python
  * Tensorflow
  * Keras
  * Numpy
  * Pandas
  * Matplotlib
  * Pytorch
  * Seaborn
  * Scikit-learn
  * Langchain
* JavaScript
  * Bootstrap
  * Node.js
  * JSZip
  * JSZip-utils
  * FileSaver.js
  * Lanchain
## How to run
Visit the website at [https://shubhranil-basak.github.io/SymtoCare/](https://shubhranil-basak.github.io/SymtoCare/).

### As a patient
* Sign up or login as a patient by clicking the Login button.
* After that, it will open up a page where one can select the doctor whom one wants to send data to.

### As a doctor
* Sign up or login as a doctor by clicking the Login button.
* After that, it will open up a page where one can select the models which one wants to use and also download patient data corresponding to the patients whom have been assigned to that doctor.

## Deployment
The website is deployed on Github and the user data is securely stored in Firebase. 

## Models

### White Blood Cell Classifier
* Takes a stained image of a single White Blood Cell and claasifies it out of 8 possible classes.
* It can be used to identify location of diseases based on accumulation location and type of WBC present in a location.
* Allows doctors to quickly identigy potential infections or abnormalities in blood samples.
* WBC-Classifier is a fine-tuned version of [resnet-50](https://huggingface.co/microsoft/resnet-50)--a convolutional neural network that democratized the concepts of residual learning and skip connections. This model has been fine tuned on this [dataset](https://huggingface.co/datasets/Falah/Blood_8_classes_Dataset). 
* For more info, follow this [link](https://huggingface.co/NeuronZero/WBC-Classifier).

### Chest X-ray Classifier
* Takes a normal picture of a x-ray and clssifies it as either diseased or normal.
* Enhances diagnostic accuracy and expediates the interpretation of chest radiographs.
* The CXR Classifier is a fine-tuned version of [Vision Transformer](https://huggingface.co/google/vit-base-patch16-224)--a transformer encoder model (BERT-like) pretrained on a large collection of images. 
* For more info, follow this [link](https://huggingface.co/NeuronZero/CXR-Classifier).

### Prescription Summarizer
* Hosted on gradio, this model take in natural language input of the symptoms faced by the patient
* Automatically analyzes and summarizes prescription details, including medication names, past conditions and treatments and other medical entities.
* Facilitates better patient understanding and adherence to prescribed treatment regimens.
* The Prescription Summarizer is a fine-tuned version of [DeBERTaV3](https://huggingface.co/microsoft/deberta-v3-base) on the PubMED Dataset.
* For more info, follow this [link](https://huggingface.co/NeuronZero/MED-NER)
* To use the model, click on this [link](https://huggingface.co/spaces/NeuronZero/PrescriptionReader).

### Skin Cancer Classifier
* It take standard picute of the affected area of the skin and classifies it out of 6 classes
* Utilizes AI to classify skin lesions and identify potential indicators of skin cancer.
* Enables early detection and intervention, improving patient outcomes and reducing mortality rates.
* SkinCancer-Classifier is a fine-tuned version of [swin-base](https://huggingface.co/microsoft/swin-base-patch4-window12-384-in22k)--a type of Vision Transformer that builds hierarchical feature maps by merging image patches in deeper layers--trained on this [dataset](https://huggingface.co/datasets/Pranavkpba2000/skin_cancer_dataset).
* For more info, follow this [link](https://huggingface.co/NeuronZero/SkinCancerClassifier).

### Eye Retina Classifier
* It takes in a piture of the patients retina and cllasifies it out of 8 different classes.
* Assists ophthalmologists in detecting retinal diseases such as diabetic retinopathy, macular degeneration, or glaucoma.
* Offers timely diagnosis and monitoring of eye conditions to prevent vision loss or blindness.
* Eye Retina Classifier is a fine tuned version of [BEiT-base-path-16](https://huggingface.co/microsoft/beit-base-patch16-224-pt22k-ft22k)-- a Vision Transformer--trained on this [dataset](https://huggingface.co/datasets/mujammil131/eyeDiseasDdetectionModel).
* For more info, follow this [link](https://huggingface.co/NeuronZero/EyeDiseaseClassifier).

### Liver Cell Disease Detector:
* It is YOLO V8 model that takea in image of a liver tissue and encircles the effected areas.
* It can identify effected areas out of 4 classes.
* Analyzes liver cell images to identify signs of liver diseases.
* Enables proactive management of liver health and facilitates early intervention to prevent disease progression.
* Liver Cell Disease Detector is a pre-trained Liver-YOLO computer vision model to classify different types of liver cell diseases.
* Furthur information about this model can be found [here](https://universe.roboflow.com/liveryolo/liver-yolo/model/1).

## Future Applications
* **'Automated Blood Cell Counting'**: The website could be integrated into automated blood cell counting systems, enhancing the speed and accuracy of diagnoses for conditions such as infections, leukemia, and autoimmune diseases.
* **'Disease Diagnosis and Monitoring'**: By accurately identifying and classifying white blood cells, it could aid in the diagnosis and monitoring of various diseases and conditions, including infections, cancers, and autoimmune disorders.
* **'Drug Development and Testing'**: It could be used in drug development and testing processes to evaluate the effects of pharmaceuticals on different types of white blood cells. This could facilitate the development of new treatments for diseases affecting the immune system.
* **'Population Screening and Public Health Initiatives'**: It could play a role in population screening programs and public health initiatives aimed at early detection and intervention for lung diseases, such as tuberculosis, lung cancer, and pneumonia, particularly in high-risk populations or regions with limited access to healthcare resources.
* **'Clinical Decision Support Systems'**: It could be integrated into clinical decision support systems (CDSS) to provide evidence-based recommendations and guidance to healthcare providers during the diagnostic process, facilitating more confident and informed decision-making.
* **'Clinical Decision Support'**: A Prescription Summarizer can assist healthcare providers in quickly reviewing and understanding a patient's medication history, including current prescriptions, dosages, and any changes made over time. This can help clinicians make informed decisions about treatment plans, avoid potential drug interactions or duplications, and ensure medication adherence.
* **'Medication Reconciliation'**: During transitions of care, such as hospital discharge or referral to another healthcare provider, accurate medication reconciliation is crucial to ensure continuity of care and patient safety. A Prescription Summarizer can facilitate this process by providing a concise overview of the patient's current medications, helping to identify discrepancies and prevent medication errors.
* **'Health Analytics and Research'**: Aggregated data from Prescription Summarizer applications can be analyzed to gain insights into prescribing patterns, medication adherence rates, and trends in drug utilization. This information can inform healthcare policies, guide clinical guidelines, and support research efforts aimed at improving medication safety and effectiveness.
* **'Second Opinion and Decision Support'**: Doctors can use skin cancer classifiers as a second opinion tool or decision support system to validate their initial assessments. It can provide additional information and confidence in diagnosis, especially in challenging cases.
* **'Education and Training'**: It can serve as educational tools for medical students, residents, and others to learn about the visual characteristics of different diseases. By providing real-world examples and feedback, it can enhance learning and diagnostic skills.

## Further improvements

We are thinking of adding two statistical models. 

* On the patient's side, we are planning on implementing a statistical model where on entering specific data, the model will determine the possibility of whether the person will suffer from a heart attack or not.
* We are also planning on implementing a model which will take data and determine whether it is necessary to admit the patient in the hospital or if the patient can heal naturally over time.
* Finally, we are trying to implement a chat-bot feature both in offline and online mode.
## Demo video

Please visit the demo video at [https://youtu.be/uxcSVC_GJTE](https://youtu.be/uxcSVC_GJTE).

## Useful Links

* "25+ Responsive Templates for Medical Websites." [ThemeWagon](https://themewagon.com/blog/responsive-templates-for-medical-websites/). Accessed 6 Apr. 2024.
* Abhirooptalasila. "[Smart-Lightweight-Medical-Query-System](https://github.com/abhirooptalasila/Smart-Lightweight-Medical-Query-System/tree/main)." GitHub. Accessed 6 Apr. 2024.
* "Cloud Storage for Firebase." [Firebase, Google](https://firebase.google.com/docs/storage/). Accessed 6 Apr. 2024.
* Foolish Developer. "How to Create Pop up Login Form Using HTML and CSS." [Foolishdeveloper.Com](http://foolishdeveloper.com/how-to-create-pop-up-login-form-using-html-and-css/#:~:text=1%20Step%201%3A%20Create%20the%20basic%20structure%20of,5%3A%20Activate%20the%20popup%20button%20using%20JavaScript%20code). Accessed 6 Apr. 2024.
* "Firebase Authentication." [Firebase, Google](https://firebase.google.com/docs/auth/). Accessed 6 Apr. 2024.
* "Firebase Realtime Database." [Firebase, Google](https://firebase.google.com/docs/database/). Accessed 6 Apr. 2024.
* "Google’s Mobile and Web App Development Platform." [Firebase, Google](https://firebase.com/). Accessed 6 Apr. 2024.
* "Hacknite - A NeuronZero Collection." [Hugging Face](https://huggingface.co/collections/NeuronZero/hacknite-660b9be83fbd33a1d0f836df). Accessed 6 Apr. 2024.
* "Health Information and Medical Information." [Harvard Health](https://www.health.harvard.edu/). Accessed 6 Apr. 2024.
* "Liver-YOLO Object Detection Dataset by Liveryolo." [Roboflow](https://universe.roboflow.com/liveryolo/liver-yolo). Accessed 6 Apr. 2024.
* Lobsterpants. "[Javascript Import for Filesaver.Js](https://stackoverflow.com/questions/51649898/javascript-import-for-filesaver-js)." Stack Overflow. Accessed 6 Apr. 2024.
* "Manage Users in Firebase." [Google](https://firebase.google.com/docs/auth/web/manage-users). Accessed 6 Apr. 2024.
* "Medifind Symptom Checker." [Medifind.Com](https://www.medifind.com/symptom-checker). Accessed 6 Apr. 2024.
* Namenone, et al. "[Saving Images from URL Using JSzip](https://stackoverflow.com/questions/26635627/saving-images-from-url-using-jszip)." Stack Overflow. Accessed 6 Apr. 2024.
* "NeuronZero/CXR-Classifier." [Hugging Face](http://huggingface.co/NeuronZero/CXR-Classifier). Accessed 6 Apr. 2024.
* "NeuronZero/MED-NER." [Hugging Face](http://huggingface.co/NeuronZero/MED-NER). Accessed 6 Apr. 2024.
* "NeuronZero/MRI-Reader." [Hugging Face](http://huggingface.co/NeuronZero/MRI-Reader). Accessed 6 Apr. 2024.
* "NeuronZero/WBC-Classifier." [Hugging Face](http://huggingface.co/NeuronZero/WBC-Classifier). Accessed 6 Apr. 2024.
* New-Way. "[Firebase Storage Access to Fetch at ‘..’ Has Been Blocked by Cors Policy: No ‘Access-Control-Allow-Origin’ Header Is Present on the Requested Resource](https://stackoverflow.com/questions/71193348/firebase-storage-access-to-fetch-at-has-been-blocked-by-cors-policy-no-ac)." Stack Overflow. Accessed 6 Apr. 2024.
* Silkalns, Aigars. "[WordPress Themes & Website Templates](http://colorlib.com/)." Colorlib. Accessed 6 Apr. 2024.

