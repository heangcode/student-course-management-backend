import { Request, Response } from "express";
import StudentModel from "../models/studentModel";
import { isErrorWithMessage } from "../types/error.types";

const getStudents = async (req: Request, res: Response): Promise<void> => {
  try {
    const students = await StudentModel.find({ isDeleted: false });
    res.status(200).json(students);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const createStudent = async (req: Request, res: Response): Promise<void> => {
  const student = new StudentModel(req.body);
  try {
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

const updateStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.status(200).json(student);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const deleteStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export { createStudent, deleteStudent, updateStudent, getStudents };
