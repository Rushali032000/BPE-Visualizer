function TokenBox({ title, tokens }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        minHeight: "200px"
      }}
    >
      <h2>{title}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "10px"
        }}
      >
        {tokens.map((token, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#e3f2fd",
              padding: "6px 10px",
              borderRadius: "6px"
            }}
          >
            {token}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TokenBox;