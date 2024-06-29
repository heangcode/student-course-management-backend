import { Request, Response } from "express";
import CourseModel from "../models/courseModel";
import { isErrorWithMessage } from "../types/error.types";

const getCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await CourseModel.find({ isDeleted: false });
    res.status(200).json(courses);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const createCourse = async (req: Request, res: Response): Promise<void> => {
  const course = new CourseModel(req.body);
  try {
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An unknown error occurred" });
    }
  }
};

const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await CourseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    res.status(200).json(course);
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await CourseModel.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    res.status(200).json({ message: "Course deleted" });
  } catch (error) {
    if (isErrorWithMessage(error)) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export { getCourses, createCourse, updateCourse, deleteCourse };
