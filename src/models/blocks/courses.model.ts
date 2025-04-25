// File: src/models/blocks/courses.model.ts
import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Course = mongoose.models.Course || mongoose.model("Course", coursesSchema);
export default Course;