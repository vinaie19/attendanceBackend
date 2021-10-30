import mongoose from "mongoose";

const subSchema = mongoose.Schema({
  subjectName: String,
  noOfClassesHeld: Number,
  noOfClassesAttended: Number,
});

const semSchema = mongoose.Schema({
  sem: Number,
  subjects: [subSchema],
});

const studentAttendanceSchema = mongoose.Schema({
  studentName: String,
  lastClassId: String,
  universityId: String,
  sems: [semSchema],
});

const studentAttendance = mongoose.model(
  "StudentAttendance",
  studentAttendanceSchema
);

export default studentAttendance;
