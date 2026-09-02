import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import Admin from "../models/Admin.js";
import SubMaster from "../models/SubMaster.js";
import Master from "../models/Master.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate request
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Email, password and role are required",
      });
    }

    // Select the correct collection/model
    const models = {
      user: User,
      admin: Admin,
      "sub-master": SubMaster,
      master: Master,
    };

    const Model = models[role.toLowerCase()];

    // Invalid role
    if (!Model) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    // Find account in the selected collection
    const account = await Model.findOne({
      email: email.toLowerCase(),
    });

    if (!account) {
      return res.status(401).json({
        success: false,
        message: "Invalid email, password or role",
      });
    }

    // Check whether staff account is active
    if (role !== "user" && account.isActive === false) {
      return res.status(403).json({
        success: false,
        message: "Account is inactive",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      account.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email, password or role",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: account._id,
        role: account.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Successful login
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: account._id,
        name: account.name,
        email: account.email,
        role: account.role,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export { registerUser, login };

