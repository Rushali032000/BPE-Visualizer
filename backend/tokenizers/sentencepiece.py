from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("google/flan-t5-small")

def tokenize(text: str):
  tokens = tokenizer.tokenize(text)
  token_ids = tokenizer.encode(
    text,
    add_special_token=False
  )

  return {
    "tokens": tokens,
    "ids": token_ids,
    "count": len(tokens)
  }