import tiktoken

encoder = tiktoken.get_encoding("cl100k_base")

def tokenize(text: str):
    token_ids = encoder.encode(text)

    tokens = [
        encoder.decode([token_id])
        for token_id in token_ids
    ]

    return {
        "tokens": tokens,
        "ids": token_ids,
        "count": len(tokens)
    }