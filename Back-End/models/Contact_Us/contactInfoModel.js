import mongoose from "mongoose";

const contactInfoSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      default: "contactInfo",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("ContactInfo", contactInfoSchema, "contactus");
