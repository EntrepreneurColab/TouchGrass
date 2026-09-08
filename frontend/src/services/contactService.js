import api from "./api"

const contactService = {
  createContact: async (contactData) => {
    const response = await api.post("/contact", contactData)

    return response.data
  },

  getContacts: async () => {
    const response = await api.get("/contact")

    return response.data
  },
}

export default contactService