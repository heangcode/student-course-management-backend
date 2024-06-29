import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers";

const router = Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export { router as studentRoutes };
