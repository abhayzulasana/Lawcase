
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/db.js"; 
import userRoutes from "./routes/userRoutes.js"
import navbarRoutes from "./routes/navbarRoutes.js"
import homeRoutes from "./routes/homeRoutes.js";
import footerRoutes from "./routes/footerRoutes.js"
import aboutRoutes from "./routes/aboutUsRoutes.js";
dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Connect to DB
ConnectDB();

app.use("/api/users", userRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api",navbarRoutes)
app.use("/api",footerRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
