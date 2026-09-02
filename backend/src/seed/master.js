import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import bcrypt from "bcryptjs";

import connectDB from "../config/db.js";
import Master from "../models/Master.js";

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