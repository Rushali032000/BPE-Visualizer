from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from my_tokenizers.tiktoken_tokenizer import tokenize as tiktoken_tokenize
from my_tokenizers.sentencepiece_tokenizer import tokenize as sentencepiece_tokenize

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str


@app.post("/tokenize")
def tokenize(input: TextInput):
    return {
        "tiktoken": tiktoken_tokenize(input.text),
        "sentencepiece": sentencepiece_tokenize(input.text)
    }