import mongoose from "mongoose";


const navbarSchema = new mongoose.Schema(
    {
      sectionName: {
        type: String,
        enum: ["navbar"],
        required: true,
        default: "navbar",
      },
      data: {
        logoImage: { type: String }, // Updated from logoText to logoImage
        links: [{ name: String, url: String }],
        buttonText: { type: String },
        buttonUrl: { type: String },
      },
    },
    { timestamps: true }
  );
  
  const Navbar = mongoose.model("Navbar", navbarSchema, "navbar");
  export default Navbar;
  