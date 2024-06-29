import { Schema, model } from "mongoose";

interface IStudent {
  fullNameEN: string;
  fullNameKM: string;
  dateOfBirth: Date;
  gender: string;
  phoneNumber: string;
  isDeleted: boolean;
}

const studentSchema = new Schema<IStudent>({
  fullNameEN: { type: String, required: true },
  fullNameKM: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

const StudentModel = model<IStudent>("Student", studentSchema);

export default StudentModel;
