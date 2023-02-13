import axios from "axios";

const BASE_URL = `https://api.weatherapi.com/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
