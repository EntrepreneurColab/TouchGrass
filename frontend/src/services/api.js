import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token")
    const loginTime = sessionStorage.getItem("loginTime")

    if (token && loginTime) {
      const elapsedTime = Date.now() - Number(loginTime)

      // Don't send expired token
      if (elapsedTime < 2 * 60 * 60 * 1000) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("user")
        sessionStorage.removeItem("loginTime")
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default api