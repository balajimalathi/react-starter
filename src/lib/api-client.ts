import axios from "axios"

let accessToken: string | null = null

export const setAccessToken = (token: string | null) => {
  accessToken = token
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://your-api",
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
