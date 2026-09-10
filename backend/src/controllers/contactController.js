import axios from "axios"
import Contact from "../models/Contact.js"

const createContact = async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      })
    }

    const contact = await Contact.create({
      name,
      email,
      company,
      phone,
      message,
    })
    try {
      await axios.post(process.env.N8N_WEBHOOK_URL, {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        company: contact.company,
        phone: contact.phone,
        message: contact.message,
        status: contact.status,
        createdAt: contact.createdAt,
      })

      console.log("Lead sent to n8n successfully")
    } catch (n8nError) {
      console.error("Failed to send lead to n8n:", n8nError.message)
    }

    return res.status(201).json({
      success: true,
      message: "Your request has been submitted successfully",
      contact,
    })
  } catch (error) {
    console.error("Contact error:", error)

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    })
  }
}

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      contacts,
    })
  } catch (error) {
    console.error("Get contacts error:", error)

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
    })
  }
}

export {
  createContact,
  getContacts,
}