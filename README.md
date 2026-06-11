# Token Visualizer

A simple web application to compare how different tokenizers split the same text.

Currently supports:

* TikToken (OpenAI-style tokenizer)
* SentencePiece (Flan-T5)

## Features

* Real-time tokenization
* Side-by-side tokenizer comparison
* Token count comparison
* Support for multilingual text

## Tech Stack

### Frontend

* React
* Vite

### Backend

* FastAPI
* TikToken
* Hugging Face Transformers
* SentencePiece

## Run Locally

### Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

## Example

Input:

```text
Hello! Let's talk about token visualizer today :)
```

TikToken:

```text
[Hello][!][ Let]['s][ talk][ about][ token][ visualizer][ today][ :][ )]
```

SentencePiece:

```text
[▁Hello][!][▁Let]['][s][▁talk][▁about][▁token][▁visualize][r][▁today][▁][:][)]
```

