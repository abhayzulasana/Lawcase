import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema,"home");
