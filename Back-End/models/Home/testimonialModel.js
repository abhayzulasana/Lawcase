import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
    enum: ["testimonials"],
    default: "testimonials",
  },
  data: {
    image: { type: String, required: true },
    quote: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
  },
}, { timestamps: true });

const Testimonial = mongoose.model("Testimonial", testimonialSchema, "home");
export default Testimonial;