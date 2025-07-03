import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      enum: ["blogs"],
      required: true,
      default: "blogs",
    },
    data: {
      image: { type: String, required: true },
      title: { type: String, required: true },
      category: { type: String, required: true },
      content: { type: String }, // optional if you want full blog content
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema, "home");
export default Blog;

