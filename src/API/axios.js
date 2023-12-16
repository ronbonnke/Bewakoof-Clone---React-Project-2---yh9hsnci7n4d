import axios from "axios";

const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: { projectId: "f104bi07c490" },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("youtube_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
