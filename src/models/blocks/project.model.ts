import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    stacks:{
        type: [String],
        required: true,
    },
    bullets:{
        type: [String],
        required: true,
    },
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;