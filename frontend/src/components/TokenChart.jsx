import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function TokenChart({
  tiktokenCount,
  sentencepieceCount
}) {
  const data = [
    {
      tokenizer: "TikToken",
      count: tiktokenCount
    },
    {
      tokenizer: "SentencePiece",
      count: sentencepieceCount
    }
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <BarChart data={data}>
        <XAxis dataKey="tokenizer" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TokenChart;