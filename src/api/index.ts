import axios from "axios";

export const api = axios.create({
  baseURL: "https://sf.bisevac.com/api",
});
