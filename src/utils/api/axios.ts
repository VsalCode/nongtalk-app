import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL

export function http(token?: string) {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: token ? { Authorization: `Bearer ${token}`, } : undefined,
  });

  return instance;
}
