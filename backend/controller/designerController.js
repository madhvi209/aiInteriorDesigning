// controllers/designerController.js
import Designer from "../model/designerModel.js";
import cloudinary from "../utils/clodinary.js";  // Ensure this is your Cloudinary utility

// Get all designers
export const getAllDesigners = async (req, res) => {
    try {
        const designers = await Designer.find();
        res.status(200).json(designers);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch designers", error });
    }
};

// Add a new designer
export const addDesigner = async (req, res) => {
    try {
        const { name, experience, charge, location, nationality, email, phone, specialization, bio } = req.body;

        // Check for required fields
        if (!name || !experience || !charge || !location || !email || !phone || !specialization) {
            return res.status(400).json({ message: "Please fill all required fields" });
        }

        // Log the request body for debugging
        console.log(`Request Body: ${JSON.stringify(req.body)}`);

        // Initialize profileImageUrl as null or empty if no image is uploaded
        let profileImageUrl = null;

        try {
            if (req.file && req.file.path) {
                // Upload the image to Cloudinary
                const result = await cloudinary.uploader.upload(req.file.path, {
                    folder: 'designers',
                });
                console.log("Uploaded file:", req.file);

                // Use Cloudinary's secure URL
                profileImageUrl = result.secure_url;
            }
        } catch (uploadError) {
            console.error('Cloudinary upload error:', uploadError.message);
            return res.status(500).json({ message: "Failed to upload image to Cloudinary", error: uploadError.message });
        }

        // Create a new designer entry in the database
        const newDesigner = new Designer({
            name,
            experience,
            charge,
            location,
            nationality: nationality || "Indian",  // Default nationality if not provided
            email,
            phone,
            specialization,
            bio,
            profileImage: profileImageUrl,  // Use Cloudinary URL directly
        });

        // Save the new designer to the database
        await newDesigner.save();

        // Return success response
        res.status(201).json({ message: "Designer added successfully", designer: newDesigner });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to add designer", error });
    }
};

// Update a designer (example with image upload)
export const updateDesigner = async (req, res) => {
    try {
        const designerId = req.params.id;
        const updateData = req.body;

        if (req.file) {
            // Upload new image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "designers",
                transformation: [{ width: 500, height: 500, crop: "limit" }]
            });

            updateData.profileImage = result.secure_url;
        }

        const updatedDesigner = await Designer.findByIdAndUpdate(designerId, updateData, { new: true });

        if (!updatedDesigner) {
            return res.status(404).json({ message: "Designer not found" });
        }

        res.status(200).json({ message: "Designer updated successfully", designer: updatedDesigner });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update designer", error });
    }
};

// Delete a designer
export const deleteDesigner = async (req, res) => {
    try {
        const designer = await Designer.findById(req.params.id);

        if (!designer) {
            return res.status(404).json({ message: "Designer not found" });
        }

        // Delete image from Cloudinary if exists
        if (designer.profileImage) {
            const publicId = designer.profileImage.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`designers/${publicId}`);
        }

        await Designer.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Designer deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete designer", error });
    }
};
// Get a single designer by ID
export const getDesignerById = async (req, res) => {
    try {
        const designer = await Designer.findById(req.params.id);
        if (!designer) {
            return res.status(404).json({ message: "Designer not found" });
        }
        res.status(200).json(designer);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch designer", error });
    }
};