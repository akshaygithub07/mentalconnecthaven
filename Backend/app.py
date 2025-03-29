from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv
import os

load_dotenv()  
# Your Groq API key
# GROQ_API_KEY = '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'
GROQ_API_KEY = os.getenv('GROQ_API_KEY')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize LLM
llm = ChatGroq(temperature=0, groq_api_key=GROQ_API_KEY, model_name="llama-3.3-70b-versatile")
db_path = './chroma_db'

# Load PDFs and create vector database
def create_vector_db():
    loader = DirectoryLoader('./Data', glob='*.pdf', loader_cls=PyPDFLoader)
    documents = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    texts = text_splitter.split_documents(documents)
    embeddings = HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2')
    vector_db = Chroma.from_documents(texts, embeddings, persist_directory=db_path)
    return vector_db

# Create or load the Vector Database
if not os.path.exists(db_path):
    vector_db = create_vector_db()
else:
    vector_db = Chroma(persist_directory=db_path, embedding_function=HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2'))

def setup_qa_chain(vector_db, llm):
    retriever = vector_db.as_retriever()
    prompt_templates = """You are a helpful chatbot. Respond thoughtfully to the following question:
    {context}
    User: {question}
    Chatbot:"""
    prompt = PromptTemplate(template=prompt_templates, input_variables=["context", 'question'])
    qa_chain = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=False, chain_type_kwargs={"prompt": prompt})
    return qa_chain

qa_chain = setup_qa_chain(vector_db, llm)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    query = data.get('query')
    if not query:
        return jsonify({'error': 'Query is required'}), 400

    response = qa_chain.run(query)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)