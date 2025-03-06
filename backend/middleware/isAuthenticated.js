import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;  // Assuming you're using cookies for token storage
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        // Attach user data from the token to the request
        req.user = decoded;

        // Assuming the user ID and role are stored in the token
        req.id = decoded.id;
        req.role = decoded.role;  // Add user role

        // Call the next middleware function
        next();

    } catch (error) {
        console.log(error);

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        } else if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token has expired",
                success: false,
            });
        }

        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

// ✅ New isAdmin Middleware
export const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Access denied. Admins only.",
            success: false,
        });
    }
    next();
};
