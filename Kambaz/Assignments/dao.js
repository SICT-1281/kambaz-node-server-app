import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export async function findAllAssignments() {
  return model.find();
}

export async function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export async function findAssignmentById(assignmentId) {
  return model.findById(assignmentId);
}

export async function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}

export async function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

