import axios from "axios";

const API_URL = "http://127.0.0.1:8001";

export const compareTokens = async (
  text
) => {
  const response =
    await axios.post(
      `${API_URL}/tokenize`,
      { text }
    );

  return response.data;
};