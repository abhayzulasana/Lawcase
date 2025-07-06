import mongoose from "mongoose";

const termsSchema = new mongoose.Schema({
  contentSections: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  status: {
    type: Number,
    enum: [0, 1],
    default: 1
  }
}, { timestamps: true });

const TermsAndConditions = mongoose.model("TermsAndConditions", termsSchema);
export default TermsAndConditions;
