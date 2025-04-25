import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    dates:{
        type: String,
        required: true,
    },
    bullets:{
        type: [String],
        required: true,
    },
}, { timestamps: true });

const Experience = mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
export default Experience;