import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoutes.js";
import designerRoute from "./routes/designerRoutes.js";



dotenv.config({});

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/designer", designerRoute);




app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});