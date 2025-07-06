import mongoose from "mongoose";

const contactCardSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      default: "contactCard",
      required: true,
    },
    type: {
      type: String,
      enum: ["address", "call", "email"],
      required: true,
    },
    label: { type: String, required: true },
    value: { type: String, required: true },
    icon: { type: String, required: true },     
    bgImage: { type: String, required: true },  
  },
  { timestamps: true }
);

export default mongoose.model("ContactCard", contactCardSchema, "contactus");
