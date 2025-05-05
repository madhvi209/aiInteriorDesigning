// models/Designer.js
import mongoose from "mongoose";

const designerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    charge: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        default: "Indian",
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    profileImage: {
        type: String
    },
}, { timestamps: true });

export default mongoose.model("Designer", designerSchema);
