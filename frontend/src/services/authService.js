import api from "./api"

const SESSION_DURATION = 2 * 60 * 60 * 1000 // 2 hours

const login = async (loginData) => {
  const response = await api.post("/auth/login", loginData)

  const data = response.data

  console.log("AUTH SERVICE RESPONSE:", data)

  if (data.success && data.token) {
    sessionStorage.setItem("token", data.token)
    sessionStorage.setItem("user", JSON.stringify(data.user))
    sessionStorage.setItem("loginTime", Date.now().toString())

    console.log(
      "TOKEN SAVED:",
      sessionStorage.getItem("token")
    )

    console.log(
      "USER SAVED:",
      sessionStorage.getItem("user")
    )

    console.log(
      "LOGIN TIME SAVED:",
      sessionStorage.getItem("loginTime")
    )
  }

  return data
}

const register = async (userData) => {
  const response = await api.post("/auth/register", userData)
  return response.data
}

const registerStaff = async (staffData) => {
  const response = await api.post("/staff/register", staffData)
  return response.data
}

const getCurrentUser = () => {
  const user = sessionStorage.getItem("user")

  if (!user) return null

  try {
    return JSON.parse(user)
  } catch {
    return null
  }
}

const getToken = () => {
  return sessionStorage.getItem("token")
}

const isAuthenticated = () => {
  const token = sessionStorage.getItem("token")
  const loginTime = sessionStorage.getItem("loginTime")

  if (!token || !loginTime) {
    return false
  }

  const elapsedTime = Date.now() - Number(loginTime)

  if (elapsedTime >= SESSION_DURATION) {
    logout()
    return false
  }

  return true
}

const logout = () => {
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("user")
  sessionStorage.removeItem("loginTime")
}

const clearSession = () => {
  sessionStorage.clear()
}

const authService = {
  login,
  register,
  registerStaff,
  getCurrentUser,
  getToken,
  isAuthenticated,
  logout,
  clearSession,
}

export default authService