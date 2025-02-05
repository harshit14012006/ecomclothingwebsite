import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cartRoutes from "./routers/cartRoutes.js";
import TShirtRoutes from "./routers/TShirtRoutes.js";
import uploadRoutes from "./routers/uploadRoutes.js"; // ✅ Import the upload route
import shirtRoutes from './routers/shirtRoutes.js';
import hoodiesRoutes from './routers/hoodiesRoutes.js'
import sweatersRoutes from './routers/sweatersRoutes.js'
import jacketRoutes from './routers/jacketRoutes.js';
import blazersRoutes from './routers/blazersRoutes.js'
dotenv.config(); // ✅ Load environment variables

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // ✅ Make uploads publicly accessible

// ✅ Routes
app.use("/api/cart", cartRoutes);
app.use("/api/upload", uploadRoutes); // ✅ Add upload route
app.use("/api/tshirts", TShirtRoutes);
app.use("/api/shirts", shirtRoutes);
app.use("/api/hoodies", hoodiesRoutes);
app.use("/api/sweaters", sweatersRoutes);
app.use("/api/jackets", jacketRoutes);
app.use("/api/blazers", blazersRoutes);
// ✅ Database Connection with Error Handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

connectDB();

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
