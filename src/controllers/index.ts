import { getStudents } from "./studentController";
import { createStudent } from "./studentController";
import { deleteStudent } from "./studentController";
import { updateStudent } from "./studentController";

import { createCourse } from "./courseController";
import { getCourses } from "./courseController";
import { updateCourse } from "./courseController";
import { deleteCourse } from "./courseController";

export {
  // Students
  createStudent,
  deleteStudent,
  updateStudent,
  getStudents,

  // Courses
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
