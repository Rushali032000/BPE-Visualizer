from fastapi import FastAPI
from pydantic import BaseModel
from tokenizers.tiktoken import (tokenize as tiktoken)
from tokenizers.sentencepiece import (tokenize as sentencepice)

app = FastAPI()
class TextInput(BaseModel):
  text: str

@app.post("/tokenize")
def tokenize(input: TextInput):
  return {
    "tiktoken": tiktoken(input.text),
    "sentencepiece": sentencepice(input.text)
  }