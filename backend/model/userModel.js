import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,

        },
        profile: {
            bio: { type: String, trim: true },
            file: { type: String }, // URL to resume file (Cloudinary/S3)
            profilePhoto: { type: String, default: "" }, // URL to profile photo
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
