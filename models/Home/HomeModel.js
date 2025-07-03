import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    sectionName: {
      type: String,
      required: true,
      enum: [
        "hero",
        "about",
        "services",
        "testimonials",
        "faq",
        "contact",
        "cta",
        "team",
        "newsletter"
      ]
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema, "home");
export default Home;
