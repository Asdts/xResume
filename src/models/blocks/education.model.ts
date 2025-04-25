import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    highlights: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    cgpa: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Education = mongoose.models.Education || mongoose.model("Education", EducationSchema);
export default Education;