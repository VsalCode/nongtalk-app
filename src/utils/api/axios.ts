import axios from "axios";

const baseUrl = import.meta.env.BASE_URL

export function http(token: string) {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: token ? { Authorization: `Bearer ${token}`, } : undefined,
  });

  return instance;
}
