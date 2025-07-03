import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      required: true,
      enum: ["footer"],
      default: "footer",
    },
    data: {
      logoText: { type: String },
      description: { type: String },
      menuLinks: [{ name: String, url: String }],
      otherLinks: [{ name: String, url: String }],
      socialLinks: [{ platform: String, url: String }],
      ctaText: { type: String },
      ctaButton: { type: String },
    },
  },
  { timestamps: true }
);

const Footer = mongoose.model("Footer", footerSchema, "home"); // Use home collection
export default Footer;
