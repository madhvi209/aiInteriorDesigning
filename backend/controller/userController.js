import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @desc   Register a new user
 * @route  POST /api/users/register
 * @access Public
 */
export const register = async (req, res) => {

    try {
        const { fullName, email, phoneNumber, password } = req.body;
        console.log(`Request Body: ${JSON.stringify(req.body)}`);

        if (!fullName || !email || !phoneNumber || !password) {
            return res.status(400).json({ message: "All fields are required.", success: false });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists.", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName,
            email,
            phoneNumber,
            password: hashedPassword,
            profile: { profilePhoto: "" }, // Default empty photo
        });

        await newUser.save();

        return res.status(201).json({ message: "Account created successfully.", success: true });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc   User Login
 * @route  POST /api/users/login
 * @access Public
 */
export const login = async (req, res) => {
    console.log("Login endpoint hit");

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all details.", success: false });
        }

        // Fetch the user from the database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect email or password.", success: false });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1d" });

        return res.status(200)
            .cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
            .json({
                message: `Welcome back, ${user.fullName}!`,
                user,
                success: true,
            });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc   Logout user
 * @route  GET /api/users/logout
 * @access Private
 */
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true,
        });
    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc   Update user profile
 * @route  PUT /api/users/update-profile
 * @access Private (Authenticated users only)
 */
export const updateProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, bio, skills } = req.body;

        let skillsArray = skills ? skills.split(",").map(skill => skill.trim()) : [];

        const userId = req.user.id;
        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found.", success: false });
        }

        user.fullName = fullName || user.fullName;
        user.email = email || user.email;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.profile.bio = bio || user.profile.bio;
        user.profile.skills = skillsArray.length ? skillsArray : user.profile.skills;

        await user.save();

        return res.status(200).json({ message: "Profile updated successfully.", user, success: true });
    } catch (error) {
        console.error("Profile update error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

/**
 * @desc   Get user profile
 * @route  GET /api/users/profile
 * @access Private (Authenticated users only)
 */
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found.", success: false });
        }

        return res.status(200).json({ user, success: true });
    } catch (error) {
        console.error("Get profile error:", error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};
