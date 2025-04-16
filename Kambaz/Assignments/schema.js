import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
   _id: String,
   title: String,
   description: String,
   course: { type: String, ref: "CourseModel" },
   points: String,
   startdate: String,
   duedate: String,
   untildate: String,
   modules: String,
 },
 { collection: "assignments" }
);
export default assignmentSchema; 