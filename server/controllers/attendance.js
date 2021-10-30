import studentAttendance from "../models/attendanceSchema.js";
import mongoose from "mongoose";

export const getAttendance = async (req, res) => {
  console.log("att called");
  try {
    const attendance = await studentAttendance.find();
    res.status(200).json(attendance);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postAttendance = async (req, res) => {
  const attendance = req.body;
  const newAttendance = new studentAttendance(attendance);
  try {
    await newAttendance.save();
    res.status(200).json(attendance);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
