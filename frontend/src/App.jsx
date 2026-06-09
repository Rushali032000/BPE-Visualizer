import { useState } from 'react'
import './App.css'
import { compareTokens } from './api'

function App() {
  const [text, setText] = useState('')
  const [tokenizer, setTokenizer] = useState('tiktoken')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const COLORS = [
    '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
    '#b5ead7', '#ffdac1', '#c7ceea', '#e2f0cb'
  ]

  const handleTokenize = async () => {
    if (!text.trim()) return
    setLoading(true)
    setError('')
    try {
      const data = await compareTokens(text)
      setResult(data)
    } catch (e) {
      setError('Could not connect to backend. Is it running?')
    }
    setLoading(false)
  }

  const tokens = result ? result[tokenizer].tokens : []
  const ids = result ? result[tokenizer].ids : []

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1>BPE Tokenizer Visualizer</h1>

      <div style={{ marginBottom: 16 }}>
        <label>Tokenizer: </label>
        <select value={tokenizer} onChange={e => setTokenizer(e.target.value)}>
          <option value="tiktoken">Tiktoken</option>
          <option value="sentencepiece">SentencePiece</option>
        </select>
      </div>

      <textarea
        rows={4}
        style={{ width: '100%', padding: 8, fontSize: 16, boxSizing: 'border-box' }}
        placeholder="Enter text to tokenize..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button
        onClick={handleTokenize}
        disabled={loading}
        style={{ marginTop: 8, padding: '8px 24px', fontSize: 16, cursor: 'pointer' }}
      >
        {loading ? 'Tokenizing...' : 'Tokenize'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {tokens.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <p><strong>Token count:</strong> {tokens.length}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
            {tokens.map((token, i) => (
              <span
                key={i}
                title={`Token ID: ${ids[i]}`}
                style={{
                  background: COLORS[i % COLORS.length],
                  color: '#222',
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontFamily: 'monospace',
                  fontSize: 15
                }}
              >
                {token}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App