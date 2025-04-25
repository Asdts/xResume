import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    skills:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Skill',
    },
    experience: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Experience',
    },
    education: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Education',
    },
    projects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project',
    },
    certifications: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Certification',
    },
    courses:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course',
    },
    other:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Other',
    }
}, { timestamps: true });

const Resume = mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
export default Resume;