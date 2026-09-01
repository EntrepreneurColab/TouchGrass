import api from "./api"

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials)

    return response.data
  },

  register: async (userData) => {
    const response = await api.post("/auth/register", userData)

    return response.data
  },

  registerStaff: async (staffData) => {
    const response = await api.post(
      "/auth/register-staff",
      staffData
    )

    return response.data
  },

  getRoles: async () => {
    const response = await api.get("/auth/roles")

    return response.data
  },
}

export default authService