const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Admin = require("../models/Admin");
const SubMaster = require("../models/SubMaster");
const Master = require("../models/Master");

const allowedRoles = {
  master: ["master", "sub-master", "admin"],
  "sub-master": ["sub-master", "admin"],
  admin: ["admin"],
};

const models = {
  master: Master,
  "sub-master": SubMaster,
  admin: Admin,
};

const registerStaff = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Name, email, password and role are required",
      });
    }

    const creatorRole = req.user.role;

    if (!allowedRoles[creatorRole]?.includes(role)) {
      return res.status(403).json({
        success: false,
        message: `${creatorRole} cannot create ${role}`,
      });
    }

    const Model = models[role];

    const existingUser = await Model.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const staff = await Model.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: `${role} registered successfully`,
      staff: {
        id: staff._id,
        name: staff.name,
        email: staff.email,
        role: staff.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerStaff,
};