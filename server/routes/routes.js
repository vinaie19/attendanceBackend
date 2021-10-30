import { getAttendance, postAttendance } from "../controllers/attendance.js";
import express from "express";

const router = express.Router();

router.get("/", getAttendance);
router.post("/", postAttendance);

export default router;
