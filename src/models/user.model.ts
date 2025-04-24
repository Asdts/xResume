import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        default: null,
    },
    verificationTokenExpiry: {
        type: Date,
        default: null,
    },
    forgotPasswordToken: {
        type: String,
        default: null,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
        default: null,
    },
    resume: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Resume'
    },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;