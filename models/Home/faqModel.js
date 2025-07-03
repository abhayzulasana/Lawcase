// models/Home/faqModel.js
import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
    enum: ["faq"],
    default: "faq",
  },
  data: {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
}, { timestamps: true });

const FAQ = mongoose.model("FAQ", faqSchema, "home"); // uses 'home' collection
export default FAQ;
