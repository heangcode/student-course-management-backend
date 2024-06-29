import { Schema, model } from "mongoose";

interface ICourse {
  name: string;
  professorName: string;
  studentLimit: number;
  startDate: Date;
  endDate: Date;
  isDeleted: boolean;
}

const courseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  professorName: { type: String, required: true },
  studentLimit: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isDeleted: { type: Boolean, default: false },
});

const CourseModel = model<ICourse>("Course", courseSchema);

export default CourseModel;
