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