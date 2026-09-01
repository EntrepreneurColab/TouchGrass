require("dotenv").config();

const bcrypt = require("bcryptjs");

const connectDB = require("../config/db");
const Master = require("../models/Master");

const createMaster = async () => {
  try {
    await connectDB();

    const existingMaster = await Master.findOne();

    if (existingMaster) {
      console.log("Master already exists.");
      process.exit(0);
    }

    const password = await bcrypt.hash("#J@simS@@d07", 12);

    const master = await Master.create({
      name: "Jasim",
      email: "master@touchgrass.com",
      password,
    });

    console.log("Master created successfully:");
    console.log(master.email);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createMaster();