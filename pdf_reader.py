from pypdf import PdfReader 
  
# creating a pdf reader object 
reader = PdfReader('Writing Assignment.pdf')

for i in range(len(reader.pages)):
    text = reader.pages[i]
    print(f'######### page-{i + 1} #########')
    print(text.extract_text())